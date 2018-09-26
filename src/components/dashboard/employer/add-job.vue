<template>
    <div id="job-list">
        <form data-vv-scope="postJob" class="container">
            <div class="card-box" style="position: relative">

                <h4 class="m-t-0 header-title text-center">
                    <b>Đăng tin mới</b>
                </h4>
                <ul class="nav nav-tabs mb-3">
                    <li class="nav-item">
                        <a href="#home" data-toggle="tab" aria-expanded="false" class="nav-link active">
                            Công cụ đăng
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#settings" data-toggle="tab" aria-expanded="false" class="nav-link">
                           Xem trước
                        </a>
                    </li>
                </ul>
                <div class="col-12">
                    <div class="form-group">
                        <label for="">Tiêu dề tin</label>
                        <input v-validate="'required'"
                               v-model="form.title"
                               name="title"
                               type="text" placeholder="Nhập tiêu dề tin tuyển dụng"
                               class="form-control">
                        <ul class="parsley-errors-list filled" v-if="errors.first('postJob.title')">
                            <li class="parsley-required">{{ errors.first('postJob.title') }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="form-group">
                                <label for="">Ngành nghề tuyển dụng</label>
                                <select name="" id="" class="form-control">
                                    <option value="">Chọn ngành nghề</option>
                                    <option value="">Bán hàng</option>
                                    <option value="">Thời trang</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-6 col-12">
                            <div class="form-group">
                                <label for="">Mức lương</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-primary waves-effect waves-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mỗi tháng</button>
                                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);">
                                            <a class="dropdown-item" href="#">Mỗi giờ</a>
                                            <a class="dropdown-item" href="#">Mỗi ngày</a>
                                            <a class="dropdown-item" href="#">Mỗi ca</a>
                                            <a class="dropdown-item" href="#">Mỗi tuần</a>
                                            <a class="dropdown-item" href="#">Mỗi tháng</a>

                                        </div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-primary waves-effect waves-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VND</button>
                                        <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);">
                                            <a class="dropdown-item" href="#">VND</a>
                                            <a class="dropdown-item" href="#">$</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">

                    <div class="form-group">
                        <label for="">Loại hình tuyển dụng</label>
                        <div class="button-list">
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Full Time</button>
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Part Time</button>
                            <button type="button" class="btn btn-purple waves-effect waves-light btn-sm">Online</button>
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Freelancer</button>
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Công tác viên</button>
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Thực tập</button>
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Việc làm tình nguyện</button>
                            <button type="button" class="btn btn-secondary waves-effect waves-light btn-sm">Temporary</button>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="">Mô tả công việc</label>
                        <editor />
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn  waves-effect waves-light" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Khu vực tuyển dụng
                                </button>

                            </div>
                            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
                            <div class="input-group-prepend">
                                <button class="btn btn-primary waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="portlet">
                            <div class="portlet-heading bg-custom">
                                <h3 class="portlet-title">
                                    Hà nội
                                </h3>
                                <div class="portlet-widgets">

                                    <a data-toggle="collapse" data-parent="#accordion1" href="#bg-custom" class="" aria-expanded="true"><i class="mdi mdi-minus"></i></a>
                                    <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div id="bg-custom" class="panel-collapse in collapse show" style="">
                                <div class="portlet-body">
                                    <div class="row">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="portlet">
                            <div class="portlet-heading bg-custom">
                                <h3 class="portlet-title">
                                    Hồ chi minh
                                </h3>
                                <div class="portlet-widgets">

                                    <a data-toggle="collapse" data-parent="#accordion1" href="#bg-custom-1" class="" aria-expanded="true"><i class="mdi mdi-minus"></i></a>
                                    <a href="#" data-toggle="remove"><i class="mdi mdi-close"></i></a>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div id="bg-custom-1" class="panel-collapse in collapse show" style="">
                                <div class="portlet-body">
                                    <div class="row">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>

    </div>
</template>

<script>
    import editor from '@/components/ckeditor'
    export default {
        components : { editor },
        data(){
          return {
              form : {
                  title : '',
                  description : '',
                  location_ids : '',

              }
          }
        },
        created(){
            this.$validator.dictionary.merge({
                vi: {
                    custom: {
                        title: {
                            required: 'Vui lòng nhập tiêu đề tin'
                        },
                        industry_ids: {
                            required: 'Vui lòng ngành nghề ứng tuyển'
                        },
                        job_type_ids : {
                            required : 'Vui lòng chọn ít nhất 1 hình thức tuyển dụng'
                        },
                        content:{
                            required : 'Vui lòng mô tả nội dung tuyển dụng'
                        }
                    }
                }
            })
        },
        mounted(){
            $('.dropdown-toggle').dropdown();
            $('body').addClass('open-loading')
        }
    }
</script>