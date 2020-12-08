<template>
    <div class="market-cap page-container w-full">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/market-cap.png" class="icon" alt="">
            Market Cap
        </h2>

        <div class="row">
            <div class="col-md-12">
                <ul class="pills">
                    <li v-for="(type, index) in ['players', 'teams']" :key="index">
                        <a href="javascript:void(0);" :class="{ 'active' : type == activeType }" @click="activeType = type">{{ typeTitle[type] }}</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="card">
            <div class="row card__body">
                <div class="col-md-12">

                    <div class="table-responsive">
                        <table class="md:mt-3">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Market Cap</th>
                                    <th>Price</th>
                                    <th>Volume (24h)</th>
                                    <th> Circulating Supply</th>
                                    <th>Change(24h)</th>
                                    <!-- <th>Price Graph (7d)</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(type, index) in records[activeType]" :key="index">
                                    <td class="text-center">{{ index }}</td>
                                    <td style="min-width: 120px;">
                                        <div class="flex items-center">
                                            <img v-if="type.image" :src="type.image" alt="" class="mr-2">
                                            <span class="text-bold">{{ type.name }}</span>
                                        </div>
                                    </td>
                                    <td>0</td>
                                    <td>{{ type.current_price_usdc || 0 }}</td>
                                    <td>{{ type.available }}</td>
                                    <td>0 </td>
                                    <td>{{ type.current_cap }}</td>
                                    <!-- <td>
                                        <trend
                                        :data="[0, 2, 5, 9, 5, index * 10, 3, 5, 0, 0, 1, index*8, 2, 9, 0]"
                                        gradientDirection="right"
                                        :gradient="['#f23345', '#3adb00']"
                                        :padding="8"
                                        :radius="8"
                                        :stroke-width="2"
                                        auto-draw
                                        smooth>
                                        </trend>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'

export default {
    name: 'History',
    components: {},
    data() {
        return {
            records : { teams : [], players : [] },
            activeType : 'players',
            typeTitle : { teams : 'Teams', players : 'Players' }
        }
    },
    mounted () {
        api.get('team-market-cap/1').then(data => {
            this.records.players = data
        })
        api.get('team-market-cap/2').then(data => {
            this.records.teams = data
        })

        /*this.teams.map( (x, index) => {
            const opts = {
                width : 170,
                height : 50,
                class: "spark",
                cursor: { show: false },
                select: { show: false },
                legend: { show: false },
                scales: {
                    x: { time: false },
                },
                axes: [
                    { show: false, },
                    { show: false, }
                ],
                series: [
                    {},
                    {
                        stroke: "#F23345",
                        fill: "transparent",
                    },
                ],
            };
            
            let can = new window.uPlot(opts, [ 
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 
                    [25093670, 22395560, 25817590, 21847230, 20507460, 17520500, 23735080, 18966120, 19974430, 25817950, 37781330, 34790520, 31130520, 35709870, 24143240, 18369300, 17916260, 19932550, 22684000, 22367480, 24377170, 17272900]
                ]).ctx.canvas;
            can.style.width = "170px";
            can.style.height = "50px";
            
            document.getElementById(`spark-${index}`).appendChild(can)
        })*/
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .market-cap {
        .card { height: auto !important; }
        .pills { 
            margin-left: 20px;
            
            a { 
                border-radius: 10px 10px 0 0;
                background: #2A450A;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 13px;
                padding-top: 8px;
                
                &.active {
                    background: #1d3106;
                }
            }
        }   
    }
</style>
