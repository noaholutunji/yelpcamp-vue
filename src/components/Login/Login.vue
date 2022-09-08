<template>
  <div class="container">
    <h2 class="text-center">Login</h2>
    <div class="loginForm">
      <form @submit.prevent="onSubmit">
        <div class="form-group" :class="{ invalid: $v.email.$error }">
          <input
            class="form-control"
            required
            type="email"
            @blur="$v.email.$touch()"
            placeholder="email"
            value=""
            v-model="email"
          />
          <p class="text-danger" v-if="!$v.email.email">
            Please provide a valid email address.
          </p>
          <p class="text-danger" v-if="!$v.email.required">
            This field must not be empty.
          </p>
        </div>
        <div class="form-group" :class="{ invalid: $v.password.$error }">
          <input
            class="form-control"
            required
            type="password"
            @input="$v.password.$touch()"
            placeholder="password"
            value=""
            v-model="password"
          />
          <p class="text-danger" v-if="!$v.password.required">
            This field must not be empty.
          </p>
        </div>
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.loginForm {
  width: 30%;
  margin: 25px auto;
}
.form-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}
</style>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password,
      });
    },
  },
};
</script>
