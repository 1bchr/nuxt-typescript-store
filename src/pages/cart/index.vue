<template>
  <div>
    <breadcrumbs cart />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Breadcrumbs from '~/src/components/ui/Breadcrumbs.vue'

export default Vue.extend({
  name: 'Cart',
  components: { Breadcrumbs }
})
</script>

<style lang="scss" scoped>

</style>
