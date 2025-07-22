// stores/vehicleStore.ts
import { defineStore } from 'pinia'

export interface VehicleLocation {
  lat: number
  lng: number
}

export interface VehicleHistory {
  lat: number
  lng: number
  timestamp: string
}

export interface Vehicle {
  id: string
  name: string
  plate: string
  status: 'online' | 'offline' | 'alert'
  type: string
  location: VehicleLocation
  lastUpdated: string
  history: VehicleHistory[]
}

export const useVehicleStore = defineStore('vehicle', {
  state: () => ({
    vehicles: JSON.parse(localStorage.getItem('vehicles') || '[]') as Vehicle[]
  }),
  actions: {
    addVehicle(vehicle: Vehicle) {
      this.vehicles.push(vehicle)
      localStorage.setItem('vehicles', JSON.stringify(this.vehicles))
    },
    loadVehicles() {
      this.vehicles = JSON.parse(localStorage.getItem('vehicles') || '[]')
    }
  }
})
