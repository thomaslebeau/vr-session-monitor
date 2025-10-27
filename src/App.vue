<template>
  <v-app class="app-background">
    <!-- Header -->
    <v-app-bar elevation="0" color="white" class="border-b">
      <v-container fluid>
        <v-row align="center" no-gutters>
          <v-col cols="auto">
            <v-icon size="40" color="primary">mdi-virtual-reality</v-icon>
          </v-col>
          <v-col class="ml-3">
            <div class="text-h5 font-weight-bold text-primary">
              Reality Academy
            </div>
            <div class="text-caption text-medium-emphasis">
              XR Link - Monitoring temps réel
            </div>
          </v-col>
          <v-col cols="auto">
            <v-chip color="success" variant="flat" class="mr-2">
              <v-icon start size="small">mdi-circle</v-icon>
              Live
            </v-chip>
            <span class="text-caption text-medium-emphasis">
              Session: {{ session.id }}
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid class="pa-6">
        <!-- Titre de la session -->
        <v-row class="mb-4">
          <v-col>
            <h1 class="text-h4 font-weight-bold text-primary mb-2">
              {{ session.title }}
            </h1>
            <p class="text-body-2 text-medium-emphasis">
              <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
              Démarrée à {{ session.startTime.toLocaleTimeString('fr-FR') }}
            </p>
          </v-col>
        </v-row>

        <!-- Statistiques -->
        <SessionStats :stats="stats" class="mb-6" />

        <!-- Alerte temps réel -->
        <v-row class="mb-4">
          <v-col>
            <v-alert
              type="info"
              variant="tonal"
              border="start"
              :icon="'mdi-information'"
            >
              <div class="d-flex align-center">
                <v-icon class="mr-2 animate-pulse">mdi-sync</v-icon>
                Les apprenants progressent, se mettent en pause ou terminent leur formation en temps réel.
              </div>
            </v-alert>
          </v-col>
        </v-row>

        <!-- Grille des apprenants -->
        <v-row>
          <v-col
            v-for="learner in session.learners"
            :key="learner.id"
            cols="12"
            sm="6"
            lg="4"
          >
            <LearnerCard
              :learner="learner"
              :format-time="formatTime"
              :get-status-color="getStatusColor"
              :get-status-label="getStatusLabel"
              :get-status-icon="getStatusIcon"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="white" class="border-t">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="text-center py-3">
          <span class="text-caption text-medium-emphasis">
            VR Session Monitor © 2025 - Projet de démonstration Vue.js 3 + Vuetify 3 pour Reality Academy
          </span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { useSession } from '@/composables/useSession'
import LearnerCard from '@/components/LearnerCard.vue'
import SessionStats from '@/components/SessionStats.vue'

const {
  session,
  stats,
  formatTime,
  getStatusColor,
  getStatusLabel,
  getStatusIcon
} = useSession()
</script>

<style>
.app-background {
  background: linear-gradient(180deg, #F8F7FC 0%, #FFFFFF 100%);
  min-height: 100vh;
}

.border-t {
  border-top: 1px solid #E0E0E0;
}

.border-b {
  border-bottom: 1px solid #E0E0E0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>