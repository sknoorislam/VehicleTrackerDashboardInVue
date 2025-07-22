<template>
    <!-- admin template -->
    <div class="d-flex flex-column vh-100 admin-template">
        <header class="">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">Vehicle Tracking App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/about">About</router-link>
                            </li>
                        </ul>                               
                        <div class="d-flex gap-2 align-items-center" role="search">
                            <template v-if="auth.isAuthenticated">
                                <RouterLink to="/admin/dashboard" class="me-3">Hi, {{ auth.user.name }}</RouterLink>
                                <button @click="auth.logout" class="btn btn-outline-danger btn-sm">Logout</button>
                            </template>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div class="container">
            <div class="row g-3 mt-1">
                <div class="col-md-2">
                    <div class="card">
                        <div class="card-body">
                            <nav class="nav flex-column">
                                <RouterLink to="/admin/dashboard" class="nav-link" aria-current="page">Dashboard</RouterLink>
                                <RouterLink class="nav-link" to="/admin/vehicles">Vehicles</RouterLink>
                                <RouterLink class="nav-link" to="/login">Logout</RouterLink>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 ">
                    <main class="card card-body">
                        <RouterView></RouterView>
                    </main>
                </div>
            </div>
        </div>
        
        
        <footer class="mt-auto">
            <div class="container d-flex flex-md-row flex-column align-items-center justify-content-between">
                <p>&copy; 2023 Vehicle Tracker Dashboard</p>
                <p>Version 1.0.0</p>
            </div>
        </footer>
    </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
import { RouterLink } from 'vue-router';
const auth = useAuthStore()
</script>