<template>
  <div class="container py-4">
    <h4>Add Vehicle</h4>
    <form @submit.prevent="addNewVehicle">
      <div class="row g-3">
        <div class="col-md-6">
          <input v-model="name" type="text" class="form-control" placeholder="Vehicle Name" required />
        </div>
        <div class="col-md-6">
          <input v-model="plate" type="text" class="form-control" placeholder="Plate Number" required />
        </div>
        <div class="col-md-6">
          <select v-model="status" class="form-select">
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="alert">Alert</option>
          </select>
        </div>
        <div class="col-md-6">
          <input v-model="type" type="text" class="form-control" placeholder="Vehicle Type" required />
        </div>
        <div class="col-md-6">
          <input v-model.number="lat" type="text"  class="form-control" placeholder="Latitude" required />
        </div>
        <div class="col-md-6">
          <input v-model.number="lng" type="text"  class="form-control" placeholder="Longitude" required />
        </div>
      </div>
      <button class="btn btn-success mt-3" type="submit">Add Vehicle</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useVehicleStore } from '@/stores/vehicleStore'

const vehicleStore = useVehicleStore()

const name = ref('')
const plate = ref('')
const type = ref('')
const status = ref<'online' | 'offline' | 'alert'>('online')
const lat = ref(25.276987)
const lng = ref(55.296249)

const addNewVehicle = () => {
  const newVehicle = {
    id: `v-${Date.now()}`,
    name: name.value,
    plate: plate.value,
    status: status.value,
    type: type.value,
    location: { lat: lat.value, lng: lng.value },
    lastUpdated: new Date().toISOString(),
    history: [
      {
        lat: lat.value,
        lng: lng.value,
        timestamp: new Date().toISOString()
      }
    ]
  }
  vehicleStore.addVehicle(newVehicle)

  // Clear form
  name.value = ''
  plate.value = ''
  type.value = ''
  lat.value = 25.276987
  lng.value = 55.296249
  status.value = 'online'
}
</script>
