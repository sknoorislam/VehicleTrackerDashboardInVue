<template>
    <div class="container my-4">
        <div class="card card-body d-flex flex-row justify-content-between align-items-center">
            <div>
                <h5 class="card-title">List of Vehicles</h5>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Admin</a></li>
                        <li class="breadcrumb-item active" aria-current="page">List of Vehicles</li>
                    </ol>
                </nav>
            </div>
            <div><button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add New Vehicle
                </button></div>
        </div>
        <div class="card card-body mt-3">

            <p v-if="vehicles.length === 0">No vehicles found.</p>
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
                            <router-link :to="{ name: 'vehicle-history', params: { id: vehicle.id } }"
                                class="btn btn-sm btn-info">View History</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Add New Vehicle Form -->

        
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

const vehicleStore = useVehicleStore()

const vehicles = computed(() => vehicleStore.vehicles)

onMounted(() => {
    vehicleStore.loadVehicles()
})
</script>
