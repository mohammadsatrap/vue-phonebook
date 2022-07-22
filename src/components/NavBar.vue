<template lang="">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Phonebook</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link
              to="/contacts"
              class="nav-link text-white"
              style="font-weight: normal"
            >
              <i class="fas fa-list ms-1"></i>
              مخاطبین
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contacts-new"
              class="nav-link text-white"
              style="font-weight: normal"
            >
              <i class="fas fa-plus ms-1"></i>
              افزودن مخاطب جدید
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
