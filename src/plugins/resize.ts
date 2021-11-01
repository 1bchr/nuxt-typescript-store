import { NuxtState } from '@nuxt/types/app'

export default ({ store }: { store: NuxtState }) => {
  window.onload = () => {
    store.dispatch('setDevice')
  }

  if (process.env.NODE_ENV === 'production') return
  window.onresize = () => {
    store.dispatch('setDevice')
  }
}
