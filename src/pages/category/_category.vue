<template>
  <div>
    <h1
      class="py-3"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
    >
      {{ getCategoryName() }}
    </h1>
    <div
      class="row mx-0"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
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
        class="row row-cols-3 ml-0 p-0"
        :class="{
          'col': $accessor.isMobile,
          'col-9': !$accessor.isMobile
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
import Categories from '~/src/components/catalog/Categories.vue'
import ProductCard from '~/src/components/catalog/ProductCard.vue'

export default Vue.extend({
  name: 'App',
  components: { Categories, ProductCard },
  computed: {
    id () {
      return Number(this.$route.params.category)
    }
  },
  async mounted () {
    await this.getProducts(this.id)
  },
  methods: {
    async getProducts (category: number) {
      await this.$accessor.getProductsByCategory({ category })
    },
    getCategoryName (): string {
      const currentCategory = this.$accessor.categories.find(el => el.id === this.id)
      return currentCategory ? currentCategory.name : 'Категория'
    }
  }
})
</script>
