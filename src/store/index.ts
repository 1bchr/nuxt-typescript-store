// import { Context } from '@nuxt/types'
import { getAccessorType, actionTree, getterTree, mutationTree } from 'typed-vuex'

export const strict = false

export const state = () => ({})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, mutations, getters }, {})

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})
