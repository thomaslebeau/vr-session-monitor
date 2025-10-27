import type { Learner } from './learner'

export interface Session {
  id: string
  title: string
  startTime: Date
  learners: Learner[]
}

export interface SessionStats {
  total: number
  active: number
  paused: number
  completed: number
}