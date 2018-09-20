<template>
    <div id="app">
        <app-header />
        <router-view />
        <app-footer />
    </div>
</template>
<script>
    import AppHeader from '@/layouts/partials/header'
    import AppFooter from '@/layouts/partials/footer'
    export default{
        components : {
            AppHeader,
            AppFooter
        },
        name : 'default'
    }
</script>