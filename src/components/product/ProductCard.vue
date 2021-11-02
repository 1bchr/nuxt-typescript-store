<template>
  <div class="product-card d-flex flex-column mx-2 mb-3 p-3">
    <nuxt-link :to="`/product/${product.id}`">
      <product-card-img-slider
        :images="product.galleryImages"
      />
    </nuxt-link>
    <nuxt-link :to="`/product/${product.id}`" class="mt-3 h6">
      {{ product.name }}
    </nuxt-link>
    <div class="d-flex mt-3 justify-content-between align-items-center">
      <span class="product-card__price">
        {{ product.defaultDisplayedPriceFormatted }}
      </span>
      <button type="button" class="btn btn-danger">
        В корзину
      </button>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import { Product } from '~/src/types/products'
import ProductCardImgSlider from '~/src/components/product/ProductCardImgSlider.vue'

export default Vue.extend({
  name: 'ProductCard',
  components: { ProductCardImgSlider },
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: .25rem;

  &__price {
    font-size: 18px;
    font-weight: 600;
  }
}

.h6 {
  transition: .2s;

  &:hover {
    color: var(--info)
  }
}
</style>
