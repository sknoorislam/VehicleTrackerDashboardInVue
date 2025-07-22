<template>
  <div class="my-4">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'
import { useVehicleStore } from '@/stores/vehicleStore'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

const vehicleStore = useVehicleStore()

const chartData = computed(() => {
  const statusCounts = { online: 0, offline: 0, alert: 0 }
  vehicleStore.vehicles.forEach(v => statusCounts[v.status]++)

  return {
    labels: ['Online', 'Offline', 'Alert'],
    datasets: [
      {
        label: 'Vehicle Status',
        backgroundColor: ['#28a745', '#6c757d', '#dc3545'],
        data: [
          statusCounts.online,
          statusCounts.offline,
          statusCounts.alert
        ]
      }
    ]
  }
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}
</script>
