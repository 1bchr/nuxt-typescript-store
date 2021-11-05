<template>
  <div class="navbar navbar-dark bg-info">
    <div
      class="w-100 header d-flex justify-content-between"
      :class="{ 'container': !$accessor.isMobileOrTable }"
    >
      <div
        class="d-flex"
      >
        <button
          v-if="$accessor.isMobile"
          class="navbar-toggler"
          @click="showCategory = !showCategory"
        >
          <span class="navbar-toggler-icon" />
          <categories
            v-if="$accessor.isMobile && showCategory"
            class="header__categories mt-2"
          />
        </button>
        <nuxt-link
          class="navbar-brand"
          :class="{ 'ml-2': $accessor.isMobile }"
          to="/"
        >
          {{ $accessor.storeName }}
        </nuxt-link>
      </div>
      <nuxt-link to="/cart" class="navbar-nav flex-row">
        <a
          class="nav-link ml-2"
          :class="{ 'text-white': $accessor.cart.products.length }"
          href="#"
        >
          Корзина
        </a>
        <span
          v-if="$accessor.cart.products.length"
          class="badge bg-danger badge-pill text-white ml-2"
        >
          {{ $accessor.cart.products.length }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Categories from '~/src/components/category/Categories.vue'

export default Vue.extend({
  name: 'CommonHeader',
  components: { Categories },
  data () {
    return {
      showCategory: false
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;

  &__categories {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 3;
  }

  .badge {
    font-size: 16px
  }

  .flex-row {
    align-items: center;
  }

  .text-white {
    font-weight: 600;
  }
}
</style>
