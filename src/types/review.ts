import { review } from '@/constants/review'

// Review Information
type ReviewInformation = {
  applicationName: string
  oarId: string
  teamClarityPage: string
  codeRepository: string
  sonarQubeRepository: string
  hpFortifyDashboard: string
  nexusIQDashboard: string
  reviewers: string[]
  date: Date
}

export type SubjectsKeys = keyof typeof review

// Code Review
type CodeReview = {
  reviewInformation: ReviewInformation
  qualityGates: QualityGate[]
  supportedDependencies: SupportedDependency[]
  lifecycleManagement: LifecycleManagement
  projectSetup: ProjectSetup
  styling: Styling
  techStackUsage: TechStackUsage
  overallScore: number
}
