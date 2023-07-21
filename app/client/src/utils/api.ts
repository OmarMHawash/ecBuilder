import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  timeout: 5000,
})

axios.interceptors.request.use((req) => {
  return req
})

axios.interceptors.response.use((res) => {
  return res
})

export const get = async (url: string, params?: any): Promise<any> => {
  const res = await service.get(url, { params })
  return res.data
}

export const post = async (url: string, data?: any): Promise<any> => {
  const res = await service.post(url, data)
  return res.data
}
