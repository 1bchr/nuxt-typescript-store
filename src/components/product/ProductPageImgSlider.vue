<template>
  <div class="slider">
    <div class="slider__main">
      <transition-group
        v-for="(image, i) in imagesList"
        v-show="currentImageIndex === i"
        :key="image.id"
        :src="image.imageUrl"
        name="toggle-slide"
        tag="img"
      />
    </div>
    <div class="slider__control">
      <img
        v-for="(image, i) in imagesList"
        :key="image.id"
        :src="image.smallThumbnailUrl"
        alt="Control img"
        @mouseenter="selectSlide(i)"
        @click="$accessor.isMobileOrTable ? selectSlide(i) : undefined"
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ProductGalleryImages } from '~/src/types/products'

export default Vue.extend({
  name: 'ProductPageImgSlider',
  props: {
    imagesList: {
      type: Array as PropType<ProductGalleryImages[]>,
      required: true
    }
  },
  data () {
    return {
      currentImageIndex: 0
    }
  },
  methods: {
    selectSlide (id: number) {
      this.currentImageIndex = id
    }
  }
})
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  width: 100%;
  height: 640px;
  max-width: 480px;

  @include tablet() {
    height: 480px;
    min-width: 320px;
  }

  @include mobile() {
    height: 480px;
    display: flex;
  }

  &__main {
    width: 100%;
    height: 100%;

    @include mobile() {
      width: calc(100% - 70px);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__control {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    transition: .2s;

    @include mobile() {
      height: auto;
      width: 70px;
      flex-direction: column;
      justify-content: start;
      margin-left: 5px;
    }

    img {
      width: 100px;
      object-fit: contain;
      margin-left: 10px;
      opacity: .6;
      cursor: pointer;
      transition: .3s;

      @include mobile() {
        width: 100%;
        margin-left: 0;
        margin-top: 5px;
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
