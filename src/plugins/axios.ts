import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export default ({ $axios }: any) => {
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
