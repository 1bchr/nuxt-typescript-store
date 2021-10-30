<template>
  <div class="navbar navbar-dark bg-info">
    <div
      class="w-100 d-flex justify-content-between"
      :class="{ 'container': !$accessor.isMobileOrTable }"
    >
      <div class="d-flex">
        <button
          v-if="$accessor.isMobile"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <a
          class="navbar-brand"
          :class="{ 'ml-2': $accessor.isMobile }"
          href="/"
        >
          {{ $accessor.storeName }}
        </a>
      </div>
      <div class="navbar-nav flex-row">
        <a class="nav-link ml-2" href="#">Корзина</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CommonHeader',
  methods: {}
})
</script>
