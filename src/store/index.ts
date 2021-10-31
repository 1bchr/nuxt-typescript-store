import { getAccessorType, actionTree, getterTree, mutationTree } from 'typed-vuex'
import * as cart from '~/src/store/cart'
import { StoreProfile, Category, CategoryItem } from '~/src/types'
import { ProductsList } from '~/src/types/products'

export const state = () => ({
  storeName: '',
  categories: [] as CategoryItem[],
  products: {} as ProductsList,

  isMobile: false,
  isMobileOrTable: false,
  windowWidth: 0,
  windowHeight: 0
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  SET_STORE_NAME (state, name: string) {
    state.storeName = name
  },
  SET_DEVICE_INFO (state, {
    isMobile,
    isTablet,
    windowWidth,
    windowHeight
  } : { isMobile: boolean, isTablet: boolean, windowWidth?: number, windowHeight?: number}) {
    state.isMobileOrTable = isMobile || isTablet
    state.isMobile = isMobile
    if (windowHeight) state.windowHeight = windowHeight
    if (windowWidth) state.windowWidth = windowWidth
  },
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  }
})

export const actions = actionTree({ state, mutations, getters }, {
  async nuxtServerInit ({ dispatch }) {
    try {
      await Promise.all([
        dispatch('getStoreProfile'),
        dispatch('getStoreCategory')
      ])
    } catch (e) {
      console.error(e)
    }
  },
  setDevice ({ commit }) {
    commit('SET_DEVICE_INFO', {
      isMobile: window.innerWidth < 768,
      isTablet: window.innerWidth < 1280 && window.innerWidth > 768,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  },
  async getStoreProfile ({ commit }) {
    const profile = await this.$axios.get('/profile') as StoreProfile

    commit('SET_STORE_NAME', profile.settings.storeName)
  },
  async getStoreCategory ({ commit }) {
    const category = await this.$axios.get('/categories') as Category

    commit('SET_CATEGORIES', category.items)
  },
  async getProducts ({ commit }) {
    const products = await this.$axios.get('/products') as ProductsList

    commit('SET_PRODUCTS', products)
  },
  async getProductsByCategory ({ commit }, { category } : { category: number }) {
    const products = await this.$axios.get('/products', {
      params: {
        category
      }
    }) as ProductsList

    commit('SET_PRODUCTS', products)
  }
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    cart
  }
})
