<template>
    <div class="main">
        <!-- Navigation -->
        <Navbar :topbarColor="topbarColor"></Navbar>
        <div class="main-container" :class="{ 'sidebar-active': isSidebarActive}">
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
