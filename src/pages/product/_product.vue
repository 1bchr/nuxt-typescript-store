<template>
  <div>
    <breadcrumbs
      v-if="$accessor.categories.length"
      :category="$accessor.product.categoryIds[0] || 0"
      :product-name="$accessor.product.name"
    />
    <h1
      class="pb-3"
      :class="{ 'px-3': $accessor.isMobileOrTable }"
    >
      {{ $accessor.product.name }}
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtAppOptions } from '@nuxt/types'
import { Route } from 'vue-router'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'

export default Vue.extend({
  name: 'Product',
  components: { Breadcrumbs },
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
  }
})
</script>

<style lang="scss" scoped>

</style>
