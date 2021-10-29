import { getAccessorType, actionTree, getterTree, mutationTree } from 'typed-vuex'
import { StoreProfile } from '~/src/types'
import * as cart from '~/src/store/cart'
import * as product from '~/src/store/product'

export const state = () => ({
  storeName: ''
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  SET_STORE_NAME (state, name: string) {
    state.storeName = name
  }
})

export const actions = actionTree({ state, mutations, getters }, {
  async nuxtServerInit ({ dispatch }) {
    try {
      await Promise.all([
        dispatch('getStoreProfile')
      ])
    } catch (e) {
      console.error(e)
    }
  },
  async getStoreProfile ({ commit }) {
    const profile = await this.$axios.get('/profile') as StoreProfile

    commit('SET_STORE_NAME', profile.settings.storeName)
  }
})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    cart,
    product
  }
})
