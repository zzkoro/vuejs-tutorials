<template lang="">
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form ref="form" @submit.prevent="signIn">
                <div class="text-h4 font-weight-black mb-10">로그인</div>
                <validation-provider
                  v-slot="{ errors }"
                  name="이메일"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messasges="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messasges="errors"
                  />
                </validation-provider>
                <v-btn
                  class="mt-6"
                  type="submit"
                  block
                  x-large
                  rounded
                  color="primary"
                  :disabled="invalid"
                >
                  로그인
                </v-btn>
                <div class="mt-5">
                  <router-link class="text-decoration-none" to="/">
                    홈
                  </router-link>
                  |
                  <router-link
                    class="text-decoration-none"
                    to="/authentication/sign-up"
                  >
                    회원가입
                  </router-link>
                </div>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent } from "vue";

import { store } from "@/store";

import type { SignInRequest } from "@/store/modules/user/type";

export default defineComponent({
  name: "SignIn",
  setup(props, context) {
    const state = reactive({
      email: "",
      password: "",
      observer: undefined as any,
      form: undefined as any,
    });

    const signIn = () => {
      console.log(state.observer);
      console.log(state.form);

      state.observer.validate().then((result) => {
        if (result) {
          alert("로그인 처리");
          const userParam: SignInRequest = {
            email: state.email,
            password: state.email,
          };
          store.dispatch("user/signIn", userParam);
          store.commit("user/setUser", userParam);

          console.log("email:" + store.state.user.email);
        }
      });
    };

    console.log("email:" + store.state.user.email);

    return {
      ...toRefs(state),
      signIn,
    };
  },
});
</script>
<style lang=""></style>
