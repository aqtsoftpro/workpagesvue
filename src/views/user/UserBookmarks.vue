<template>
    <div class="dashboard-area pt-120 mb-120">
        <div class="container">
            <div class="row g-lg-4 gy-5 mb-90">
                <user-menu />
                <div class="col-lg-9">
                    <div class="applied-job-area">
                        <div class="table-wrapper">
                            <div class="table-title-filter">
                                <div class="section-title">
                                    <h5>Bookmark Jobs: </h5>
                                </div>
                            </div>
                            <table class="eg-table table category-table mb-30">
                                <thead>
                                    <tr>
                                        <th>Job Tittle</th>
                                        <th>Deadline</th>
                                        <th>Company</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Job Title">
                                            <div class="company-info">
                                                <div class="logo">
                                                    <img src="/assets/images/bg/company-logo/company-01.png" alt="">
                                                </div>
                                                <div class="company-details">
                                                    <div class="top">
                                                        <h6><a href="job-details.html">Senior UI/UX Designer</a></h6>
                                                        <span><img src="/assets/images/icon/calender2.svg" alt=""> 1 days ago</span>
                                                    </div>
                                                    <ul>
                                                        <li><img src="/assets/images/icon/location.svg" alt="">New-York, USA</li>
                                                        <li>
                                                            <img src="/assets/images/icon/arrow2.svg" alt="">
                                                            <p><span class="title">Salary:</span> $60-$90 / <span class="time">Per Hour</span></p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-label="Deadline">03/07/2022</td>
                                        <td data-label="Company"><a class="company-btn" href="company-dashboard.html">Tech.Bath Com... </a></td>
                                        <td data-label="Action"><button class="view-btn">Apply Now</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination-table-info">
                                <div class="table-info">
                                    <span>06 Results Showing In 20 Jobs</span>
                                </div>
                                <div class="pagination-area">
                                    <nav aria-label="...">
                                        <ul class="pagination">
                                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"></a></li>
                                            <li class="page-item active" aria-current="page"><a class="page-link" href="#">01</a></li>
                                            <li class="page-item"><a class="page-link" href="#">02</a></li>
                                            <li class="page-item"><a class="page-link" href="#">03</a></li>
                                            <li class="page-item"><a class="page-link" href="#"></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import UserMenu from './UserMenu.vue';

@Options({
components: {
  'user-menu': UserMenu
},
})
export default class UserBookmarks extends Vue {}
</script>
