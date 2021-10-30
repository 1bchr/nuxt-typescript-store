<template>
  <div class="product-card d-flex flex-column mx-2 mb-3 p-3">
    <img
      class="product-card__image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnyHcErjXASFe1Imj6U_2lmC6xN-UCNyNKuIvSB21UX3ooLyEgBXgnNWo2TBz6pE9gME&usqp=CAU"
      :alt="product.name + ' images'"
    >
    <h6 class="mt-3">
      {{ product.name }}
    </h6>
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

export default Vue.extend({
  name: 'ProductCard',
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
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: .25rem;

  &__image {
    height: 200px;
    object-fit: contain;
  }

  &__price {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
