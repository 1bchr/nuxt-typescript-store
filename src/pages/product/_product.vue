<template>
  <div class="product">
    <breadcrumbs
      v-if="$accessor.categories.length"
      :category="$accessor.product.categoryIds[0] || 0"
      :product-name="$accessor.product.name"
    />
    <div class="d-flex justify-content-between">
      <h1
        class="pb-3"
        :class="{ 'px-3': $accessor.isMobileOrTable }"
      >
        {{ $accessor.product.name }}
      </h1>
      <product-add-to-cart
        v-if="!$accessor.isMobile"
        class="product__actions px-3 mb-3"
        :class="{ 'mr-3': $accessor.isMobileOrTable }"
      />
    </div>
    <div
      class="product__container px-3"
      :class="{ 'd-flex px-0': !$accessor.isMobile }"
    >
      <product-page-img-slider
        v-if="$accessor.product.galleryImages.length"
        :images-list="$accessor.product.galleryImages"
        class="product__slider"
      />
      <div class="product__info mt-3">
        <!-- eslint-disable-next-line -->
        <div v-html="$accessor.product.description" />
      </div>
    </div>
    <product-add-to-cart
      v-if="$accessor.isMobile"
      class="product__actions px-3 py-2"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtAppOptions } from '@nuxt/types'
import { Route } from 'vue-router'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'
import ProductPageImgSlider from '~/src/components/product/ProductPageImgSlider.vue'
import ProductAddToCart from '~/src/components/product/ProductAddToCart.vue'

export default Vue.extend({
  name: 'Product',
  components: { Breadcrumbs, ProductPageImgSlider, ProductAddToCart },
  async asyncData ({ app, route } : { app: NuxtAppOptions, route: Route }) {
    const product = Number(route.params.product)

    await app.$accessor.getProductByID({ product })
    return {
      id: product
    }
  },
  data () {
    return {
      id: 0
    }
  },
  head () {
    return {
      title: this.$accessor.product.name + ' | Nuxt.js-TypeScript store'
    }
  }
})
</script>

<style lang="scss" scoped>
.product {
  &__slider {
    @include mobile() {
      margin: 0 auto;
    }
  }

  &__info {
    margin-left: 20px;

    @include mobile() {
      margin-left: 0;
    }
  }

  &__actions {
    @include mobile() {
      position: sticky;
      bottom: 0;
    }
  }
}
</style>
