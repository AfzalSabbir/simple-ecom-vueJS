<template>
  <label v-if="label">
    {{ label }}
  </label>
  <input
      :class="className"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"/>
</template>

<script>
export default {
  name : "BaseInput",
  props: {
    modelValue: {
      type    : [String, Number],
      required: true,
    },
    label     : {
      type   : String,
      default: null,
    },
    className : {
      type   : String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>