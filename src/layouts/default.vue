<template>
    <div id="app">
        <app-header />
            <div class="wrapper">
                <router-view />
            </div>

        <app-footer />
        <div  id="job-loading">
            <div class="content row">
                <div class="col-md-4 col-12 offset-md-4 offset-0">
                   <div class="row">
                       <div class="col-12 text-center">
                           <div class="col-12" style="position:absolute;">
                               <h2 class="text-white">
                                   <strong>Raoviec</strong>
                                   - Chia sẻ & Kết nối
                               </h2>
                               <p class="text-white">
                                  Chào mừng bạn đến với công đồng PartTime, Chúc bạn một ngày mới vui vẻ & tràn đầy năng lượng
                               </p>
                           </div>

                           <img src="/static/images/loading.gif" class="img-fluid mb-0" />
                            <p class="text-white">
                                Chúng tôi đang tải dữ liệu, vui lòng chờ trong giây lát
                            </p>
                       </div>
                   </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
    #job-loading{
        position: fixed;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        z-index: 99999;
        background: rgb(15, 185, 177);
        display: none;
        opacity: 0;
        -webkit-transition: all .4s ease-out;
        -moz-transition: all .4s ease-out;
        -ms-transition: all .4s ease-out;
        -o-transition: all .4s ease-out;
        transition: all .4s ease-out;
    }
    #job-loading .content{
        margin-top: 10%;
    }
    body.open-loading #job-loading{
        display: block;
        opacity: 1;
    }
</style>
<script>
    import AppHeader from '@/layouts/partials/header'
    import AppFooter from '@/layouts/partials/footer'
    export default{
        components : {
            AppHeader,
            AppFooter
        },
        name : 'default',
        created(){
            if( this.$route.path && this.$route.path.indexOf('dashboard') !== -1 ){
                this.$store.state.switcher = 'dashboard';
            }
        },
        watch:{
            $route(new_val){
                if( new_val.path && new_val.path.indexOf('dashboard') !== -1 ){
                    this.$store.state.switcher = 'dashboard';
                }
            }
        }
    }
</script>