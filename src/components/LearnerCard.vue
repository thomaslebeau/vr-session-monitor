<template>
  <v-card 
    :elevation="2" 
    class="learner-card"
    :class="{ 'card-active': learner.status === 'active' }"
  >
    <v-card-item>
      <template v-slot:prepend>
        <v-avatar :image="learner.avatar" size="56"></v-avatar>
      </template>

      <v-card-title class="text-h6">
        {{ learner.name }}
      </v-card-title>

      <template v-slot:append>
        <v-chip 
          :color="getStatusColor(learner.status)"
          size="small"
          :prepend-icon="getStatusIcon(learner.status)"
        >
          {{ getStatusLabel(learner.status) }}
        </v-chip>
      </template>
    </v-card-item>

    <v-card-text>
      <!-- Progression -->
      <div class="mb-3">
        <div class="d-flex justify-space-between align-center mb-1">
          <span class="text-caption text-medium-emphasis">Progression</span>
          <span class="text-caption font-weight-bold">{{ Math.round(learner.progress) }}%</span>
        </div>
        <v-progress-linear
          :model-value="learner.progress"
          :color="getStatusColor(learner.status)"
          height="8"
          rounded
        ></v-progress-linear>
      </div>

      <!-- Module actuel -->
      <div class="mb-2">
        <v-icon size="small" class="mr-1">mdi-book-open-variant</v-icon>
        <span class="text-body-2">{{ learner.currentModule }}</span>
      </div>

      <!-- Temps écoulé -->
      <div class="d-flex align-center text-caption text-medium-emphasis">
        <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
        <span>{{ formatTime(learner.timeElapsed) }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { 
  Learner,
} from '@/types'

defineProps<{
  learner: Learner
  formatTime: (seconds: number) => string
  getStatusColor: (status: string) => string
  getStatusLabel: (status: string) => string
  getStatusIcon: (status: string) => string
}>()
</script>

<style scoped>
.learner-card {
  transition: all 0.3s ease;
}

.learner-card:hover {
  transform: translateY(-2px);
}

.card-active {
  border-left: 4px solid rgb(var(--v-theme-success));
}
</style>