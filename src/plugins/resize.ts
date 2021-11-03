import { NuxtState } from '@nuxt/types/app'

export default ({ store }: { store: NuxtState }) => {
  window.onload = () => {
    store.dispatch('setDevice')
  }

  window.onresize = () => {
    store.dispatch('setDevice')
  }
}
