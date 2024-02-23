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
    
    <nav class="navbar">
        <div class="container">
            <router-link to="/" class="navbar-brand">Serengeti Cargo</router-link>
            <div class="navbar-nav mr-auto">
                <a class="nav-item">
                    <router-link to="/track" class="nav-link">Track</router-link>
                </a>
                <a class="nav-item">
                    <router-link to="/users/add" class="nav-link">Register</router-link>
                </a>
            </div>
        </div>
    </nav>
</template>