<template>
    <div id="login">
        <div class="row">
            <div class="col-sm-12">
                <div class="wrapper-page">
                    <div class="account-pages">
                        <div class="account-box">
                            <div class="account-logo-box text-center">
                                <h2 class="text-uppercase text-center">
                                    <a href="index.html" class="text-success">
                                        <span>
                                            <img src="/static/images/background/cropped-raoviec-logo-vieclamthem.png" alt="" height="30">
                                        </span>
                                    </a>
                                </h2>
                                <p class="m-b-0">
                                    Chào mừng bạn đến với raoviec.net, chỉ vài thao bước dưới đây
                                    để tham gia cộng đồng parttime cùng chúng tôi!!
                                </p>
                            </div>
                            <div class="account-content">
                                <form data-vv-scope="login" class="form-horizontal" action="#">
                                    <div class="form-group m-b-20 row">
                                        <div class="col-12">
                                            <label >Họ Tên</label>
                                            <ul v-if="errors.first('login.full_name')" class="parsley-errors-list filled">
                                                <li class="parsley-required">{{errors.first('login.full_name')}}</li>
                                            </ul>
                                            <input class="form-control"
                                                   v-model="form.email"
                                                   v-validate="'required|email'"
                                                   name="email"
                                                   type="email"
                                                   placeholder="Nhập địa chỉ email">

                                        </div>
                                    </div>
                                    <div class="form-group m-b-20 row">
                                        <div class="col-12">
                                            <label >Địa chỉ email</label>
                                            <ul v-if="errors.first('login.email')" class="parsley-errors-list filled">
                                                <li class="parsley-required">{{errors.first('login.email')}}</li>
                                            </ul>
                                            <input class="form-control"
                                                   v-model="form.email"
                                                   v-validate="'required|email'"
                                                   name="email"
                                                   type="email"
                                                   placeholder="Nhập địa chỉ email">

                                        </div>
                                    </div>


                                    <div class="form-group row m-b-20">
                                        <div class="col-12">
                                            <label >Mật khẩu</label>
                                            <ul v-if="errors.first('login.password')" class="parsley-errors-list filled">
                                                <li class="parsley-required">{{errors.first('login.password')}}</li>
                                            </ul>
                                            <input class="form-control"
                                                   type="password"
                                                   v-model="form.password"
                                                   name="password"
                                                   v-validate="'required'"
                                                   placeholder="Mật khẩu đăng nhập">
                                        </div>
                                    </div>
                                    <div class="form-group row m-b-20">
                                        <div class="col-12">
                                            <label >Xác nhận mật khẩu</label>
                                            <ul v-if="errors.first('login.password')" class="parsley-errors-list filled">
                                                <li class="parsley-required">{{errors.first('login.password')}}</li>
                                            </ul>
                                            <input class="form-control"
                                                   type="password"
                                                   v-model="form.password"
                                                   name="password"
                                                   v-validate="'required'"
                                                   placeholder="Mật khẩu đăng nhập">
                                        </div>
                                    </div>
                                    <div class="form-group row text-center m-t-10">
                                        <div class="col-12">
                                            <button class="btn btn-md btn-block btn-primary waves-effect waves-light" type="submit">Đăng ký tài khoản</button>
                                        </div>
                                    </div>

                                </form>
                                <div class="row m-t-50">
                                    <div class="col-sm-12 text-center">
                                        <p class="text-muted">Bạn đã có tài khoản?
                                            <router-link  to="login" class="text-dark m-l-5">
                                                <b>Click để đăng nhập</b>
                                            </router-link>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end card-box-->


                </div>
                <!-- end wrapper -->

            </div>
        </div>
    </div>
</template>
<style scoped>
    #login{

        background-color: rgba(33, 53, 106, 0.66)
        /*position: fixed;*/
        /*width: 100%;*/
        /*height: 100%;*/
        /*top: 0px;*/
        /*left: 0px;*/


    }
</style>
<script>
    export default {
        data(){
            return{
                success : false,
                message : '',
                form : {
                    full_name : '',
                    email : '',
                    password : '',
                    confirm_password : '',
                    phone : '',
                    account_type : 'seeker'
                }
            }
        },
        created(){
            this.$validator.dictionary.merge({
                vi: {
                    custom: {
                        email : {
                            required : 'Vui lòng nhập địa chỉ email',
                            email : 'Định dạng email không hợp lệ'
                        },
                        password : {
                            required : 'Vui lòng nhập mật khẩu'
                        }
                    }
                }
            })
        },
        meta:{
            layout : 'login'
        }
    }
</script>