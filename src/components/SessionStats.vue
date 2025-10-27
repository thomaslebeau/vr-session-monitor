<template>
  <v-row>
    <v-col cols="12" sm="6" md="3">
      <v-card elevation="0" class="stat-card bg-surface">
        <v-card-text class="d-flex align-center">
          <v-avatar color="primary" size="48" class="mr-3">
            <v-icon size="28">mdi-account-group</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-bold">{{ stats.total }}</div>
            <div class="text-caption text-medium-emphasis">Apprenants</div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-card elevation="0" class="stat-card bg-surface">
        <v-card-text class="d-flex align-center">
          <v-avatar color="success" size="48" class="mr-3">
            <v-icon size="28">mdi-play-circle</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-bold">{{ stats.active }}</div>
            <div class="text-caption text-medium-emphasis">En cours</div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-card elevation="0" class="stat-card bg-surface">
        <v-card-text class="d-flex align-center">
          <v-avatar color="warning" size="48" class="mr-3">
            <v-icon size="28">mdi-pause-circle</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-bold">{{ stats.paused }}</div>
            <div class="text-caption text-medium-emphasis">En pause</div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="3">
      <v-card elevation="0" class="stat-card bg-surface">
        <v-card-text class="d-flex align-center">
          <v-avatar color="info" size="48" class="mr-3">
            <v-icon size="28">mdi-check-circle</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-bold">{{ stats.completed }}</div>
            <div class="text-caption text-medium-emphasis">Terminés</div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
interface Stats {
  total: number
  active: number
  paused: number
  completed: number
}

defineProps<{
  stats: Stats
}>()
</script>

<style scoped>
.stat-card {
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>