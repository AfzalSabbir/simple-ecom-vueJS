<template>
  <div class="register row justify-content-center align-items-center">
    <div class="offset-4 col-8">
      <h3>Create a new user</h3>
    </div>
    <div class="col-lg-4">
      <pre>{{ form }}</pre>
    </div>
    <div class="col-lg-8">
      <form @submit.prevent="saveUser" class="my-3">
        <div class="row">
          <div class="col-md-6">
            <BaseInput type="text"
                       :errors="errors.name"
                       label="Name"
                       className="form-control mb-2"
                       placeholder="Type your full name"
                       v-model="form.name"/>

            <BaseInput type="text"
                       :errors="errors.username"
                       label="Username"
                       className="form-control mb-2"
                       placeholder="Type username"
                       v-model="form.username"/>

            <BaseInput type="number"
                       :errors="errors.expected_salary"
                       label="Expected Salary"
                       className="form-control mb-2"
                       placeholder="Your Expected Salary"
                       v-model="form.expected_salary"/>

            <BaseInput type="email"
                       :errors="errors.email"
                       label="Email"
                       className="form-control mb-2"
                       placeholder="Type Email"
                       v-model="form.email"/>

            <BaseInput type="password"
                       :errors="errors.password"
                       label="Password"
                       className="form-control mb-2"
                       placeholder="Type Password"
                       v-model="form.password"/>

            <BaseInput type="password"
                       :errors="errors.password_confirmation"
                       label="Confirm Password"
                       className="form-control mb-2"
                       placeholder="Type Confirm Password"
                       v-model="form.password_confirmation"/>
          </div>
          <div class="col-md-6">
            <BaseInput type="date"
                       :errors="errors.date_of_birth"
                       label="Date Of Birth"
                       className="form-control mb-2"
                       placeholder="Date Of Birth"
                       v-model="form.date_of_birth"/>

            <BaseInput type="tel"
                       :errors="errors.mobile"
                       label="Mobile"
                       className="form-control mb-2"
                       placeholder="Mobile"
                       v-model="form.mobile"/>

            <BaseSelect label="Marital Status"
                        :errors="errors.marital_status"
                        v-model="form.marital_status"
                        className="form-control mb-2"
                        :options="marital_statuses"/>

            <BaseCheckbox label="Like Gaming"
                          :errors="errors.gaming"
                          type="checkbox"
                          className="me-1 my-2"
                          v-model="form.gaming"/>

            <BaseRadioGroup label="Gender"
                            :errors="errors.gender"
                            type="radio"
                            name="gender"
                            className="me-1"
                            v-model="form.gender"
                            :options="genders"/>

            <BaseRadioGroup label="Gender 2"
                            :errors="errors.gender2"
                            type="radio"
                            name="gender"
                            className="me-1"
                            v-model="form.gender2"
                            :options="genders"/>

            <BaseCheckbox label="Can Swim"
                          :errors="errors.can_swim"
                          type="checkbox"
                          className="me-1 my-2"
                          v-model="form.can_swim"/>
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
      name                 : [{message: 'Name is required'}],
      username             : [],
      email                : [
        {message: 'Email is required'},
      ],
      expected_salary      : [],
      date_of_birth        : [],
      password             : [
        {message: 'Password min length: 6'},
        {message: 'Use some special characters'},
      ],
      password_confirmation: [],
      marital_status       : [],
      mobile               : [],
      can_swim             : [],
    };

    return {
      marital_statuses,
      genders,
      hobbies,
      form,
      saveUser,
      errors,
    }
  },
}
</script>

<style scoped>

</style>