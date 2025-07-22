<template>
    <!-- admin template -->
    <div class="d-flex flex-column vh-100 admin-template">
        <header class="bg-info p-2">
            <div class="container">
                <h1>Admin Dashboard</h1>
            </div>
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