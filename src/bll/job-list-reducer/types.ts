export type JobType = {
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
