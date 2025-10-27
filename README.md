# 📱 VR Session Monitor - Reality Academy

Interface de pilotage en temps réel pour sessions de formation VR. Projet de démonstration Vue.js 3 + Vuetify 3 + TypeScript.

## 🎯 Contexte

Ce projet démontre une fonctionnalité clé de la plateforme **XR Link** de Reality Academy : le monitoring temps réel d'apprenants dans une session de formation en Réalité Virtuelle.

**Reality Academy** est une EdTech spécialisée dans l'Immersive Learning. Leur solution XR Link permet aux formateurs de suivre en direct la progression des apprenants équipés de casques VR.

## ✨ Fonctionnalités

- 📊 **Dashboard temps réel** : Vue d'ensemble de tous les apprenants
- 🎯 **Statistiques live** : Total, actifs, en pause, terminés
- 👤 **Cards individuelles** : Profil, statut, progression, module actuel
- ⏱️ **Temps écoulé** : Suivi du temps par apprenant
- 🎨 **Design Reality Academy** : Couleurs violettes officielles
- 📱 **Responsive** : Optimisé tablette (usage XR Link)
- 🔄 **Simulation WebSocket** : Mises à jour automatiques toutes les 2s

## 🛠️ Technologies

- **Vue.js 3** (Composition API)
- **Vuetify 3** (Material Design)
- **TypeScript** (typage fort)
- **Vite** (build ultra-rapide)
- **Composables** (logique réutilisable)

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/vr-session-monitor.git
cd vr-session-monitor

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📂 Structure

```
vr-session-monitor/
├── src/
│   ├── components/
│   │   ├── LearnerCard.vue       # Card individuelle apprenant
│   │   └── SessionStats.vue      # Statistiques session
│   ├── composables/
│   │   └── useSession.ts         # Logique session + simulation
│   ├── plugins/
│   │   └── vuetify.ts            # Config Vuetify + couleurs
│   ├── App.vue                   # Composant principal
│   ├── main.ts                   # Point d'entrée
│   └── style.css                 # Styles globaux
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎨 Couleurs Reality Academy

```typescript
primary: "#7B2CBF"; // Violet principal
secondary: "#9D4EDD"; // Violet clair
accent: "#C77DFF"; // Violet pastel
```

## 💡 Simulation Temps Réel

Le composable `useSession` simule un flux WebSocket :

- Progression augmente de 0-2% toutes les 2s pour les apprenants actifs
- 5% de chance de terminer si progression > 95%
- 2% de chance de se mettre en pause
- 10% de chance de reprendre si en pause
- Statistiques mises à jour en temps réel

## 📱 Usage XR Link

Cette interface est conçue pour être utilisée sur **tablette en mode paysage** par les formateurs pendant une session VR, permettant de :

- Surveiller tous les apprenants simultanément
- Identifier rapidement qui a besoin d'aide
- Suivre la progression globale de la session
- Détecter les apprenants bloqués ou en difficulté

## 📄 Licence

MIT - Projet de démonstration
