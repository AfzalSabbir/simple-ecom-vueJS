<template>
  <div class="register row justify-content-center align-items-center">
    <div class="offset-4 col-8">
      <h3>Create a new user</h3>
    </div>
    <div class="col-lg-4">
      <pre>{{ form }}</pre>
    </div>
    <div class="col-lg-8">
      <form action="" class="my-3">
        <div class="row">
          <div class="col-md-6">
            <BaseInput type="text"
                       label="Name"
                       className="form-control mb-2"
                       placeholder="Type your full name"
                       v-model="form.name"/>

            <BaseInput type="text"
                       label="Username"
                       className="form-control mb-2"
                       placeholder="Type username"
                       v-model="form.username"/>

            <BaseInput type="number"
                       label="Expected Salary"
                       className="form-control mb-2"
                       placeholder="Your Expected Salary"
                       v-model="form.expected_salary"/>

            <BaseInput type="number"
                       label="Date Of Birth"
                       className="form-control mb-2"
                       placeholder="Date Of Birth"
                       v-model="form.date_of_birth"/>

            <BaseInput type="email"
                       label="Email"
                       className="form-control mb-2"
                       placeholder="Type Email"
                       v-model="form.email"/>

            <BaseInput type="password"
                       label="Password"
                       className="form-control mb-2"
                       placeholder="Type Password"
                       v-model="form.password"/>

            <BaseInput type="password"
                       label="Confirm Password"
                       className="form-control mb-2"
                       placeholder="Type Confirm Password"
                       v-model="form.password_confirmation"/>
          </div>
          <div class="col-md-6">
            <BaseSelect label="Marital Status"
                        v-model="form.marital_status"
                        className="form-control mb-2"
                        :options="marital_statuses"/>
            <BaseCheckbox label="Like Gaming"
                          type="checkbox"
                          className="me-1"
                          v-model="form.gaming"/>

            <BaseRadioGroup label="Gander"
                            type="radio"
                            name="gender"
                            className="me-1"
                            v-model="form.gender"
                            :options="genders"/>

            <BaseRadioGroup label="Gander 2"
                            type="radio"
                            name="gender"
                            className="me-1"
                            v-model="form.gender2"
                            :options="genders"/>
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

export default {
  name      : "Register",
  components: {BaseSelect},
  data      : () => ({
    marital_statuses: [
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
    ],
    genders         : [
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
    ],
    hobbies         : [
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
    ],
    form            : {
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
      gaming               : '',
    },
  }),
}
</script>

<style scoped>

</style>