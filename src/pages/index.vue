<template>
  <div
    class="row"
    :class="{ 'px-3 mx-0': $accessor.isMobileOrTable }"
  >
    <div
      v-if="!$accessor.isMobile"
      class="col px-0"
    >
      <categories />
    </div>
    <div
      class="bg-danger"
      :class="{
        'col': $accessor.isMobile,
        'col-9': !$accessor.isMobile
      }"
    >
      qwe
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Categories from '~/src/components/catalog/Categories.vue'

export default Vue.extend({
  name: 'App',
  components: { Categories }
})
</script>
