<template>
  <div>
    <common-header />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommonHeader from '~/src/components/header/CommonHeader.vue'

export default Vue.extend({
  name: 'Default',
  components: { CommonHeader }
})
</script>

<style scoped>

</style>
