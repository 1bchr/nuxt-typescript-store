<template>
  <div
    v-if="value"
    class="popup__overlay"
    @click.stop="close"
  >
    <div class="popup__window">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Popup',
  props: {
    /***
     * @description prop value responsible for showing popup
     */
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    }
  }
})
</script>

<style lang="scss" scoped>
.popup {
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__window {
    background-color: white;
    padding: 30px;
    border-radius: 0.25rem;
  }
}
</style>
