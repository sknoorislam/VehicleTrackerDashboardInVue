<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h2>Register</h2>
                        <form @submit.prevent="handleRegister">
                            <div class="mb-3">
                                <label>Name</label>
                                <input v-model="name" type="text" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label>Email</label>
                                <input v-model="email" type="email" class="form-control" required />
                            </div>
                            <div class="mb-3">
                                <label>Password</label>
                                <input v-model="password" type="password" class="form-control" required />
                            </div>
                            <div v-if="error" class="alert alert-danger">{{ error }}</div>
                            <button class="btn btn-success" type="submit">Register</button>
                        </form>
                        <p class="mt-3">Already have an account? <router-link to="/login">Login here</router-link>
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
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleRegister = async () => {
    try {
        await auth.register({ name: name.value, email: email.value, password: password.value })
        await auth.login({ email: email.value, password: password.value }) // Auto-login
        router.push('/')
    } catch (err) {
        error.value = err.message
    }
}
</script>
