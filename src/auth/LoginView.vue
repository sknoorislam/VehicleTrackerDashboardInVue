<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h2>Login</h2>
                        <form @submit.prevent="handleLogin">
                            <div class="mb-3">
                                <label>Email</label>
                                <input v-model="email" type="email" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label>Password</label>
                                <input v-model="password" type="password" class="form-control" required />
                            </div>
                            <div v-if="error" class="alert alert-danger">{{ error }}</div>
                            <button class="btn btn-primary" type="submit">Login</button>
                        </form>
                        <p class="mt-3">Don't have an account? <router-link to="/register">Register here</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
    try {
        await auth.login({ email: email.value, password: password.value })
        router.push('/')
    } catch (err) {
        error.value = err.message
    }
}
</script>
