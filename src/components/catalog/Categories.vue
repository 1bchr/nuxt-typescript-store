<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex flex-column">
      <h5 class="pb-2">
        Категории:
      </h5>
      <ul class="list-group">
        <li
          v-for="category in $accessor.categories"
          :key="category.id"
          class="list-group-item d-flex justify-content-between align-items-center pointer"
          :class="{ 'active-bg': false }"
          @mouseenter="hoveredCategory = category"
          @mouseleave="hoveredCategory = null"
        >
          {{ category.name }}
          <span class="badge bg-danger badge-pill text-white">
            {{ category.productCount }}
          </span>
        </li>
      </ul>
    </div>
    <category-info
      v-if="hoveredCategory"
      :category="hoveredCategory"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CategoryInfo from '~/src/components/catalog/CategoryInfo.vue'
import { CategoryItem } from '~/src/types'

export default Vue.extend({
  name: 'Categories',
  components: { CategoryInfo },
  data () {
    return {
      hoveredCategory: null as CategoryItem | null
    }
  }
})
</script>

<style lang="scss" scoped>
.active-bg {
  background-color: var(--info) !important;
  color: white;
}

.list-group-item {
  transition: .3s linear;

  &:hover {
    background-color: rgba(23, 162, 184, 0.2);
  }
}
</style>
