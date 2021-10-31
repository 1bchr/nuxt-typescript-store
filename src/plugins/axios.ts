import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default ({ $axios }: { $axios: NuxtAxiosInstance }) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    config.params = config.params || {}
    config.params.token = process.env.TOKEN
  })

  $axios.onRequestError((err: AxiosError) => {
    throw new Error(err.message)
  })

  $axios.onResponse((res: AxiosResponse) => {
    return res.data
  })
}
