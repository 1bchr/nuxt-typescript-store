export default ({ store }: any) => {
  window.onload = () => {
    store.dispatch('setDevice')
  }

  if (process.env.NODE_ENV === 'production') return
  window.onresize = () => {
    store.dispatch('setDevice')
  }
}
