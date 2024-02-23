<template>
    <nav class="navbar">
        <div class="container">
            <router-link to="/" class="navbar-brand">Serengeti Cargo</router-link>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/track" class="nav-link">Track</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/users/add" class="nav-link">Register</router-link>
                </li>
            </div>
        </div>
        
    </nav>
</template>