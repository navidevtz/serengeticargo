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

<script>
    import Navbar from "./Navbar.vue";
    
    export default {
        name: "Main",
        components: {
            Navbar
        },
        data:() => ({

        }),
        computed: {
            isSidebarActive(){
                return this.$store.state.isSidebarActive
            }
        },
        methods: {

        },
    }
</script>