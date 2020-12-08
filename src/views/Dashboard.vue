<template>
    <div class="dashboard page-container w-full">
        <div class="row h-full">
            <div class="col-md-9 main-left">

                <DashboardCards></DashboardCards>
            
                <EquityEvolution></EquityEvolution>

                <div class="row">
                    <div class="col-md-6">
                        <crowdfunding></crowdfunding>
                    </div>

                    <div class="col-md-6">
                        <news></news>
                    </div>
                </div>
            </div>

            <div class="col-md-3 sidebar-right">
                <sport-panel title="Team Market Cap" :icon="require('@/assets/icons/ball.svg')">
                    <div class="card mb-2 flex items-center" v-for="(team, index) in teams.slice(0, 6)" :key="`team-${index}`">
                        <img v-if="team.image" :src="team.image" width="38" class="mr-2" alt="">

                        <div class="flex-1">
                            <p class="font-bold">{{ team.name }}</p>
                            <small class="uppercase">1 {{ team.symbol }} </small>
                        </div>

                        <span class="text-bold" :class="index % 3 != 1 ? 'text-green' : 'text-red'">{{ index % 3 != 1 ? '+' : '-' }} {{ index }}5%</span>
                    </div>

                    <div class="card mb-2 flex items-center border border-dashed border-red-800">
                        <img :src="require('@/assets/icons/empty-shield.png')" width="38" class="mr-2" alt="">
                        <div class="flex-1 cursor-pointer" @click="$store.commit('SET_CREATE_TOKEN', 'team')">
                            <p class="font-bold">Create Team Token</p>
                            <small class="text-green uppercase">Start Now</small>
                        </div>
                    </div>

                    <div class="card mb-2 flex justify-center items-center border border-dashed border-green-900" style="background-color: #223a09">
                        <span class="uppercase font-bold py-2">VIEW ALL</span>
                    </div>
                </sport-panel>

                <sport-panel title="Player Market Cap" :icon="require('@/assets/icons/chuteira.svg')">
                    <div class="card mb-2 flex items-center" v-for="(player, index) in players.slice(0, 6)" :key="`team-${index}`">
                        <img v-if="player.image" :src="player.image" width="38" class="mr-2" alt="">

                        <div class="flex-1">
                            <p class="font-bold">{{ player.name }}</p>
                            <small class="uppercase">1 {{ player.symbol }} </small>
                        </div>

                        <span class="text-bold" :class="index % 3 != 1 ? 'text-green' : 'text-red'">{{ index % 3 != 1 ? '+' : '-' }} {{ index }}5%</span>
                    </div>

                    <div class="card mb-2 mt-2 md:mt-0 flex items-center border border-dashed border-red-800">
                        <img :src="require('@/assets/icons/empty-shield.png')" width="38" class="mr-2" alt="">
                        <div class="flex-1 cursor-pointer" @click="$store.commit('SET_CREATE_TOKEN', 'player')">
                            <p class="font-bold">Create Player Token</p>
                            <small class="text-green uppercase">Start Now</small>
                        </div>
                    </div>

                    <div class="card mb-2 flex justify-center items-center border border-dashed border-green-900" style="background-color: #223a09">
                        <span class="uppercase font-bold py-2">VIEW ALL</span>
                    </div>
                </sport-panel>

            </div>
        </div>
    </div>
</template>

<script>
import EquityEvolution from '@/components/EquityEvolution'
import Crowdfunding from '@/components/Crowdfunding'
import News from '@/components/News'
import DashboardCards from '@/components/DashboardCards'
import api from '@/api'

export default {
    name: 'History',
    components: { EquityEvolution, Crowdfunding, News, DashboardCards },
    data() {
        return {
            teams : [],
            players : [],
        }
    },
    mounted () {
        api.get('team-market-cap/1').then(data => this.players = data)
        api.get('team-market-cap/2').then(data => this.teams = data)
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .dashboard {
        padding-right: 16px;
        padding-left: 20px;
        margin-top: -20px;

        .main-left {
            padding-top: 20px;
        }

        .sidebar-right {
            background: #27410A;
            border-left: 1px solid rgba(255,255,255,0.07);
            padding: 0;

            @include desktop {
                height: 100%;
            }

            .card {
                padding: 7px 10px;

                p { line-height: 1; padding-top: 3px; }

                img { border-radius: 50%; }
            }
        } 
    }
</style>
