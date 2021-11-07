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
          class="cart__product"
        >
          <nuxt-link
            :to="`/product/${product.id}`"
            class="cart__product_image"
          >
            <img :src="product.galleryImages[0].thumbnailUrl" alt="">
          </nuxt-link>
          <div class="cart__product_info">
            <nuxt-link
              :to="`/product/${product.id}`"
              class="cart__product_name"
            >
              {{ product.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div
        v-if="!$accessor.isMobile"
        class="cart__col flex-grow-0"
      >
        <div class="breadcrumb flex-column">
          <div>
            В корзине {{ $accessor.cart.products.length }} продукт(а/ов):
            <span class="cart__price">
              {{ $accessor.cart.getTotalAmount + '₽' }}
            </span>
          </div>
          <button class="btn btn-danger mt-4">
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

  &__price {
    font-size: 20px;
    font-weight: 600;
    margin-left: 40px;
  }

  &__product {
    display: flex;
    height: 200px;

    &_image {
      flex: 0 0 auto;
      height: 100%;
      width: 200px;

      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    &_info {
      flex: 0 1 auto;
      padding: 20px;
    }

    &_name {
      font-size: 18px;
      font-weight: 600;
      width: 100%;
    }
  }
}
</style>
