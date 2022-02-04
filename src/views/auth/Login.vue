<template>
  <div class="login row justify-content-center align-items-center">
    <div class="offset-4 col-8">
      <h3>User sign in</h3>
    </div>
    <div class="col-lg-4">
      <pre>{{ [emailError, passwordError] }}</pre>
    </div>
    <div class="col-lg-8">
      <form @submit.prevent="saveUser" class="my-3">
        <div class="row">
          <div class="col-md-6">
            <BaseInput type="email"
                       :error="emailError"
                       label="Email"
                       className="form-control mb-2"
                       placeholder="Type Email"
                       v-model="email"/>

            <BaseInput type="password"
                       :error="passwordError"
                       label="Password"
                       className="form-control mb-2"
                       placeholder="Type Password"
                       v-model="password"/>

            <BaseCheckbox label="Remember me"
                          type="checkbox"
                          className="me-1 my-2"
                          v-model="remember_me"/>
          </div>
          <div class="col-md-6">
          </div>
          <div class="col-12">
            <button class="btn btn-primary btn-block mt-3"
                    type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/components/BaseSelect";
import {ref}      from "vue";
import {useField} from "vee-validate";


export default {
  name      : "Login",
  components: {BaseSelect},
  setup() {
    // Save user
    const marital_statuses = ref([
      {
        label: 'Married',
        value: 'married',
      },
      {
        label: 'Single',
        value: 'single',
      },
      {
        label: 'Divorced',
        value: 'divorced',
      },
      {
        label: 'Widowed',
        value: 'widowed',
      },
    ]);
    const genders          = ref([
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
    ]);
    const hobbies          = ref([
      {
        label: 'Gardening',
        value: 'gardening',
      },
      {
        label: 'Reading Books',
        value: 'reading_books',
      },
      {
        label: 'Gaming',
        value: 'gaming',
      },
    ]);
    const form             = ref({
      name                 : '',
      username             : '',
      email                : '',
      expected_salary      : '',
      date_of_birth        : '',
      password             : '',
      password_confirmation: '',
      marital_status       : '',
      gender               : '',
      gender2              : '',
      gaming               : false,
      can_swim             : false,
      mobile               : '',
    });
    const saveUser         = () => {
      let users = JSON.parse(localStorage.getItem('users') ?? "[]");
      users.findIndex(user => user.email === form.value.email) === -1
      ? users.push(form.value)
      : alert('User already exists');

      console.log(users.indexOf(user => user.email === form.value.email), 'aaa');

      localStorage.setItem('users', JSON.stringify(users));
    };

    const errors = {
      name                 : [],
      username             : [],
      email                : [],
      expected_salary      : [],
      date_of_birth        : [],
      password             : [],
      password_confirmation: [],
      marital_status       : [],
      mobile               : [],
      can_swim             : [],
      gaming               : [],
    };

    const email = useField('email', (value) => {
      if (!value) {
        return 'Email is required';
      }

      return true;
    });

    const password = useField('password', (value) => {
      if (!value) {
        return 'Password is required';
      }

      return true;
    });

    const remember_me = ref(false);

    return {
      marital_statuses,
      genders,
      hobbies,
      email        : email.value ?? '',
      emailError   : email.errorMessage,
      password     : password.value ?? '',
      passwordError: password.errorMessage,
      remember_me,
      saveUser,
      errors,
    }
  },
}
</script>

<style scoped>

</style>