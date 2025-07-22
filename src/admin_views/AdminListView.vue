<template>
  <div class="container my-4">
    <h2 class="mb-4">Admin - List of Vehicles</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Plate</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehicle in vehicles" :key="vehicle.id">
          <td>{{ vehicle.id }}</td>
          <td>{{ vehicle.name }}</td>
          <td>{{ vehicle.plate }}</td>
          <td>{{ vehicle.type }}</td>
          <td>
            <span :class="{
              'badge bg-success': vehicle.status === 'online',
              'badge bg-danger': vehicle.status === 'alert',
              'badge bg-secondary': vehicle.status === 'offline'
            }">
              {{ vehicle.status }}
            </span>
          </td>
          <td>{{ new Date(vehicle.lastUpdated).toLocaleString() }}</td>
          <td>
            <!-- <router-link
              :to="{ name: 'admin-vehicle-edit', params: { id: vehicle.id } }"
              class="btn btn-sm btn-primary me-2"
            >
              Edit
            </router-link> -->
            <!-- <button @click="deleteVehicle(vehicle.id)" class="btn btn-sm btn-danger">
              Delete
            </button> -->
            <router-link
              :to="{ name: 'vehicle-history', params: { id: vehicle.id } }"
              class="btn btn-sm btn-info">View History</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add New Vehicle Form -->
    
    <!-- Show on Map -->
    <VehicleMap />
  </div>

  <!-- Button trigger modal -->
   

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <AddVehicleForm />
            </div>
            
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useVehicleStore } from '@/stores/vehicleStore'

import AddVehicleForm from '@/components/AddVehicleForm.vue'
import VehicleMap from '@/components/VehicleMap.vue'

const vehicleStore = useVehicleStore()

const vehicles = computed(() => vehicleStore.vehicles)

onMounted(() => {
  vehicleStore.loadVehicles()
})
</script>
