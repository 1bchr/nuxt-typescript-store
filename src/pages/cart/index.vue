<template>
  <div class="d-flex flex-column flex-grow-1">
    <breadcrumbs cart />
    <div
      class="cart flex-grow-1"
      :class="{
        'px-3': $accessor.isMobileOrTable,
        'flex-column': $accessor.isMobile
      }"
    >
      <div class="cart__col flex-grow-1">
        <div
          v-for="product in $accessor.cart.products"
          :key="product.id"
          class="cart__product"
          :class="{ 'mr-3': !$accessor.isMobile }"
        >
          <nuxt-link
            :to="`/product/${product.id}`"
            class="cart__product_image"
          >
            <img :src="product.galleryImages[0].thumbnailUrl" alt="">
          </nuxt-link>
          <div class="cart__product_info d-flex flex-column justify-content-between">
            <nuxt-link
              :to="`/product/${product.id}`"
              class="cart__product_name"
            >
              {{ product.name }}
            </nuxt-link>
            <div
              class="d-flex"
              :class="{
                'justify-content-between': !$accessor.isMobile,
                'flex-column': $accessor.isMobile
              }"
            >
              <span class="cart__price">
                {{ product.defaultDisplayedPriceFormatted }}
              </span>
              <button
                class="btn btn-danger"
                @click="remove(product.id)"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart__col flex-grow-0"
        :class="{ 'cart__sticky-bottom': $accessor.isMobile }"
      >
        <div class="breadcrumb flex-column">
          <div class="d-flex justify-content-between align-items-center">
            <span class="mr-4">
              В корзине {{ $accessor.cart.products.length }} продукт(а/ов):
            </span>
            <span class="cart__price">
              {{ $accessor.cart.getTotalAmount + '₽' }}
            </span>
          </div>
          <button
            class="btn btn-danger mt-4"
            @click="placeOrder"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
    <popup v-model="orderWindow">
      <div class="d-flex flex-column align-items-center">
        <span class="h3">Ваш заказ оформлен.</span>
        <span class="h3 mt-3">Спасибо за покупку!</span>
        <nuxt-link
          to="/"
          class="btn btn-info mt-3"
        >
          Перейти на главную
        </nuxt-link>
      </div>
    </popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'
import Popup from '~/src/components/ui/Popup.vue'

export default Vue.extend({
  name: 'Cart',
  components: { Breadcrumbs, Popup },
  data () {
    return {
      orderWindow: false
    }
  },
  methods: {
    remove (id: number): void {
      this.$accessor.cart.removeFromCart({ id })
    },
    placeOrder (): void {
      this.$accessor.cart.REMOVE_ALL_PRODUCTS()
      this.orderWindow = true
    }
  }
})
</script>

<style lang="scss" scoped>
.cart {
  display: flex;

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__product {
    border-top: 1px solid #e9ecef;
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
      flex: 1 1 auto;
      padding: 20px;
    }

    &_name {
      font-size: 18px;
      font-weight: 600;
      width: 100%;
    }
  }

  &__sticky-bottom {
    bottom: 0;
    position: sticky;
  }
}
</style>
