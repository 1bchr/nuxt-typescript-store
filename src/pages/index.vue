<template>
  <div>
    <h1
      class="py-3"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
    >
      {{ $accessor.currentCategory.name || 'Каталог' }}
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
          v-if="$accessor.categories.length"
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
  async mounted () {
    try {
      await Promise.all([
        this.$accessor.getStoreCategory(),
        this.$accessor.getProducts()
      ])
    } catch (e) {
      throw new Error(e)
    }
  }
})
</script>
