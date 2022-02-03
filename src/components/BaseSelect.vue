<template>
  <label v-if="label">{{ label }}</label>
  <select :class="className"
          :value="modelValue"
          v-bind="$attrs"
          @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="option in options"
            :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name : 'BaseSelect',
  props: {
    modelValue: {
      type    : [String, Number],
      required: true,
      default : null,
    },
    label     : {
      type   : String,
      default: '',
    },
    className : {
      type   : String,
      default: '',
    },
    options   : {
      type   : Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>

</style>