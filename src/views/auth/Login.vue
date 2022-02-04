<template>
  <div class="login row justify-content-center align-items-center">
    <div class="offset-4 col-8">
      <h3>User sign in</h3>
    </div>
    <div class="col-lg-4">
      <pre>{{ errors }}</pre>
    </div>
    <div class="col-lg-8">
      <form @submit="submit" class="my-3">
        <div class="row">
          <div class="col-md-6">
            <BaseInput type="email"
                       :error="errors.email"
                       label="Email"
                       className="form-control mb-2"
                       placeholder="Type Email"
                       v-model="email"/>

            <BaseInput type="password"
                       :error="errors.password"
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
import BaseSelect          from "@/components/BaseSelect";
import {ref}               from "vue";
import {useField, useForm} from "vee-validate";


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
    const login            = () => {
      let users = JSON.parse(localStorage.getItem('users') ?? "[]");
      users.findIndex(user => user.email === form.value.email) === -1
      ? users.push(form.value)
      : alert('User already exists');

      console.log(users.indexOf(user => user.email === form.value.email), 'aaa');

      localStorage.setItem('users', JSON.stringify(users));
    };

    const required = (value) => {
      return !!value || 'This field is required';
    };

    const validEmail = (value) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Please enter a valid email address';
    }

    const validationSchema = {
      email   : value => {
        const req = required(value);
        if (req !== true) return req;
        const val = validEmail(value);
        if (val !== true) return val;

        return true;
      },
      password: required,
    }

    const initialValues = {
      email   : '',
      password: '',
    }

    const {handleSubmit, errors} = useForm(
        {
          validationSchema,
          initialValues,
        },
    );

    const submit = handleSubmit(values => {
      console.log(values);
      login();
    });

    const {value: email}    = useField('email');
    const {value: password} = useField('password');

    const remember_me = ref(false);

    return {
      marital_statuses,
      genders,
      hobbies,
      email,
      password,
      remember_me,
      submit,
      errors,
    }
  },
}
</script>

<style scoped>

</style>