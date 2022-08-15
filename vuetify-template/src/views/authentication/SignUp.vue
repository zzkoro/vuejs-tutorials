<template lang="">
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            class="mx-auto mb-6"
            width="120"
            :src="require('@/assets/logo.png')"
          />
        </router-link>
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form ref="form" @submit.prevent="signUp">
                <div class="text-h4 font-weight-black mb-10">회원가입</div>
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
                    :error-messages="errors"
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
                    type="password"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호 확인"
                  :rules="{
                    confirmed: '비밀번호',
                  }"
                >
                  <v-text-field
                    v-model="passwordConfirm"
                    label="비밀번호 확인"
                    type="password"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
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
                  가입하기
                </v-btn>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { ref, reactive, toRefs } from "@vue/composition-api";

export default Vue.extend({
  name: "SignUp",
  setup(props, context) {
    const state = reactive({
      email: "",
      password: "",
      passwordConfirm: "",
      observer: undefined as any,
      form: undefined as any,
    });

    const signUp = async () => {
      const result = await state.observer.validate();
      if (result) {
        alert("가입하기");
      }
    };

    return {
      ...toRefs(state),
      signUp,
    };
  },
});
</script>
<style lang=""></style>
