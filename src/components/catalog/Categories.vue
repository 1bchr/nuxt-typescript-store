<template>
  <div class="d-flex flex-column">
    <h5 class="pb-2">
      Категории:
    </h5>
    <ul class="list-group">
      <li
        v-for="category in $accessor.categories"
        :key="category.id"
        class="list-group-item d-flex justify-content-between align-items-center pointer"
        :class="{ 'active-bg': $accessor.currentCategory.id === category.id }"
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
  name: 'Categories',
  data () {},
  mounted () {
    this.$accessor.getStoreCategory()
  }
})
</script>

<style lang="scss" scoped>
.active-bg {
  background-color: #17a2b8 !important;
  color: white;
}

.list-group-item {
  transition: .3s linear;

  &:hover {
    background-color: rgba(23, 162, 184, 0.1);
  }
}
</style>
