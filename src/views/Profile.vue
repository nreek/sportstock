<template>
    <div class="profile page-container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/profile.png" class="icon" alt="">
            My Profile
        </h2>

        <div class="row">
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card__header justify-content-start always-horizontal">
                        <img src="../assets/icons/person.png" width="24" class="icon mr-2" alt="">
                        <h6 class="op-50 mb-0">{{ user.email }}</h6>
                    </div>
                    <div class="card__body mt-5">
                        <UserPassword></UserPassword>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card__header">
                        <div class="align-items-center d-flex">
                            <img src="../assets/icons/shield.png" width="16" class="icon mr-2" alt="">
                            <span>Your Verification status is</span>
                        </div>
                        <router-link to="/profile/verification" class="text-success">Start Verification</router-link>
                    </div>
                    <div class="card__body mt-2">
                        <h5 class="fw-bold">No KYC - Level 1</h5>

                        <a href="#" class="btn btn-lg btn-red btn-outline btn-block">Verification level warning message</a>
                    </div>
                </div>
            </div>

            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card__header justify-content-start always-horizontal">
                        <img src="../assets/icons/lock.png" width="16" class="icon mr-2" alt="">
                        <span>Two-Factor authentication</span>
                    </div>
                    <div class="card__body mt-3">
                        <small class="d-block">Two-Factor Authentication adds an extra layer of security to your account by asking for a verificarion code when you sign in </small>

                        <div class="google-authenticator mt-3">
                            <span class="fw-bold">Google Authenticator</span>
                            <div class="flex mt-2">
                                <small class="flex-1">Use an app to generate time-sensitive authentication codes on your phone</small>
                                <div class="">
                                    <div class="badge mb-2">Recomended</div>
                                    <label for="ga-active" class="coin-toggle ml-3">
                                        <input id="ga-active" class="toggle-checkbox" type="checkbox">
                                        <div class="toggle-switch"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card">
                    <div class="card__header justify-content-start always-horizontal">
                        <img src="../assets/icons/profile.png" width="16" class="icon mr-2" alt="">
                        <span>Personal Information</span>
                    </div>
                    <div class="card__body mt-4 fz-12">
                        <div class="row ml-2 mr-2">
                            <div class="col-6 col-md-3 pr-0">
                                <p class="m-0 mb-2">First Name: </p>
                                <p class="m-0 mb-2">Last Name: </p>
                                <p class="m-0 mb-2">Birthday: </p>
                            </div>
                            <div class="col-6 col-md-2 pl-0">
                                <p class="m-0 mb-2">{{ user.first_name }}</p>
                                <p class="m-0 mb-2">{{ user.last_name }}</p>
                                <p class="m-0 mb-2">{{ user.dob ? formatDate(user.dob) : '' }}</p>
                            </div>
                            <div class="col-6 col-md-2 pr-0">
                                <p class="m-0 mb-2">Country: </p>
                                <p class="m-0 mb-2">Mobile: </p>
                                <p class="m-0 mb-2">Zipcode: </p>
                            </div>
                            <div class="col-6 col-md-5 pl-0">
                                <p class="m-0 mb-2">{{ user.country.join(',') }}</p>
                                <p class="m-0 mb-2">{{ user.cellphone }} <img v-if="user.cellphone" src="../assets/icons/verified.png" width="28" class="hide-for-mobile-only" alt=""></p>
                                <p class="m-0 mb-2">{{ user.zipcode }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12 mt-4 mb-4">
                <div class="card">
                    <div class="card__header justify-content-start always-horizontal">
                        <img src="../assets/icons/document.png" width="16" class="icon mr-2" alt="">
                        <span>Verified Documents</span>
                    </div>

                    <div class="card__body verified-documents d-flex justify-content-center align-items-center">
                        <span class="">There is no document to show</span>
                    </div>
                </div>
            </div>

            <!-- <div class="col-md-12 my-4">
                <div class="card">
                    <div class="card__header justify-content-start always-horizontal">
                        <span>Logs</span>
                    </div>

                    <div class="card__body">
                        <div class="table-responsive mt-4">
                            <table>
                                <thead>
                                    <tr class="uppercase text-secondary-light">
                                        <th>IP</th>
                                        <th>Timestamp</th>
                                        <th>Browser</th>
                                        <th>Device</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  v-for="i of [1,3,4,5,6]" :key="i">
                                        <td>20{{i}}.1{{i}}1.18{{i}}</td>
                                        <td>2020-06-0{{i}} 1{{i}}:34:0{{i}}</td>
                                        <td>Safari</td>
                                        <td>iPhone</td>
                                        <td>
                                            <a href="#"><i class="fas fa-ban"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDistance, parse } from 'date-fns'
import UserPassword from '@/components/UserPassword'

export default {
    name: 'Profile',
    components: { UserPassword },
    data() {
        return {}
    },
    computed : {
        ...mapGetters({ user : 'user' })
    },
    methods : {
        formatDate(date) {
            return formatDistance(new Date(), parse(date, 'yyyy-MM-dd', new Date()))
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .profile {
        .google-authenticator {
            border: 1px solid #DE272E;
            border-radius: 9px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 13px 20px;
            position: relative;

            .badge {
                background: #DE272E;
                color: white;
                padding: 5px 15px;
                font-size: 10px;
                font-weight: bold;
                position: absolute;
                top: 6px;
                right: 0px;
            }

            @include mobile {
                .coin-toggle {
                    margin-left: 0 !important;
                }
            }
        }

        .verified-documents {
            min-height: 300px;
        }
    }
</style>
