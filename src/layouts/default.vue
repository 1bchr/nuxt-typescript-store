<template>
  <div id="__store-root" class="d-flex flex-column h-100">
    <common-header class="sticky-top" />
    <div
      class="flex-grow-1"
      :class="{ 'container': !$accessor.isMobileOrTable }"
    >
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CommonHeader from '~/src/components/header/CommonHeader.vue'

export default Vue.extend({
  name: 'Default',
  components: { CommonHeader },
  // @ts-ignore
  loading: {
    continuous: true
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
})
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, body > #__nuxt, #__nuxt > #__layout, #__layout > #__store-root  {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex: 1 0 auto;
}

html, body {
  font-size: 14px;
  background: white;
  color: black;
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
}

a {
  color: black;

  &:hover {
    text-decoration: none;
    color: black;
  }
}

.pointer {
  cursor: pointer;
}
</style>
