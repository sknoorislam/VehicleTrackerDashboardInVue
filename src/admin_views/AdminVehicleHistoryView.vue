<template>
  <div class="container mt-4">
    <h3>Route History for {{ vehicle?.name }}</h3>
    <div id="history-map" style="height: 500px;"></div>
    <div v-if="vehicle" class="mt-3">
        <p><strong>ID:</strong> {{ vehicle.id }}</p>
        <p><strong>Name:</strong> {{ vehicle.name }}</p>
        <p><strong>Type:</strong> {{ vehicle.type }}</p>
        <p><strong>Last Updated:</strong> {{ new Date(vehicle.lastUpdated).toLocaleString() }}</p>
        <p><strong>Plate:</strong> {{ vehicle.plate }}</p>
        <p><strong>Status:</strong> {{ vehicle.status }}</p>
        <p><strong>Distance Covered:</strong> {{ distanceCovered }} km</p>
        <p><strong>Average Speed:</strong> {{ averageSpeed }} km/h</p>
    </div>
    <!-- "id": "v-003",
    "name": "Taxi 1",
    "plate": "AUH-9123",
    "status": "online",
    "type": "Taxi",
    "location": { "lat": 24.4539, "lng": 54.3773 },
    "lastUpdated": "2025-07-22T09:00:00Z",
    "history": [
      { "lat": 24.4520, "lng": 54.3760, "timestamp": "2025-07-22T08:30:00Z" },
      { "lat": 24.4510, "lng": 54.3745, "timestamp": "2025-07-22T08:00:00Z" },
      { "lat": 24.4500, "lng": 54.3730, "timestamp": "2025-07-22T07:30:00Z" }
    ] -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import L from 'leaflet'
import { useVehicleStore } from '@/stores/vehicleStore'

const vehicleStore = useVehicleStore()
const route = useRoute()
const vehicleId = route.params.id as string
const vehicle = ref(vehicleStore.vehicles.find(v => v.id === vehicleId) || null)

console.log('Vehicle ID:', vehicleId)
console.log('Vehicle Data:', vehicle.value?.history)


const distanceCovered = computed(() => {
  if (!vehicle.value) return 0
  let dist = 0
  const coords = vehicle.value.history
  for (let i = 1; i < coords.length; i++) {
    dist += getDistance(coords[i - 1], coords[i])
  }
  return dist.toFixed(2)
})

// const averageSpeed = computed(() => {
//   if (!vehicle.value || vehicle.value.history.length < 2) return 0
//   const start = new Date(vehicle.value.history[0].timestamp).getTime()
//   const end = new Date(vehicle.value.history.at(-1)!.timestamp).getTime()
//   const hours = (end - start) / (1000 * 60 * 60)
//   return hours > 0 ? (Number(distanceCovered.value) / hours).toFixed(2) : 0
// })
const averageSpeed = computed(() => {
  if (!vehicle.value || vehicle.value.history.length < 2) return 0

  const start = new Date(vehicle.value.history[0].timestamp).getTime()
  const end = vehicle.value.history.length > 0
    ? new Date(vehicle.value.history[vehicle.value.history.length - 1].timestamp).getTime()
    : 0

  const hours = (end - start) / (1000 * 60 * 60)
  return hours > 0 ? (Number(distanceCovered.value) / hours).toFixed(2) : 0
})


function getDistance(p1: any, p2: any): number {
  const R = 6371
  const dLat = (p2.lat - p1.lat) * Math.PI / 180
  const dLon = (p2.lng - p1.lng) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// onMounted(() => {
//   const map = L.map('history-map').setView(
//     [vehicle.value?.location.lat || 0, vehicle.value?.location.lng || 0], 13
//   )

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors'
//   }).addTo(map)

//   if (vehicle.value) {
//     const coords = vehicle.value.history.map(p => [p.lat, p.lng])
//     L.polyline(coords, { color: 'blue' }).addTo(map)

//     const start = coords[0]
//     const end = coords.at(-1)

//     L.marker(start).addTo(map).bindPopup('Start')
//     L.marker(end).addTo(map).bindPopup('End')

//     map.fitBounds(L.polyline(coords).getBounds(), { padding: [50, 50] })
//   }
// })
onMounted(() => {
  if (!vehicle.value) return

  const { location, history } = vehicle.value

  const map = L.map('history-map').setView(
    [location?.lat || 0, location?.lng || 0], 13
  )

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  if (Array.isArray(history) && history.length > 0) {
    const coords: [number, number][] = history.map((p: { lat: number, lng: number }) => [p.lat, p.lng] as [number, number])

    // Draw polyline
    L.polyline(coords, { color: 'blue' }).addTo(map)

    const start = coords[0]
    const end = coords[coords.length - 1]

    if (start) {
      L.marker(start).addTo(map).bindPopup('Start')
    }

    if (end) {
      L.marker(end).addTo(map).bindPopup('End')
    }

    // Adjust map to fit route
    map.fitBounds(L.polyline(coords).getBounds(), { padding: [50, 50] })
  } else {
    // Optional: fallback marker if no history
    L.marker([location.lat, location.lng])
      .addTo(map)
      .bindPopup('Current Location (no route history)')
  }
})

</script>
