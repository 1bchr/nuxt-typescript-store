<template>
  <div class="navbar navbar-dark bg-info">
    <div
      class="w-100 d-flex justify-content-between"
      :class="{ 'container': !$accessor.isMobileOrTable }"
    >
      <a class="navbar-brand" href="/">{{ $accessor.storeName }}</a>
      <div class="navbar-nav flex-row">
        <a class="nav-link ml-2" href="#">Корзина</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommonHeader'
})
</script>

<style lang="scss" scoped>

</style>
