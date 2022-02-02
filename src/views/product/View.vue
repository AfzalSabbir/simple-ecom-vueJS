<template>
  <div class="" v-show="!loading">
    <div class="product-view gap-3" v-if="product">
      <div class="product-view__image">
        <img :src="product.image" :alt="product.title">
      </div>
      <div class="product-view__info">
        <h2>{{ product.title }}</h2>
        <h6>{{ product.category }}</h6>
        <p>{{ product.description }}</p>

        <table class="table table-sm d-inline table-borderless">
          <tbody>
          <tr>
            <td>Rate</td>
            <td>:</td>
            <td>
              <div v-html="ratingRate" :title="product.rating.rate"></div>
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              :
            </td>
            <td>{{ product.price }}</td>
          </tr>
          <tr>
            <td colspan="100%">
              <button @click="addToCart">Add to cart</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="" v-show="loading">
    <div class="d-flex justify-content-center">
      <i class="la la-spinner la-pulse la-3x"></i>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name : "ProductView",
  props: {
    id: {
      require: true,
    },
  },
  data() {
    return {
      product: null,
      loading: true,
    }
  },
  created() {
    this.getProduct();
  },
  methods : {
    getProduct() {
      this.loading = true;
      axios.get(`https://fakestoreapi.com/products/${this.id}`)
          .then(response => {
            this.product = response.data;
          })
          .finally(() => {
            this.loading = false;
          });
    },
  },
  computed: {
    ratingRate() {
      let rate = this.product.rating.rate;
      // get full number
      let full = Math.floor(rate);
      // get half number
      let half = Math.ceil(rate % 1);
      // get rest number
      let rest = 5 - full - (half > 0 ? 1 : 0);

      return `<i class="la la-star"></i>`.repeat(full)
             + `<i class="la la-star-half-alt"></i>`.repeat(half)
             + `<i class="la la-star-o"></i>`.repeat(rest)
             + ` <span class="text-muted">(${this.product.rating.count})</span>`;
    },
    ratingCount() {
      return this.product.rating.count;
    },
  },
}
</script>

<style scoped lang="scss">
.product-view {
  display     : flex;
  align-items : center;
}

.product-view__image {
  width  : 200px;
  height : 200px;
  margin : 0 auto;

  img {
    width  : 100%;
    height : 100%;
  }
}
</style>