import { AxiosRequestConfig, AxiosResponse } from 'axios'

export default ({ $axios }: any) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.params = config.params || {}
    config.params.token = process.env.TOKEN
  })

  $axios.onResponse((res: AxiosResponse) => {
    return res.data
  })
}
