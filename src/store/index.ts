import { IncomingMessage } from 'http'
import { Context } from '@nuxt/types'
import { getAccessorType, actionTree, getterTree, mutationTree } from 'typed-vuex'
import * as cart from '~/src/store/cart'
import * as product from '~/src/store/product'
import { StoreProfile } from '~/src/types'

export const state = () => ({
  storeName: '',

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
    if (windowHeight) state.windowHeight = windowHeight
    if (windowWidth) state.windowWidth = windowWidth
  }
})

export const actions = actionTree({ state, mutations, getters }, {
  async nuxtServerInit ({ dispatch }, { req }: Context) {
    try {
      await Promise.all([
        dispatch('setDevice', req),
        dispatch('getStoreProfile'),
        dispatch('getStoreCategory')
      ])
    } catch (e) {
      console.error(e)
    }
  },
  async setDevice ({ commit }, req?: IncomingMessage) {
    if (req) {
      if (!req.headers['user-agent']) return
      const { getParser } = await import('bowser')
      const bowser = getParser(req.headers['user-agent'] || '')
      const { type } = bowser.getPlatform()
      return commit('SET_DEVICE_INFO', {
        isMobile: type === 'mobile',
        isTablet: type === 'tablet'
      })
    } else if (typeof window !== 'undefined') {
      return commit('SET_DEVICE_INFO', {
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth < 1280 && window.innerWidth > 768,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      })
    }
  },
  async getStoreProfile ({ commit }) {
    const profile = await this.$axios.get('/profile') as StoreProfile

    commit('SET_STORE_NAME', profile.settings.storeName)
  },
  async getStoreCategory () {
    const category = await this.$axios.get('/categories') as any
    console.log(category)
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
