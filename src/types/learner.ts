export interface Learner {
  id: number
  name: string
  avatar: string
  status: LearnerStatus
  progress: number
  currentModule: string
  timeElapsed: number
  lastActivity: Date
}

export type LearnerStatus = 'active' | 'paused' | 'completed'

export type StatusColor = 'success' | 'warning' | 'info' | 'grey'
export type StatusLabel = 'En cours' | 'En pause' | 'Terminé' | 'Inconnu'
export type StatusIcon = 
  | 'mdi-play-circle' 
  | 'mdi-pause-circle' 
  | 'mdi-check-circle' 
  | 'mdi-circle-outline'