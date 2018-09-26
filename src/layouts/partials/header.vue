<template>
    <div class="row"  id="header-switcher"  >
        <div class="container-fluid">
            <div class="col-xs-12">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link to="/" data-toggle="tab" aria-expanded="false" class="nav-link show"
                           :class="{ active : $store.state.switcher == '/' || $route.path =='/'  }">
                            Việc làm
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blogs" data-toggle="tab" aria-expanded="true" class="nav-link"
                           :class="{ active : $store.state.switcher == '/blogs' || $route.path =='/blogs' }">
                            Blog & Sự kiện
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dashboard" data-toggle="tab" aria-expanded="false" class="nav-link"
                           :class="{ active : $store.state.switcher == 'dashboard' || $route.path =='/dashboard'  }">
                            Tài khoản
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
        <header id="topnav">
            <div class="navbar-custom">
                <div class="container-fluid">
                    <div id="navigation" class="active">
                        <header-job v-if="$store.state.switcher == '/' || $route.path =='/' " />
                        <header-event v-if="$store.state.switcher == '/blogs' || $route.path =='/blogs'" />
                        <template v-if="$store.state.switcher == 'dashboard' || $route.path =='/dashboard'">
                            <header-employer  />
                        </template>

                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
    import HeaderJob from '@/layouts/partials/header-job'
    import HeaderEvent from '@/layouts/partials/header-event'
    import HeaderEmployer from '@/layouts/partials/header-employer'
    export default{
        components: {
            HeaderJob,
            HeaderEvent,
            HeaderEmployer
        },
        created(){
            console.log( this.$store )
        },
        watch : {
            $route(new_val){
                console.log(new_val.fullPath)
                this.$store.commit('switchTo', new_val.fullPath)
            }
        }
    }
</script>