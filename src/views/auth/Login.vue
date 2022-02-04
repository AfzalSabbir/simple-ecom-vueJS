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
                       @change="handleEmailChange"
                       className="form-control mb-2"
                       placeholder="Type Email"
                       :modelValue="email"/>

            <BaseInput type="password"
                       :error="errors.password"
                       label="Password"
                       @change="handlePasswordChange"
                       className="form-control mb-2"
                       placeholder="Type Password"
                       :modelValue="password"/>

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
import * as yup            from "yup";

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

    const validationSchema = yup.object().shape({
      email   : yup.string().required('This field is required').email('Please enter a valid email address'),
      password: yup.string().required('This field is required').min(6, 'Password must be at least 6 characters'),
    });

    const initialValues = {
      email   : '',
      password: '',
    }

    const {handleSubmit, errors, setFieldValue} = useForm(
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

    const handleEmailChange = (e) => {
      setFieldValue('email', e.target.value);
    };

    const handlePasswordChange = (e) => {
      setFieldValue('password', e.target.value);
    };

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
      handleEmailChange,
      handlePasswordChange,
    }
  },
}
</script>

<style scoped>

</style>