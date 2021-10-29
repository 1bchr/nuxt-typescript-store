<template>
  <div class="navbar navbar-dark bg-info">
    <div class="container d-flex justify-content-between">
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
