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
                                <router-link class="primry-btn-2" to="/plans">{{ companySubscriptions.length > 0 ? 'Upgrade Plan': 'Purchase Plan' }}</router-link>
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
                                    <th>Action</th>
                                </tr>
                            </thead>   
                            <tbody>
                                <tr v-if="companySubscriptions.length > 0" v-for="subscription in companySubscriptions" class="style-2">
                                    <td data-label="(#) Number">#-{{ subscription.id }}</td>
                                    <td data-label="Date">{{ formatDate(subscription.created_at) }}</td>
                                    <td data-label="Package"><button class="eg-btn light-sky-btn">{{ subscription.package.name }}</button></td>
                                    <td data-label="Amount">${{ subscription.stripe_price }}</td>
                                    <td data-label="Payment Through">{{ subscription.package.stripe_price_id ? subscription.brand+ ' card - '+subscription.last_4 : 'Offline Method' }}</td>
                                    <td data-label="Payment Status">
                                        <!-- <router-link v-if="subscription.receipt_url" class="status yellow-color" :to="subscription.receipt_url" target="_blank">
                                            {{ subscription.stripe_status==""? 'Pending': subscription.stripe_status}} <i class="bi bi-download ms-5"></i>
                                        </router-link> -->
                                        <!-- <a class="status yellow-color" :href="subscription.receipt_url" target="_blank" >
                                            {{ subscription.stripe_status==""? 'Pending': subscription.stripe_status}} <i class="bi bi-download ms-5"></i>
                                        </a> -->
                                        <button class="status yellow-color" @click="getReceipt(subscription.receipt_url)">{{ subscription.stripe_status==""? 'Pending': subscription.stripe_status}} <i class="bi bi-download"></i></button>
                                    </td>
                                    <td class="action">
                                        <span v-if="subscription.status == 'unsubscribed'" class="badge bg-danger">Unsubscribed</span>
                                        <button v-else class="status yellow-color" @click="unsubscribe({'subscription_id': subscription.id})">Unsubscribe</button>
                                    </td>
                                </tr>
                                <tr v-else >
                                    <td colspan="4">
                                        No result found...
                                    </td>
                                </tr>

                                <!-- <tr class="style-2">
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
                                </tr> -->
                            </tbody>
                        </table>
                        <!-- <div class="pagination-table-info">
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
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Plan from './CompanyPlan.vue'; // @ is an alias to /src
import { mapGetters } from 'vuex';
import CompanyMenu from './CompanyMenu.vue'

@Options({
  components: {
    Plan,
    'company-menu': CompanyMenu
  },
  data() {    
    return {
        subscriptions:[],
    }  
  },
  computed: {
    ...mapGetters(['companySubscriptions']),
  },

  methods: {
    formatDate(dateString: any) {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    },
    getReceipt(url: any){
        if (url == null) {
            return false;
        }
        window.open(url);
        // window.open("https://www.w3schools.com");
    },

    unsubscribe(subscription: any){        
        this.$store.dispatch('unSubscribe', subscription)
    },
  },
  async mounted() {
    this.$store.dispatch('companySubscriptions')
    console.log(this.companySubscriptions);
  },
})
export default class CompanyPlan extends Vue {}
</script>
