import { actionTree, getterTree, mutationTree } from 'typed-vuex'
import { Product } from '~/src/types/products'

export const state = () => ({
  products: [] as Product[]
})

export const getters = getterTree(state, {
  thisAddedToCart: state => (id: number) => {
    return state.products.some(product => product.id === id)
  },
  getTotalAmount: (state): number => {
    return state.products.reduce((totalAmount: number, item: Product) => totalAmount + item.defaultDisplayedPrice, 0)
  }
})

export const mutations = mutationTree(state, {
  GET_PRODUCTS (state) {
    const products = localStorage.getItem('nuxt-typescript-store-cart')
    if (!products) {
      state.products = []
    } else {
      state.products = JSON.parse(products) as Product[]
    }
  },
  UPDATE_PRODUCTS (state) {
    localStorage.setItem('nuxt-typescript-store-cart', JSON.stringify(state.products))
  },
  ADD_PRODUCT (state, product: Product) {
    state.products.push(product)
  },
  REMOVE_PRODUCT (state, id: number) {
    state.products = state.products.filter(product => product.id !== id)
  }
})

export const actions = actionTree({ state, mutations, getters }, {
  getCartProducts ({ commit }) {
    commit('GET_PRODUCTS')
  },
  addToCart ({ commit }, { product } : { product: Product }) {
    commit('ADD_PRODUCT', product)
    commit('UPDATE_PRODUCTS')
  },
  removeFromCart ({ commit }, { id } : { id: number }) {
    commit('REMOVE_PRODUCT', id)
    commit('UPDATE_PRODUCTS')
  }
})
