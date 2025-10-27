import type { Ref } from 'vue'
import type { Session, SessionStats } from './session'
import type { LearnerStatus, StatusColor, StatusLabel, StatusIcon } from './learner'

export interface UseSessionReturn {
  session: Ref<Session>
  stats: Ref<SessionStats>
  formatTime: (seconds: number) => string
  getStatusColor: (status: LearnerStatus) => StatusColor
  getStatusLabel: (status: LearnerStatus) => StatusLabel
  getStatusIcon: (status: LearnerStatus) => StatusIcon
}