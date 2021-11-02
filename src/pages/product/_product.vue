<template>
  <div>
    Product
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NuxtAppOptions } from '@nuxt/types'
import { Route } from 'vue-router'

export default Vue.extend({
  name: 'Product',
  async asyncData ({ app, route } : { app: NuxtAppOptions, route: Route }) {
    await console.log(app.$accessor.cart)
    const product = route.params.product

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
