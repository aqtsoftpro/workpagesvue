<template>
    <div class="dashboard-area company-dashboard pt-120 mb-120">
        <div class="container">
            <div class="row">
                <company-menu />
                <div class="col-lg-12">
                    <div class="table-wrapper2">
                        <div class="title-and-btn">
                            <div class="title">
                                <h4>Plan & Invoice List:</h4>
                            </div>
                            <div class="job-post-btn">
                                <a class="primry-btn-2" href="job-post.html">Upgrade Plan</a>
                            </div>
                        </div>
                        <table class="eg-table table plan-invoice-table mb-0">
                            <thead>
                                <tr>
                                    <th>(#) Number</th>
                                    <th>Date</th>
                                    <th>Package</th>
                                    <th>Amount</th>
                                    <th>Payment Through</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>   
                            <tbody>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#83c8h9s88ee4</td>
                                    <td data-label="Date">03/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$720</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status yellow-color">Pending <i class="bi bi-download"></i></button></td>
                                </tr>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#837bg73j833k3</td>
                                    <td data-label="Date">07/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$1000</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status red-color">Unpaid <i class="bi bi-download"></i></button></td>
                                </tr>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#83c8h9s88ee4</td>
                                    <td data-label="Date">03/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$720</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status green-color">Paid Fee <i class="bi bi-download"></i></button></td>
                                </tr>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#83c8h9s88ee4</td>
                                    <td data-label="Date">03/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$720</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status green-color">Paid Fee <i class="bi bi-download"></i></button></td>
                                </tr>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#83c8h9s88ee4</td>
                                    <td data-label="Date">03/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$720</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status yellow-color">Pending <i class="bi bi-download"></i></button></td>
                                </tr>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#83c8h9s88ee4</td>
                                    <td data-label="Date">03/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$720</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status yellow-color">Pending <i class="bi bi-download"></i></button></td>
                                </tr>
                                <tr class="style-2">
                                    <td data-label="(#) Number">#83c8h9s88ee4</td>
                                    <td data-label="Date">03/01/2023</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">Default</button></td>
                                    <td data-label="Amount">$720</td>
                                    <td data-label="Payment Through">Online Method</td>
                                    <td data-label="Payment Status"><button class="status yellow-color">Pending <i class="bi bi-download"></i></button></td>
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
                                        <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1"></a>
                                        </li>
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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Plan from './CompanyPlan.vue'; // @ is an alias to /src
import CompanyMenu from './CompanyMenu.vue'

@Options({
  components: {
    Plan,
    'company-menu': CompanyMenu
  },
})
export default class CompanyPlan extends Vue {}
</script>
