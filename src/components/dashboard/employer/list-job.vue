<template>
    <div id="job-list">
        <div class="container">
            <div class="card-box">
                <h4 class="m-t-0 header-title">
                    <b>Danh sách tin tuyển dụng</b>
                </h4>
                <div class="col-12 pt-2 pb-2 text-right">
                    <router-link to="/dashboard/add-jobs" class="btn btn-custom waves-effect waves-light">
                        Đăng tin mới
                    </router-link>
                </div>
                <ul class="nav nav-tabs tabs-bordered nav-justified">
                    <li class="nav-item">
                        <a href="#home-b2" data-toggle="tab" aria-expanded="false" class="nav-link">
                            Tất cả
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#profile-b2" data-toggle="tab" aria-expanded="true" class="nav-link active">
                            Đã duyệt
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#messages-b2" data-toggle="tab" aria-expanded="false" class="nav-link">
                            Chờ duyệt
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#settings-b2" data-toggle="tab" aria-expanded="false" class="nav-link">
                            Hết hạn
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#settings-b2" data-toggle="tab" aria-expanded="false" class="nav-link">
                            Bị từ chối
                        </a>
                    </li>
                </ul>

                <div class="table-responsive">
                    <table class="table table-hover m-0 table-actions-bar">

                        <thead>
                        <tr>
                            <th>
                                <div class="btn-group dropdown">
                                    <button type="button" class="btn btn-secondary btn-xs dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"><i class="caret"></i></button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Dropdown link</a>
                                        <a class="dropdown-item" href="#">Dropdown link</a>
                                    </div>
                                </div>
                            </th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Job Timing</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">
                            </td>

                            <td>
                                <h5 class="m-b-0 m-t-0 font-600">Tomaslau</h5>
                                <p class="m-b-0"><small>Web Designer</small></p>
                            </td>

                            <td>
                                <i class="mdi mdi-map-marker text-primary"></i> New York
                            </td>

                            <td>
                                <i class="mdi mdi-clock text-success"></i> Full Time
                            </td>

                            <td>
                                <i class="mdi mdi-currency-usd text-warning"></i> 3265
                            </td>

                            <td>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-pencil"></i></a>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-close"></i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="assets/images/users/avatar-3.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">
                            </td>

                            <td>
                                <h5 class="m-b-0 m-t-0 font-600">Erwin E. Brown</h5>
                                <p class="m-b-0"><small>Programmer</small></p>
                            </td>

                            <td>
                                <i class="mdi mdi-map-marker text-primary"></i> California
                            </td>

                            <td>
                                <i class="mdi mdi-clock text-success"></i> Part Time
                            </td>

                            <td>
                                <i class="mdi mdi-currency-usd text-warning"></i> 1365
                            </td>

                            <td>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-pencil"></i></a>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-close"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="assets/images/users/avatar-4.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">
                            </td>

                            <td>
                                <h5 class="m-b-0 m-t-0 font-600">Margeret V. Ligon</h5>
                                <p class="m-b-0"><small>Web Designer</small></p>
                            </td>

                            <td>
                                <i class="mdi mdi-map-marker text-primary"></i> New York
                            </td>

                            <td>
                                <i class="mdi mdi-clock text-success"></i> Full Time
                            </td>

                            <td>
                                <i class="mdi mdi-currency-usd text-warning"></i> 115248
                            </td>

                            <td>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-pencil"></i></a>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-close"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="assets/images/users/avatar-5.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">
                            </td>

                            <td>
                                <h5 class="m-b-0 m-t-0 font-600">Jose D. Delacruz</h5>
                                <p class="m-b-0"><small>Web Developer</small></p>
                            </td>

                            <td>
                                <i class="mdi mdi-map-marker text-primary"></i> New York
                            </td>

                            <td>
                                <i class="mdi mdi-clock text-success"></i> Part Time
                            </td>

                            <td>
                                <i class="mdi mdi-currency-usd text-warning"></i> 2451
                            </td>

                            <td>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-pencil"></i></a>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-close"></i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <img src="assets/images/users/avatar-8.jpg" alt="contact-img" title="contact-img" class="rounded-circle thumb-sm">
                            </td>

                            <td>
                                <h5 class="m-b-0 m-t-0 font-600">Luke J. Sain</h5>
                                <p class="m-b-0"><small>Web Designer</small></p>
                            </td>

                            <td>
                                <i class="mdi mdi-map-marker text-primary"></i> Australia
                            </td>

                            <td>
                                <i class="mdi mdi-clock text-success"></i> Part Time
                            </td>

                            <td>
                                <i class="mdi mdi-currency-usd text-warning"></i> 3265
                            </td>

                            <td>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-pencil"></i></a>
                                <a href="#" class="table-action-btn"><i class="mdi mdi-close"></i></a>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>