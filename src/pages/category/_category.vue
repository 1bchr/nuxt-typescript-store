<template>
  <div>
    <breadcrumbs
      v-if="$accessor.categories.length"
      :category="id"
    />
    <h1
      class="pb-3"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
    >
      {{ categoryName }}
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
        <categories
          :current-category="id"
        />
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
import { Route } from 'vue-router'
import Categories from '~/src/components/category/Categories.vue'
import ProductCard from '~/src/components/product/ProductCard.vue'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'

export default Vue.extend({
  name: 'Category',
  components: { Categories, ProductCard, Breadcrumbs },
  async asyncData ({ app, route } : { app: NuxtAppOptions, route: Route }) {
    const category = Number(route.params.category)
    const currentCategory = app.$accessor.categories.find(el => el.id === category)
    await app.$accessor.getProductsByCategory({ category })

    return {
      id: category,
      categoryName: currentCategory ? currentCategory.name : ''
    }
  },
  data () {
    return {
      id: 0,
      categoryName: ''
    }
  },
  head () {
    return {
      title: this.$data.categoryName + ' | Nuxt.js-TypeScript store'
    }
  }
})
</script>
