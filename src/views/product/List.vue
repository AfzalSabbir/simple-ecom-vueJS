<template>
  <div class="" v-show="!loading">
    <div class="" v-if="productList.length">
      <table class="table table-hover table-striped table-light">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" class="text-start">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Rating</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in productList" :key="product.id">
          <th scope="row">{{ index + 1 }}</th>
          <td class="text-start">{{ product.title }}</td>
          <td>
            <router-link :to="{ name: 'CategoryProductList', params: {category: `${product.category}`} }">
              {{ product.category }}
            </router-link>
          </td>
          <td>{{ product.price }}</td>
          <td>{{ product.rating.rate }}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <router-link :to="{ name: 'ProductView', params: {id:product.id} }"
                           class="btn btn-info">View
              </router-link>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="" v-else>
      <h3>No products found</h3>
    </div>
  </div>
  <div class="" v-show="loading">
    <div class="d-flex justify-content-center">
      <i class="la la-spinner la-pulse la-3x"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ProductList",
  data() {
    return {
      productList: [],
      loading    : true,
      baseUrl    : 'https://fakestoreapi.com/products',
    }
  },
  created() {
    this.getProductList();
    console.log('CategoryProductList');
  },
  methods : {
    getProductList() {
      this.loading = true;
      axios.get(this.url)
          .then(response => {
            this.productList = response.data;
          })
          .finally(() => {
            this.loading = false;
          });
    },
  },
  computed: {
    url() {
      return `${
          this.baseUrl
      }${
          this.$route.name === 'CategoryProductList'
          ? `/category/${this.$route.params.category}`
          : ''
      }`
    },
  },
}
</script>

<style scoped>
</style>