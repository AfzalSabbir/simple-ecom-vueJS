<template>
  <label class="d-block mt-2" v-if="label">
    {{ label }}
  </label>
  <div v-for="option in options">
    <BaseRadio :label="option.label"
               @change="$emit('update:modelValue', option.value)"
               v-bind="$attrs"
               :className="className"
               :value="option.value"
               :modelValue="modelValue"
               name="gender"/>
  </div>
</template>

<script>
export default {
  name : "BasicCheckbox",
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : [String, Number],
      default: false,
    },
    className : {
      type   : String,
      default: '',
    },
    options   : {
      type    : Array,
      required: true,
    },
    name      : {
      type    : String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>