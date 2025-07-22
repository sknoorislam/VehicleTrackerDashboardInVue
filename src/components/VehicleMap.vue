<template>
  <div id="map" style="height: 500px;"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useVehicleStore } from '@/stores/vehicleStore'

const vehicleStore = useVehicleStore()

onMounted(() => {
  const map = L.map('map').setView([25.276987, 55.296249], 12)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  vehicleStore.vehicles.forEach(vehicle => {
    const markerColor = vehicle.status === 'online' ? 'green' : vehicle.status === 'alert' ? 'red' : 'gray'
    const markerIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color:${markerColor};width:12px;height:12px;border-radius:50%;"></div>`
    })

    const marker = L.marker([vehicle.location.lat, vehicle.location.lng], { icon: markerIcon }).addTo(map)
    marker.bindPopup(`
      <strong>${vehicle.name}</strong><br/>
      Plate: ${vehicle.plate}<br/>
      Status: ${vehicle.status}<br/>
      Last Updated: ${new Date(vehicle.lastUpdated).toLocaleString()}
    `)
  })
})
</script>
