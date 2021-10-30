export default ({ store }: any) => {
  window.onload = () => {
    store.dispatch('setDevice')
  }
  window.onresize = () => {
    store.dispatch('setDevice')
  }
}
