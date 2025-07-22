
<template>
  <img src="../assets/banner.png" alt="Vehicle Tracking Banner" class="w-100">
  
  <section class="container py-5">
  <div class="row align-items-center">
    <div class="col-lg-6 mb-4 mb-lg-0">
      <h1 class="display-5 fw-bold">Real-Time Vehicle Tracking Dashboard</h1>
      <p class="lead mt-3">
        Monitor your fleet in real time, review vehicle history, and manage operations efficiently — all in one interactive dashboard built with Vue 3.
      </p>
      <ul class="list-unstyled mt-4">
        <li>🗺 Live GPS-based vehicle locations</li>
        <li>📍 Route history with speed and distance analytics</li>
        <li>📄 Filterable and searchable vehicle lists</li>
        <li>📊 Visual status indicators for fleet health</li>
      </ul>
      <div class="mt-4">
        <a href="#map" class="btn btn-primary me-2">View Live Map</a>
        <a href="#vehicle-list" class="btn btn-outline-secondary">Browse Vehicles</a>
      </div>
    </div>
    <div class="col-lg-6 text-center">
      <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Fleet Tracking" class="img-fluid" style="max-height: 320px;">
    </div>
  </div>
</section>

<section class="container py-5 border-top">
  <div class="text-center mb-5">
    <h2 class="fw-bold">Why Choose This Dashboard?</h2>
    <p class="text-muted">Simplify fleet monitoring with a modern and scalable system</p>
  </div>
  <div class="row text-center">
    <div class="col-md-4 mb-4">
      <div class="p-4 border rounded">
        <h5>⚡ Real-Time Updates</h5>
        <p>Simulated live data or API-driven vehicle positions updated instantly on map.</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="p-4 border rounded">
        <h5>📊 Insightful Route History</h5>
        <p>Track past routes, calculate total distance, and monitor vehicle movement trends.</p>
      </div>
    </div>
    <div class="col-md-4 mb-4">
      <div class="p-4 border rounded">
        <h5>🛠 Built for Developers</h5>
        <p>Vue 3 Composition API, modular architecture, and mock data for easy extension.</p>
      </div>
    </div>
  </div>
</section>

</template>
