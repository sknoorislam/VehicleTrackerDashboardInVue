
# 🚗 Vehicle Tracking Admin Dashboard (Vue 3 + Map Integration)

An interactive admin dashboard built with **Vue 3** to visualize the **real-time locations**, **status**, and **route history** of multiple vehicles on a map. This project demonstrates clean modular architecture, modern Vue practices, and efficient data visualization using mapping libraries.

---

## 🧠 Features Overview

### 🗺 1. Live Map View
- **Interactive Map** using Leaflet or Google Maps
- **Real-Time Vehicle Markers**:
  - 🟢 Green – Online
  - ⚪ Gray – Offline
  - 🔴 Red – Alert
- **Hover Tooltip**: Displays vehicle name/plate number
- **Click Marker**:
  - Vehicle name/plate
  - Status
  - Last updated timestamp
  - “View History” button

### 📍 2. Vehicle Route History
- **Detailed Route View** with mocked coordinates (Polyline)
- **Visual Elements**:
  - Start & End markers
  - Distance covered
  - Average speed calculation

### 📄 3. Vehicle List View
- Vehicle table showing:
  - Name, Plate, Type, Status
  - Last known address
  - Last update timestamp
- **Searchable** by vehicle name/plate
- **Filterable** by status
- **Row click**: Zooms to the corresponding vehicle on the map

---

## 🔄 Mock Data Example

```json
{
  "id": "v-001",
  "name": "Truck 1",
  "plate": "ABC-123",
  "status": "online",
  "type": "Truck",
  "location": { "lat": 25.276987, "lng": 55.296249 },
  "lastUpdated": "2025-07-02T10:30:00Z",
  "history": [
    { "lat": 25.2769, "lng": 55.2961, "timestamp": "2025-07-02T09:30:00Z" }
  ]
}
```

Mock data is used to simulate vehicle updates, which are refreshed using JavaScript intervals or polling techniques.

---

## 🧰 Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Map Integration**: Leaflet.js or Google Maps API
- **State Management**: Pinia or Vuex (recommended)
- **Routing**: Vue Router
- **UI Components**: Tailwind CSS / Vuetify (optional)

---

## 📁 Project Structure (Suggested)

```
src/
├── assets/
├── components/
│   ├── MapView.vue
│   ├── VehicleMarker.vue
│   ├── VehicleHistory.vue
│   ├── VehicleTable.vue
├── views/
│   ├── Dashboard.vue
│   ├── History.vue
├── store/
│   └── vehicleStore.js
├── data/
│   └── mockVehicles.json
├── App.vue
├── main.js
```

---

## 🚀 Setup & Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/vehicle-dashboard.git
cd vehicle-dashboard

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## ✅ Development Best Practices Followed

- Modular code architecture
- Clean, reusable components
- Proper state management
- Real-time simulation with polling
- Responsive design for desktop & tablets

---

## 📌 To-Do Enhancements

- WebSocket integration for true real-time updates
- Authentication layer for admin access
- Export route history as PDF or CSV
- Backend integration with GPS devices or telematics APIs

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**SK. Noor Islam**  
Senior Full Stack Developer | Python & Vue.js Specialist  
[LinkedIn](https://www.linkedin.com/) • [GitHub](https://github.com/)
