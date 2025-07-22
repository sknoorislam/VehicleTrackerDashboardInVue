<template>
  <div id="map" style="height: 600px;"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L, { setupLeafletIcons } from '@/utils/leaflet-setup'
import 'leaflet/dist/leaflet.css'
import { useVehicleStore } from '@/stores/vehicleStore'
import { useRouter } from 'vue-router'

const vehicleStore = useVehicleStore()
const router = useRouter()

onMounted(() => {
  console.log('Map component mounted')
  console.log('Vehicles in store:', vehicleStore.vehicles)
  console.log('Number of vehicles:', vehicleStore.vehicles.length)
  
  // Ensure Leaflet icons are properly configured
  setupLeafletIcons()
  
  const map = L.map('map').setView([25.276987, 55.296249], 11)
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Map data © OpenStreetMap contributors'
  }).addTo(map)

  if (vehicleStore.vehicles.length === 0) {
    console.error('No vehicles found in store!')
    // Try to initialize manually if state didn't work
    vehicleStore.initializeVehicles()
    console.log('After manual init:', vehicleStore.vehicles.length)
  }

  vehicleStore.vehicles.forEach((vehicle, index) => {
    console.log(`Creating marker ${index + 1} for vehicle:`, vehicle.name);
    const markerColor =
      vehicle.status === 'online'
        ? 'green'
        : vehicle.status === 'alert'
        ? 'red'
        : 'gray'

    const markerIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color:${markerColor};width:12px;height:12px;border-radius:50%;"></div>`
    })

    const marker = L.marker(
      [vehicle.location.lat, vehicle.location.lng],
      { icon: markerIcon }
    ).addTo(map)

    // Custom popup content using DOM elements for router navigation
    const popupContent = document.createElement('div')
    popupContent.innerHTML = `
      <strong>${vehicle.name}</strong><br/>
      Plate: ${vehicle.plate}<br/>
      Status: ${vehicle.status}<br/>
      Last Updated: ${new Date(vehicle.lastUpdated).toLocaleString()}<br/>
    `

    const historyBtn = document.createElement('button')
    historyBtn.textContent = 'View History'
    historyBtn.className = 'btn btn-sm btn-primary mt-1'
    historyBtn.onclick = () => {
      router.push({ name: 'vehicle-history', params: { id: vehicle.id } })
    }

    popupContent.appendChild(historyBtn)
    marker.bindPopup(popupContent)
  })
})
</script>

<style scoped>
.custom-marker {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>