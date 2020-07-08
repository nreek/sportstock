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
                        <h6 class="text-secondary-light mb-0">menders@altcoinlab.io</h6>
                    </div>
                    <div class="card__body mt-5 d-flex">
                        <div>
                            <span class="d-block">Password: </span>
                            <span>•••••••••••••••••••</span>
                        </div>
                        <div class="align-items-center d-flex ml-4">
                            <img src="../assets/icons/edit.png" width="17" class="mr-2" alt="">
                            <router-link to="/profile/change-password" class="">Change Password</router-link>
                        </div>
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
                            <small class=" google-authenticator__text">Use an app to generate time-sensitive authentication codes on your phone</small>
                            <div>
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
                                <p class="m-0 mb-2">Rafael</p>
                                <p class="m-0 mb-2">Mendes</p>
                                <p class="m-0 mb-2">20/06/1986</p>
                            </div>
                            <div class="col-6 col-md-2 pr-0">
                                <p class="m-0 mb-2">Country: </p>
                                <p class="m-0 mb-2">Mobile: </p>
                                <p class="m-0 mb-2">Zipcode: </p>
                            </div>
                            <div class="col-6 col-md-5 pl-0">
                                <p class="m-0 mb-2">Brazil</p>
                                <p class="m-0 mb-2">+55 11 90356-4324 <img src="../assets/icons/verified.png" width="28" class="hide-for-mobile-only" alt=""></p>
                                <p class="m-0 mb-2">20061986</p>
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
        </div>
    </div>
</template>

<script>

export default {
    name: 'Profile',
    components: {},
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .profile {
        font-size: 14px;
       
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

            &__text {
                margin-right: 15px;
                margin-left: 15px;

                @include mobile{
                    margin: 10px 0;
                }
            }
        }

        .verified-documents {
            min-height: 300px;
        }
    }
</style>
