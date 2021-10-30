<template>
  <div class="d-flex flex-column">
    <h5 class="py-2">
      Категории:
    </h5>
    <ul class="list-group">
      <li
        v-for="category in $accessor.categories"
        :key="category.id"
        class="list-group-item d-flex justify-content-between align-items-center pointer"
      >
        {{ category.name }}
        <span class="badge bg-danger badge-pill text-white">
          {{ category.productCount }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Categories'
})
</script>

<style lang="scss" scoped>
.active {
  background-color: #17a2b8 !important;
  color: white;
}

.list-group-item:hover {
  background-color: rgba(23, 162, 184, 0.1);
}
</style>
