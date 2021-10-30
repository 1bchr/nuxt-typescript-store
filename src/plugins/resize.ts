export default ({ store }: any) => {
  window.onresize = () => {
    store.dispatch('setDevice')
  }
}
