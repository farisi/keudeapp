<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg bg-app text-white w-100">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <!-- Search Input -->
            <form class="d-flex ms-auto">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <!-- Sidebar -->
      <nav id="sidebar" class="col-md-3 col-lg-2 ">
        <div class="position-sticky">
          <!-- Header -->
          <div class="text-center mt-3">
            <img v-if="user && user.photo" :src="`/images/${user.photo}`" alt="User Photo" class="rounded-circle" width="60" height="60" />
            <div v-else class="rounded-circle placeholder-img" width="60" height="60"></div>
            <p class="mt-2">{{ user ? user.email : 'Guest' }}</p>
          </div>

          <!-- Navigation Links -->
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="bi bi-house-door"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/customers" class="nav-link">
                <i class="bi bi-person"></i> Customers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                <i class="bi bi-box"></i> Products
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main content area -->
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mt-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/customers">Customers</router-link></li>
            <li class="breadcrumb-item"><router-link to="/products">Products</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
          </ol>
        </nav>

        <!-- Router View -->
        <router-view class="mainapp"></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      // Contoh data pengguna, Anda dapat mengganti ini dengan informasi pengguna yang sebenarnya
      user: {
        email: 'user@example.com',
        photo: '60.jpeg', // URL foto profil pengguna
      },
    };
  },
};
</script>

<style scoped>
.bi {
  margin-right: 8px;
}

/* Placeholder image style */
.placeholder-img {
  background-color: #ddd;
}
</style>
