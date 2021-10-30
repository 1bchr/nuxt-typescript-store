<template>
  <div
    class="category-info"
  >
    <img
      class="category-info__img"
      :src="category.thumbnailUrl"
      :alt="`${category.name} image`"
    >
    <h5>Описание:</h5>
    <span class="category-info__description">
      {{ category.description || 'Описание у категории отсутствует' }}
    </span>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line import/named
import Vue, { PropType } from 'vue'
import { CategoryItem } from '~/src/types'

export default Vue.extend({
  name: 'CategoryInfo',
  props: {
    category: {
      type: Object as PropType<CategoryItem> | PropType<null>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.category-info {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__img {
    max-width: 100%;
    object-fit: contain;
    padding: 10px;
    margin-bottom: 10px;
  }

  &__description {
    margin-top: 5px;
  }
}
</style>
