<template>
  <div class="d-flex flex-column">
    <img
      class="product-card__image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnyHcErjXASFe1Imj6U_2lmC6xN-UCNyNKuIvSB21UX3ooLyEgBXgnNWo2TBz6pE9gME&usqp=CAU"
      :alt="product.name + ' images'"
    >
    <h6>{{ product.name }}</h6>
    <div class="d-flex">
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

<style scoped>

</style>
