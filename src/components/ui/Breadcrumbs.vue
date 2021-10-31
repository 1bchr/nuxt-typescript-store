<template>
  <div
    class="mt-3 breadcrumb"
    :class="{ 'mx-3': $accessor.isMobileOrTable }"
  >
    <nuxt-link to="/">
      Каталог
    </nuxt-link>
    <span
      v-if="category && !productName"
      class="ml-2"
    >
      {{ '/ ' + categoryName }}
    </span>
    <nuxt-link
      v-if="category && productName"
      :to="`/category/${category}`"
      class="ml-2"
    >
      {{ '/  ' + categoryName }}
    </nuxt-link>
    <span
      v-if="productName"
      class="ml-2"
    >
      {{ '/ ' + productName }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Breadcrumbs',
  props: {
    category: {
      type: Number,
      default: 0
    },
    productName: {
      type: String,
      default: ''
    }
  },
  computed: {
    categoryName (): string {
      const category = this.category ? this.$accessor.categories.find(el => el.id === this.category) : null
      return category ? category.name : ''
    }
  }
})
</script>

<style lang="scss" scoped>
.breadcrumb {
  span {
    opacity: .3;
  }
}
</style>
