<template>
  <div>
    <breadcrumbs cart />
    <div
      class="cart"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
    >
      <div class="cart__col flex-grow-1">
        <div
          v-for="product in $accessor.cart.products"
          :key="product.id"
          class="card__product"
        >
          <nuxt-link
            :to="`/product/${product.id}`"
            class="card__product_image"
          >
            <img :src="product.galleryImages[0].thumbnailUrl" alt="">
          </nuxt-link>
          <div class="card__product_info">
            <nuxt-link
              :to="`/product/${product.id}`"
              class="card__product_name"
            >
              {{ product.name }}
            </nuxt-link>
            <div class="card__product_actions">

            </div>
          </div>
        </div>
      </div>
      <div
        v-if="!$accessor.isMobile"
        class="cart__col flex-grow-0"
      >
        <div class="cart__registration">
          <div class="cart__info">
            <span class="cart__info_title">
              В корзине {{ $accessor.cart.products.length }} продукт(а/ов):
            </span>
            <span class="cart__info_price">
              {{ $accessor.cart.getTotalAmount + '₽' }}
            </span>
          </div>
          <button class="btn btn-danger">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'

export default Vue.extend({
  name: 'Cart',
  components: { Breadcrumbs }
})
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
}
</style>
