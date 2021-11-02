<template>
  <div>
    <h1
      class="py-3"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
    >
      Каталог
    </h1>
    <div
      class="row mx-0"
      :class="{
        'px-3': $accessor.isMobileOrTable,
        'px-2': $accessor.isMobile
      }"
    >
      <div
        v-if="!$accessor.isMobile"
        class="col px-0 d-flex"
      >
        <categories />
      </div>
      <div
        class="row ml-0"
        :class="{
          'row-cols-3': !$accessor.isMobileOrTable,
          'row-cols-2': $accessor.isMobileOrTable && !$accessor.isVerticalMobile,
          'row-cols-1': $accessor.isVerticalMobile,
          'col px-0': $accessor.isMobile,
          'col-9 px-2': !$accessor.isMobile
        }"
      >
        <div
          v-for="product in $accessor.products.items"
          :key="product.id"
          class="col px-0"
        >
          <product-card
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtAppOptions } from '@nuxt/types'
import Categories from '~/src/components/category/Categories.vue'
import ProductCard from '~/src/components/product/ProductCard.vue'

export default Vue.extend({
  name: 'App',
  components: { Categories, ProductCard },
  async asyncData ({ app } : { app: NuxtAppOptions }) {
    await app.$accessor.getProducts()
  }
})
</script>
