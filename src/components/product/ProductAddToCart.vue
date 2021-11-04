<template>
  <div class="widget bg-info px-3">
    <span class="widget__price">
      {{ $accessor.product.defaultDisplayedPriceFormatted }}
    </span>
    <button
      v-if="!$accessor.cart.thisAddedToCart($accessor.product.id)"
      class="btn btn-danger"
      @click="addToCart"
    >
      Купить
    </button>
    <nuxt-link
      v-else
      class="btn btn-outline-danger"
      to="/cart"
    >
      В корзину
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductAddToCart',
  methods: {
    addToCart () {
      this.$accessor.cart.addToCart({ product: this.$accessor.product })
    }
  }
})
</script>

<style lang="scss" scoped>
.widget {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  border-radius: 0.25rem;

  @include mobile() {
    width: 100%;
    border-radius: 0;
  }

  &__price {
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
