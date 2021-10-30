<template>
  <div class="row">
    <div
      v-if="!$accessor.isMobile"
      class="col bg-secondary"
    >
      qwe
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

export default Vue.extend({
  name: 'App'
})
</script>
