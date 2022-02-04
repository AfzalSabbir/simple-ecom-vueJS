<template>
  <div class="register row justify-content-center align-items-center">
    <div class="offset-6 col-6">
      <h3>Create a new user</h3>
    </div>
    <div class="col-lg-3">
      <pre>{{
          {
            name,
            username,
            email,
            expected_salary,
            date_of_birth,
            password,
            password_confirmation,
            marital_status,
            gender,
            gender2,
            gaming,
            can_swim,
            mobile,
          }
        }}</pre>
    </div>
    <div class="col-lg-3">
      <pre>{{ errors }}</pre>
    </div>
    <div class="col-lg-6">
      <form @submit.prevent="saveUser" class="my-3">
        <div class="row">
          <div class="col-md-6">
            <BaseInput type="text"
                       :errors="errors.name"
                       label="Name"
                       className="form-control mb-2"
                       placeholder="Type your full name"
                       v-model="name"/>

            <BaseInput type="text"
                       :errors="errors.username"
                       label="Username"
                       className="form-control mb-2"
                       placeholder="Type username"
                       v-model="username"/>

            <BaseInput type="number"
                       :errors="errors.expected_salary"
                       label="Expected Salary"
                       className="form-control mb-2"
                       placeholder="Your Expected Salary"
                       v-model="expected_salary"/>

            <BaseInput type="email"
                       :errors="errors.email"
                       label="Email"
                       className="form-control mb-2"
                       placeholder="Type Email"
                       v-model="email"/>

            <BaseInput type="password"
                       :errors="errors.password"
                       label="Password"
                       className="form-control mb-2"
                       placeholder="Type Password"
                       v-model="password"/>

            <BaseInput type="password"
                       :errors="errors.password_confirmation"
                       label="Confirm Password"
                       className="form-control mb-2"
                       placeholder="Type Confirm Password"
                       v-model="password_confirmation"/>
          </div>
          <div class="col-md-6">
            <BaseInput type="date"
                       :errors="errors.date_of_birth"
                       label="Date Of Birth"
                       className="form-control mb-2"
                       placeholder="Date Of Birth"
                       v-model="date_of_birth"/>

            <BaseInput type="tel"
                       :errors="errors.mobile"
                       label="Mobile"
                       className="form-control mb-2"
                       placeholder="Mobile"
                       v-model="mobile"/>

            <BaseSelect label="Marital Status"
                        :errors="errors.marital_status"
                        v-model="marital_status"
                        className="form-control mb-2"
                        :options="marital_statuses"/>

            <BaseCheckbox label="Like Gaming"
                          :errors="errors.gaming"
                          type="checkbox"
                          className="me-1 my-2"
                          v-model="gaming"/>

            <BaseRadioGroup label="Gender"
                            :errors="errors.gender"
                            type="radio"
                            name="gender"
                            className="me-1"
                            v-model="gender"
                            :options="genders"/>

            <BaseRadioGroup label="Gender 2"
                            :errors="errors.gender2"
                            type="radio"
                            name="gender"
                            className="me-1"
                            v-model="gender2"
                            :options="genders"/>

            <BaseCheckbox label="Can Swim"
                          :errors="errors.can_swim"
                          type="checkbox"
                          className="me-1 my-2"
                          v-model="can_swim"/>
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
import * as yup            from "yup";
import {useField, useForm} from "vee-validate";

export default {
  name      : "Register",
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
    const saveUser         = () => {
      let users = JSON.parse(localStorage.getItem('users') ?? "[]");
      users.findIndex(user => user.email === value.email) === -1
      ? users.push(value)
      : alert('User already exists');

      console.log(users.indexOf(user => user.email === value.email), 'aaa');

      localStorage.setItem('users', JSON.stringify(users));
    };

    const validationSchema = yup.object().shape({
      name                 : yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
      username             : yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
      email                : yup.string().required('Email is required'),
      expected_salary      : yup.number().required('Expected Salary is required').min(0, 'Expected Salary must be at least 0'),
      date_of_birth        : yup.string().required('Date of Birth is required'),
      password             : yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
      password_confirmation: yup.string().required('Password Confirmation is required').oneOf([
        yup.ref('password'), null,
      ], 'Passwords must match'),
      marital_status       : yup.string().required('Marital Status is required'),
    })
    const initialValues    = {
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
    }

    const {handleSubmit, errors, setFieldValue} = useForm({
      validationSchema,
      initialValues,
    });

    const {value: name}                  = useField('name');
    const {value: username}              = useField('username');
    const {value: email}                 = useField('email');
    const {value: expected_salary}       = useField('expected_salary');
    const {value: date_of_birth}         = useField('date_of_birth');
    const {value: password}              = useField('password');
    const {value: password_confirmation} = useField('password_confirmation');
    const {value: marital_status}        = useField('marital_status');
    const {value: gender}                = useField('gender');
    const {value: gender2}               = useField('gender2');
    const {value: gaming}                = useField('gaming');
    const {value: can_swim}              = useField('can_swim');
    const {value: mobile}                = useField('mobile');


    const submit = handleSubmit((data) => {
      console.log(data);
      saveUser();
    });

    return {
      marital_statuses,
      genders,
      hobbies,
      submit,
      errors,

      name,
      username,
      email,
      expected_salary,
      date_of_birth,
      password,
      password_confirmation,
      marital_status,
      gender,
      gender2,
      gaming,
      can_swim,
      mobile,
    }
  },
}
</script>

<style scoped>

</style>