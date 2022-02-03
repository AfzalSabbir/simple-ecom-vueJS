<template>
  <div class="card mb-3">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      title: "Product",
    };
  },
  created() {
    this.title = this.$route?.meta?.title ?? this.title;
  },
  watch: {
    "$route"() {
      this.title = this.$route?.meta?.title ?? this.title;
    },
  },
}
</script>

<style scoped>

</style>