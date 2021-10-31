<template>
  <div
    class="slider"
    @mousemove="test"
    @mouseleave="setCurrentImageUrl"
  >
    <img
      v-if="!currentImageUrl"
      src="../../assets/noimg.png"
      alt="Product image"
    >
    <img
      v-if="currentImageUrl"
      :src="currentImageUrl"
      alt="Product image"
    >
    <div class="slider__navigation">
      <div
        v-for="index in images.length"
        :key="index"
        class="slider__navigation_marker"
        :class="{ 'slider__navigation_marker-active': index === currentImageIndex }"
      />
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import { ProductGalleryImages } from '~/src/types/products'

export default Vue.extend({
  name: 'ProductCardImgSlider',
  props: {
    images: {
      type: Array as PropType<ProductGalleryImages[]>,
      required: true
    }
  },
  data () {
    return {
      currentImageUrl: '',
      currentImageIndex: 0
    }
  },
  mounted () {
    this.setCurrentImageUrl()
  },
  methods: {
    setCurrentImageUrl () {
      if (!this.images.length) return
      this.currentImageUrl = this.images[0].smallThumbnailUrl
      this.currentImageIndex = 0
    },
    test (event: MouseEvent) {
      if (this.images.length <= 1) return
      const element = event.target as HTMLElement
      const elementWidth = element.clientWidth
      const imgIndex = Math.ceil(event.offsetX / (elementWidth / this.images.length)) || 1

      this.currentImageUrl = this.images[imgIndex - 1].smallThumbnailUrl
      this.currentImageIndex = imgIndex
    }
  }
})
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__navigation {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 2px;

    &_marker {
      flex: 1 0 auto;
      height: 100%;
      background-color: transparent;

      &-active {
        background-color: var(--danger);
      }
    }
  }
}
</style>
