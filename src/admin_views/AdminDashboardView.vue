<template>
    <!-- dashboard of vehicles -->
    <div class="card card-body">
        <h5 class="card-title">Dashboard</h5>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Admin</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
        </nav>
    </div>

        <div class="row mt-3">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Vehicle Status Overview</h5>
                        <p class="card-text">View the current status of all vehicles.</p>
                                        <VehicleMap />

                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Vehicle Status Distribution</h5>
                        <StatusPieChart />
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import VehicleMap from '@/components/VehicleMap.vue'
import StatusPieChart from '@/components/StatusPieChart.vue'
</script>