export interface ServiceDetail {
  id: string
  title: string
  icon: string
  tagline: string
  description: string
  features: string[]
  technologies: string[]
  caseStudies: CaseStudy[]
  benefits: string[]
}

export interface CaseStudy {
  title: string
  client: string
  challenge: string
  solution: string
  results: string[]
  image?: string
}
