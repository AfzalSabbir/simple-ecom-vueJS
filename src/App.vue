<template>
  <TopNav/>

  <div class="container">
    <router-view/>
  </div>
</template>
<script>
import TopNav from "@/components/TopNav";

export default {
  components: {TopNav},
}
</script>