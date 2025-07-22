import { defineStore } from 'pinia'

interface User {
  name: string
  email: string
}

interface UserWithPassword extends User {
  password: string
}

interface AuthState {
  user: User | null
}

interface LoginCredentials {
  email: string
  password: string
}

interface RegisterCredentials {
  name: string
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null
  }),
  actions: {
    register({ name, email, password }: RegisterCredentials) {
      const users: UserWithPassword[] = JSON.parse(localStorage.getItem('users') || '[]')

      if (users.find(u => u.email === email)) {
        throw new Error('Email already exists')
      }

      const newUser: UserWithPassword = { name, email, password }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
    },

    login({ email, password }: LoginCredentials) {
      const users: UserWithPassword[] = JSON.parse(localStorage.getItem('users') || '[]')
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
    isAuthenticated: (state): boolean => !!state.user
  }
})
