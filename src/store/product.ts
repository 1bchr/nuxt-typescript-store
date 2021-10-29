import { actionTree, getterTree, mutationTree } from 'typed-vuex'

export const state = () => ({})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

export const actions = actionTree({ state, mutations, getters }, {})
