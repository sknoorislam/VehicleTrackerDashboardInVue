import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  actions: {
    register({ name, email, password }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      if (users.find(u => u.email === email)) {
        throw new Error('Email already exists')
      }

      const newUser = { name, email, password }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
    },

    login({ email, password }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(u => u.email === email && u.password === password)

      if (!user) {
        throw new Error('Invalid email or password')
      }

      this.user = { name: user.name, email: user.email }
      localStorage.setItem('user', JSON.stringify(this.user))
    },

    logout() {
      this.user = null
      localStorage.removeItem('user')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user
  }
})
