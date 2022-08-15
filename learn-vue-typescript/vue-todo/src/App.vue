<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></TodoInput>
    </main>
    <div>
      <ul>
        <TodoListItem
          v-for="(todoItem, index) in todoItems"
          :key="index"
          :todoItem="todoItem"
          :index="index"
          @toggle="toggleTodoItemComplete"
          @remove="removeTodoItem(index)"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";

const storage = {
  fetch(): Todo[] {
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
  save(todoItems: Todo[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  data() {
    return {
      todoText: "",
      todoItems: [] as Todo[],
    };
  },
  components: { TodoInput, TodoListItem },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      const todo: Todo = {
        title: value,
        done: false,
      };
      this.todoItems.push(todo);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch().sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    removeTodoItem(index: number) {
      console.log("remove: " + index);
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    toggleTodoItemComplete(index: number) {
      console.log("toggle: " + index);
      const todoItem = this.todoItems[index];
      this.todoItems.splice(index, 1, {
        ...todoItem,
        done: !todoItem.done,
      });
      storage.save(this.todoItems);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
