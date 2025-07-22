<template>
    <div class="d-flex flex-column vh-100 website-template">
        <header>
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
                            <template v-else>
                                <router-link to="/login" class="btn btn-outline-primary btn-sm me-2">Login</router-link>
                                <router-link to="/register" class="btn btn-outline-success btn-sm">Register</router-link>
                            </template>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </header>
        <main class="overflow-auto">
            <RouterView></RouterView>
        </main>
        <footer class="mt-auto">
            <div class="container d-flex flex-md-row flex-column align-items-center justify-content-between">
                <p>&copy; 2025 Vehicle Tracking App</p>
                <p>Developed By SK. Noor Islam</p>
            </div>
        </footer>
    </div>

</template>
<script setup>
import { useAuthStore } from '@/stores/authStore'
import { RouterLink } from 'vue-router';
const auth = useAuthStore()
</script>