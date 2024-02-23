<template>
    <!-- <<nav
        class="nav justify-content-center  "
    >
        <a class="nav-link active" href="#" aria-current="page"
            >Active link</a
        >
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#">Disabled link</a>
    </nav> -->
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">Serengeti Cargo</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-right mb-2 mb-lg-0 ">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
<!--     
    <nav class="navbar">
        <div class="container">
            <router-link to="/" class="navbar-brand">Serengeti Cargo</router-link>
            <div class="">
                    <router-link to="/track" class="nav-link">Track</router-link>
                    <router-link to="/users/add" class="nav-link">Register</router-link>
            </div>
        </div>
    </nav> -->
</template>