<template>
  <input :class="className"
         :value="value"
         :id="uuid"
         :checked="modelValue === value"
         @change="$emit('update:modelValue', value)"
         v-bind="$attrs">
  <label :for="uuid">
    {{ label }}
  </label>
</template>

<script>
import Uuid from "@/tools/UUID";

export default {
  name : "BasicRadio",
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : [String, Number],
      default: false,
    },
    value     : {
      type    : [String, Number],
      required: true,
    },
    className : {
      type   : String,
      default: '',
    },
    name      : {
      type    : String,
      required: true,
    },
  },

  setup() {
    const uuid = Uuid().generate();

    return {
      uuid,
    };
  },
}
</script>

<style scoped>

</style>