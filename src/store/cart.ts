import { actionTree, getterTree, mutationTree } from 'typed-vuex'
import { Product } from '~/src/types/products'

export const state = () => ({
  products: [] as Product[]
})

export const getters = getterTree(state, {})

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

    this.UPDATE_PRODUCTS(state)
  },
  REMOVE_PRODUCT (state, id) {
    state.products = state.products.filter(product => product.id !== id)

    this.UPDATE_PRODUCTS(state)
  }
})

export const actions = actionTree({ state, mutations, getters }, {
  getCartProducts ({ commit }) {
    commit('GET_PRODUCTS')
  },
  addToCart({ commit }, { product } : { product: Product }) {
    commit('ADD_PRODUCT', product)
  },
  removeFromCart({ commit }, { id } : { id: number }) {
    commit('REMOVE_PRODUCT', id)
  }
})
