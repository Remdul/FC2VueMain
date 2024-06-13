<template>
  <div id="app">
    <amplify-authenticator>
      <template v-slot:sign-up>
        <amplify-sign-up
          username-alias="email"
          :form-fields="[
            { type: 'username' },
            { type: 'password' },
            { type: 'email' },
            { type: 'given_name', label: 'First Name', placeholder: 'Enter your first name', required: true },
            { type: 'family_name', label: 'Last Name', placeholder: 'Enter your last name', required: true }
          ]"
        />
      </template>
      <template v-slot:default>
        <router-view />
        <TaskList />
      </template>
    </amplify-authenticator>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-vue';
import TaskList from './components/TaskList.vue';

export default defineComponent({
  name: 'App',
  components: {
    AmplifyAuthenticator,
    AmplifySignUp,
    TaskList
  }
});
</script>

<style>
@import '~@aws-amplify/ui-vue/styles.css';
</style>
