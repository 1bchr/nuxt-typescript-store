import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default ({ $axios }: { $axios: NuxtAxiosInstance }) => {
  $axios.onRequest((config: AxiosRequestConfig) => {
    if (typeof window !== 'undefined' && window.$nuxt?.$loading) {
      window.$nuxt.$loading.start()
    }

    config.params = config.params || {}
    config.params.token = process.env.TOKEN
  })

  $axios.onRequestError((err: AxiosError) => {
    if (typeof window !== 'undefined' && window.$nuxt?.$loading?.fail) {
      window.$nuxt.$loading.fail()
    }

    throw new Error(err.message)
  })

  $axios.onResponse((res: AxiosResponse) => {
    if (typeof window !== 'undefined' && window.$nuxt?.$loading) {
      setTimeout(() => window.$nuxt.$loading.finish(), 500)
    }

    return res.data
  })
}
