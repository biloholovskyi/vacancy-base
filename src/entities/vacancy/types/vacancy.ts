export interface Vacancy {
  id?: number
  title: string
  company: string
  price?: string
  date: Date | string
  comment?: string
  status?: VacancyStatus
  link: string
}

type VacancyStatus = 'failed' | 'interview' | 'tech interview' | 'interview after tech interview' | 'offer' | 'none'
