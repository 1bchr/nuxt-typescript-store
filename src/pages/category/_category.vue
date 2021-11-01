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
      {{ getCategoryName() }}
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
import Categories from '~/src/components/category/Categories.vue'
import ProductCard from '~/src/components/product/ProductCard.vue'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'

export default Vue.extend({
  name: 'App',
  components: { Categories, ProductCard, Breadcrumbs },
  async fetch () {
    await this.getProducts(this.id)
  },
  computed: {
    id (): number {
      return Number(this.$route.params.category)
    }
  },
  methods: {
    async getProducts (category: number): void {
      await this.$accessor.getProductsByCategory({ category })
    },
    getCategoryName (): string {
      const currentCategory = this.$accessor.categories.find(el => el.id === this.id)
      return currentCategory ? currentCategory.name : ''
    }
  }
})
</script>
