<template>
    <div class="row">
        <div class="col-12">
            <div class="row mb-0 card-box" style="background-image:url(//raoviec.net/wp-content/uploads/2017/05/rv-bg.jpg); background-position: center center;">
               <div class="container">
                   <div class="row">
                       <div class="col-md-4">
                           <div class="form-group">
                               <input type="text" placeholder="Nhập từ khóa cần tìm" class="form-control">
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="form-group">
                               <select type="text" placeholder="Chọn ngành nghề" class="form-control">
                                   <option value="">
                                       Tất cả ngành nghề
                                   </option>
                                   <option value="ban-hàng">
                                       Bán hàng
                                   </option>
                               </select>
                           </div>
                       </div>
                       <div class="col-md-4">
                           <div class="form-group">
                               <select type="text" placeholder="Chọn ngành nghề" class="form-control">
                                   <option value="">
                                       Bất kỳ khu vực nào
                                   </option>
                                   <option value="ban-hàng">
                                       Hồ chí minh
                                   </option>
                                   <option value="ban-hàng">
                                       Hà Nội
                                   </option>
                               </select>
                           </div>
                       </div>
                   </div>
               </div>
               <div class="container">
                   <div class="row">
                       <div class="col-md-9 text-center">
                           <div class="button-list">
                               <button type="button" class="btn btn-purple waves-effect waves-light btn-xs">Full Time</button>
                               <button type="button" class="btn btn-purple waves-effect waves-light btn-xs">Part Time</button>
                               <button type="button" class="btn btn-purple waves-effect waves-light btn-xs">Cộng tác viên</button>
                               <button type="button" class="btn btn-purple waves-effect waves-light btn-xs">Freelancer</button>
                           </div>
                       </div>
                       <div class="col-md-3 ">
                           <button class="btn btn-danger float-right">
                               Tìm việc
                           </button>
                       </div>
                   </div>
               </div>
                <div class="container mt-2">
                    <div class="row job-categories">
                        <div class="col-md-2 category-item" v-for="(item) in [1,2,3,4,5,6,7,8,9,10,11,12]">
                            <div class="card card-inverse text-white">
                                <img class="card-img-top img-fluid" src="https://thue.today/media/images/section/brand/thumbnail/1513593513_logo_air360-01.png" alt="Card image">
                                <div class="card-body">
                                    <h5 class="card-title text-center">
                                        Bán Hàng
                                    </h5>
                                    <p class="card-text">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-0 card-box">
                <div class="container ">

                    <div class="row">
                        <div class="col-md-9">
                            <div class="col-12 text-center mb-3">
                                <h4 class="display-5">
                                    Đề xuất cho bạn :)
                                </h4>
                                <ul class="nav nav-tabs tabs-bordered nav-justified">
                                    <li class="nav-item">
                                        <a href="#home-b2" data-toggle="tab" aria-expanded="false" class="nav-link active show">
                                            <span class="text-danger"> #Việc làm hot</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#profile-b2" data-toggle="tab" aria-expanded="true" class="nav-link">
                                        <span class="text-warning">
                                            #Tuyển gấp
                                        </span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#messages-b2" data-toggle="tab" aria-expanded="false" class="nav-link">
                                            #Xem nhiều nhất
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <div class="col-12">
                                <div class="row">

                                    <div v-for="(item) in [1,2,3,4,5,6,7,8]" class="col-lg-6">
                                        <div class="job-item card-box ribbon-box">
                                            <div class="ribbon-two ribbon-two-info"><span>#Part Time</span></div>
                                            <div class="m-b-0">
                                                <div class="job-item-wrapper row">
                                                    <div class="col-md-3 job-thumbnail">
                                                        <img src="https://static.ybox.vn/2018/9/6/1536993549349-Cover.png" class="img-fluid" />
                                                    </div>
                                                    <div class="job-content col-md-9">
                                                        <div class="row">
                                                            <h2 class="job-title">
                                                                [HN] Công Ty TNHH Esoft Vietnam (100% Vốn Đan Mạch) Tuyển Dụng Trợ Lý Giám Sát Sản Xuất (Junior Team Leader) 2018 - Không Yêu Cầu Kinh Nghiệm,Mức Lương $400 -$600
                                                            </h2>
                                                        </div>
                                                        <div class="row">

                                                        </div>
                                                    </div>
                                                    <div class="col-12 mb-2">
                                                        <a class="job-company">Công Ty Cổ phần TM và DV OFOOD</a>
                                                        <span class="job-salary float-right">
                                                            2.000.000/ Tháng
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card m-b-5">
                                        <img class="card-img-top img-fluid" src="https://static.ybox.vn/2018/9/6/1537588953711-Yboxgif2.gif" alt="Card image cap">

                                    </div>

                                </div>
                                <div class="col-12">
                                    <div class="card m-b-30">
                                        <img class="card-img-top img-fluid" src="https://static.ybox.vn/2018/9/2/1536028672254-700.400.jpg" alt="Card image cap">
                                        <div class="card-body">
                                            <h6 class="card-text">
                                                [HCM] Công Ty Eurowindow Tuyển Dụng Nhân Viên Kế Hoạch Vật Tư XNK 2018 (Mức Lương 7,000,000 - 10,000,000 VND)
                                            </h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="row mb-0 card-box ">
                <div class="container align-content-center">
                    <img src="https://thue.today/media/images/upload/banner/1528966945_addbartender.jpg" class="img-fluid" alt="">
                </div>
            </div>
            <div class="row bg-warning pt-3">
               <div class="container">
                   <div class="row">
                       <div v-for="(item) in [1,2,3,4,5,6]" class="col-lg-6">
                           <div class="job-item card-box ribbon-box">
                               <div class="ribbon-two ribbon-two-info"><span>#Part Time</span></div>
                               <div class="m-b-0">
                                   <div class="job-item-wrapper row">
                                       <div class="col-md-3 job-thumbnail">
                                           <img src="https://static.ybox.vn/2018/9/6/1536993549349-Cover.png" class="img-fluid" />
                                       </div>
                                       <div class="job-content col-md-9">
                                           <div class="row">
                                               <h2 class="job-title">
                                                   [HN] Công Ty TNHH Esoft Vietnam (100% Vốn Đan Mạch) Tuyển Dụng Trợ Lý Giám Sát Sản Xuất (Junior Team Leader) 2018 - Không Yêu Cầu Kinh Nghiệm,Mức Lương $400 -$600
                                               </h2>
                                           </div>
                                           <div class="row">

                                           </div>
                                       </div>
                                       <div class="col-12 mb-2">
                                           <a class="job-company">Công Ty Cổ phần TM và DV OFOOD</a>
                                           <span class="job-salary float-right">
                                            2.000.000/ Tháng
                                    </span>
                                       </div>
                                   </div>

                               </div>
                           </div>
                       </div>
                   </div>
                   <div class="row">
                       <div v-for="(item) in [1,2,3]" class="col-md-6 col-lg-4">
                           <!-- Simple card -->
                           <div class="card m-b-15">
                               <img class="card-img-top img-fluid" src="https://static.ybox.vn/2018/9/1/1536592063705-1.jpg" alt="Card image cap">
                               <div class="card-body">
                                   <h5 class="card-title">
                                       Cơ Hội Giành Chuyến Đi Tới Singapore, Dubai, Mỹ & Thực Tập Tại Tập Đoàn Đa Quốc Gia P&G Cùng Với Cuộc Thi P&G CEO Challenge 2018
                                   </h5>

                                   <a href="#" class="btn btn-custom waves-effect waves-light float-right">
                                       Ứng tuyển
                                   </a>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>

            </div>
            <div class="row card-box pt-3">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">

                                <div class="col-md-6 bg-danger pb-5">
                                    <div class="col-12 text-center ">
                                        <h6 class="text-white"  >Hàng ngàn thông tin bổ ích được cập nhật hằng ngày</h6>
                                        <p class="text-white">Đăng kí ngay, để không bỏ lỡ cơ hội</p>
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control"
                                               placeholder="Nhập địa chỉ email nhận thông báo từ raoviec.net"
                                               aria-label="Recipient's username" aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-dark waves-effect waves-light" type="button">
                                                Đăng kí
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 bg-dark">
                                    <div class="col-12 text-center pt-3">
                                        <p class="text-white">
                                            Hàng ngàn ứng viên tìm được công việc phù hợp cho mình
                                            nhờ CV online của họ, Bạn đã có CV trên hệ thống của chúng tôi?
                                        </p>

                                        <a href="" class="btn btn-danger">
                                            Tạo CV Online Miển Phí
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .job{
        &-categories{
            .category-item{
                padding: 3px;
            }
            .card{
                transition: all .4s ease-out;
                cursor: pointer;
                .card-img-top{
                    width: 50%;
                    margin: auto;
                    transition: all .4s ease-out;
                }
                .card-body{
                    padding-top: 0px;
                }
                .category-name{
                    color: red;
                    font-size : 12px;
                }
                &:hover{
                    border-color: red;
                    .card-img-top{
                        transform: scale(1.2);
                    }
                }
            }
        }
        &-item{
            /*background: red;*/
            padding-top: 0px;
            padding-bottom: 0px;
            .card-body{
                background: yellow;
            }
            &:hover{
                .job-thumbnail{
                    img{
                       transform: scale(1.2);
                    }
                }
            }
        }
        &-thumbnail{
            padding-top: 15px;
            img{
                transition: all .4s ease-out;
            }
        }

        &-item-wrapper{

        }
        &-company{
            font-size: 12px;
            color:  #64c5b1 !important;
            font-weight: 500;
            a{
                color: inherit;
            }
        }
        &-salary{
            color: #E6053C;
            font-weight: 600;
        }
        &-content{

        }
        &-title{
            font-size: 12px;
            line-height: 16px;
        }
    }
</style>