<template>
    <!-- list of vehicles -->
    <div class="container">
        <h2>Admin - List of Vehicles</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vehicle in vehicles" :key="vehicle.id">
                    <td>{{ vehicle.id }}</td>
                    <td>{{ vehicle.make }}</td>
                    <td>{{ vehicle.model }}</td>
                    <td>{{ vehicle.year }}</td>
                    <td>
                        <router-link :to="{ name: 'admin-vehicle-edit', params: { id: vehicle.id } }" class="btn btn-primary">Edit</router-link>
                        <button @click="deleteVehicle(vehicle.id)" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>  
    <AddVehicleForm />
  <VehicleMap />
</template>
<script setup>
import AddVehicleForm from '@/components/AddVehicleForm.vue'
import VehicleMap from '@/components/VehicleMap.vue'
</script>