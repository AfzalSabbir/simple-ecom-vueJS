<template>
  <label v-if="label" :class="errorClassName">{{ label }}</label>
  <select :class="[className, errorClassName]"
          :value="modelValue"
          v-bind="$attrs"
          @change="$emit('update:modelValue', $event.target.value)">
    <option v-for="option in options"
            :value="option.value">
      {{ option.label }}
    </option>
  </select>

  <ShowErrorMessages :errors="errors"/>
</template>

<script>
import Helpers from "@/tools/Helpers";

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
      default: [],
    },
    errors    : {
      type   : Array,
      default: [],
    },
  },

  setup(props) {
    let {errors} = props;

    return {
      errorClassName: Helpers().getErrorClassName(errors),
    };
  },
}
</script>

<style scoped>

</style>