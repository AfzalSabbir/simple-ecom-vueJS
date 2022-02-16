<template>
  <label v-if="label" :class="errorClassName">
    {{ label }}
  </label>
  <input :class="[className, errorClassName]"
         v-bind="$attrs"
         @input="$emit('update:modelValue', $event.target.value)"
         :value="modelValue"/>

  <ShowErrorMessages :errors="errors"/>
</template>

<script>
import Helpers from "@/tools/Helpers";

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