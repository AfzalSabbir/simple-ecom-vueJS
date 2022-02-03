<template>
  <input :class="className"
         :id="uuid"
         :checked="modelValue"
         @change="$emit('update:modelValue', $event.target.checked)"
         v-bind="$attrs">
  <label :for="uuid" v-if="label">
    {{ label }}
  </label>
</template>

<script>
import Uuid from "@/tools/UUID";

export default {
  name : "BasicCheckbox",
  props: {
    label     : {
      type   : String,
      default: null,
    },
    modelValue: {
      type   : Boolean,
      default: false,
    },
    className : {
      type   : String,
      default: '',
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