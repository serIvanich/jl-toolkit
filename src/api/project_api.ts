import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.json-generator.com/templates/ZM1r0eic3XEy/',
  headers: {
    Authorization: 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
  }
})

export const projectApi = {
  getJob() {
    return instance.get<JobType>('data').then((res) => res.data)
  }
}

type JobType = {
  id: string
  name: string
  email: string
  phone: string
  title: string
  salary: string
  adress: string
  benefits: string[]
  location: LocationType
  pictures: string[]
  createAt: string
  updateAt: string
  description: string
  employment_type: string[]
}
type LocationType = {
  lat: number
  long: number
}
