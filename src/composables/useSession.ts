import { ref, onMounted, onUnmounted } from 'vue'

export interface Learner {
  id: number
  name: string
  avatar: string
  status: 'active' | 'paused' | 'completed'
  progress: number
  currentModule: string
  timeElapsed: number // en secondes
  lastActivity: Date
}

export interface Session {
  id: string
  title: string
  startTime: Date
  learners: Learner[]
}

export function useSession() {
  // Données initiales de la session
  const session = ref<Session>({
    id: 'SESSION-2025-001',
    title: 'Formation Sécurité Incendie - Module 1',
    startTime: new Date(Date.now() - 15 * 60 * 1000), // Commencé il y a 15 minutes
    learners: [
      {
        id: 1,
        name: 'Sophie Martin',
        avatar: 'https://i.pravatar.cc/150?img=1',
        status: 'active',
        progress: 67,
        currentModule: 'Utilisation extincteur CO2',
        timeElapsed: 845,
        lastActivity: new Date()
      },
      {
        id: 2,
        name: 'Thomas Dubois',
        avatar: 'https://i.pravatar.cc/150?img=2',
        status: 'paused',
        progress: 45,
        currentModule: 'Évacuation étage 2',
        timeElapsed: 623,
        lastActivity: new Date(Date.now() - 2 * 60 * 1000)
      },
      {
        id: 3,
        name: 'Marie Lambert',
        avatar: 'https://i.pravatar.cc/150?img=3',
        status: 'active',
        progress: 89,
        currentModule: 'Exercice pratique final',
        timeElapsed: 1024,
        lastActivity: new Date()
      },
      {
        id: 4,
        name: 'Lucas Bernard',
        avatar: 'https://i.pravatar.cc/150?img=4',
        status: 'completed',
        progress: 100,
        currentModule: 'Formation terminée',
        timeElapsed: 1200,
        lastActivity: new Date(Date.now() - 5 * 60 * 1000)
      },
      {
        id: 5,
        name: 'Emma Petit',
        avatar: 'https://i.pravatar.cc/150?img=5',
        status: 'active',
        progress: 34,
        currentModule: 'Reconnaissance des risques',
        timeElapsed: 412,
        lastActivity: new Date()
      },
      {
        id: 6,
        name: 'Jules Moreau',
        avatar: 'https://i.pravatar.cc/150?img=6',
        status: 'active',
        progress: 56,
        currentModule: 'Procédures d\'urgence',
        timeElapsed: 678,
        lastActivity: new Date()
      }
    ]
  })

  let updateInterval: number | null = null

  // Simulation des mises à jour en temps réel
  const simulateLiveUpdates = () => {
    session.value.learners.forEach((learner) => {
      if (learner.status === 'active') {
        // Incrémenter légèrement la progression (0-2%)
        const progressIncrement = Math.random() * 2
        learner.progress = Math.min(100, learner.progress + progressIncrement)
        
        // Incrémenter le temps écoulé
        learner.timeElapsed += 2
        
        // Mettre à jour l'activité
        learner.lastActivity = new Date()
        
        // 5% de chance de passer à "completed" si progression > 95%
        if (learner.progress >= 95 && Math.random() < 0.05) {
          learner.status = 'completed'
          learner.progress = 100
          learner.currentModule = 'Formation terminée'
        }
        
        // 2% de chance de se mettre en pause
        if (Math.random() < 0.02) {
          learner.status = 'paused'
        }
      } else if (learner.status === 'paused') {
        // 10% de chance de reprendre
        if (Math.random() < 0.1) {
          learner.status = 'active'
          learner.lastActivity = new Date()
        }
      }
    })
  }

  const startLiveUpdates = () => {
    // Mise à jour toutes les 2 secondes
    updateInterval = window.setInterval(simulateLiveUpdates, 2000)
  }

  const stopLiveUpdates = () => {
    if (updateInterval) {
      clearInterval(updateInterval)
      updateInterval = null
    }
  }

  // Fonctions utilitaires
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'active':
        return 'success'
      case 'paused':
        return 'warning'
      case 'completed':
        return 'info'
      default:
        return 'grey'
    }
  }

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case 'active':
        return 'En cours'
      case 'paused':
        return 'En pause'
      case 'completed':
        return 'Terminé'
      default:
        return 'Inconnu'
    }
  }

  const getStatusIcon = (status: string): string => {
    switch (status) {
      case 'active':
        return 'mdi-play-circle'
      case 'paused':
        return 'mdi-pause-circle'
      case 'completed':
        return 'mdi-check-circle'
      default:
        return 'mdi-circle-outline'
    }
  }

  // Statistiques de la session
  const stats = ref({
    total: 0,
    active: 0,
    paused: 0,
    completed: 0
  })

  const updateStats = () => {
    stats.value.total = session.value.learners.length
    stats.value.active = session.value.learners.filter(l => l.status === 'active').length
    stats.value.paused = session.value.learners.filter(l => l.status === 'paused').length
    stats.value.completed = session.value.learners.filter(l => l.status === 'completed').length
  }

  onMounted(() => {
    updateStats()
    startLiveUpdates()
    // Mettre à jour les stats toutes les 2 secondes aussi
    window.setInterval(updateStats, 2000)
  })

  onUnmounted(() => {
    stopLiveUpdates()
  })

  return {
    session,
    stats,
    formatTime,
    getStatusColor,
    getStatusLabel,
    getStatusIcon
  }
}