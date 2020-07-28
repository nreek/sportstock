<template>
    <div class="portfolio container">
        <h2 class="page-title mb-5">
            <img src="../assets/icons/portfolio.png" class="icon" alt="">
            Portfólio
        </h2>


        <div class="row">
            <div class="col-6 col-md-3">
                <input type="text" class="portfolio-input" placeholder="Search">
            </div>
            <div class="col-6 col-md-3">
                <select name="" id="" class="portfolio-input">
                    <option value="" selected>Filter</option>
                </select>
            </div>

            <div class="col-md-3 flex items-center">
                <label for="ga-active" class="coin-toggle mt-3 md:mt-0 md:ml-3">
                    <input id="ga-active" class="toggle-checkbox" type="checkbox">
                    <div class="toggle-switch"></div>

                    <span class="ml-3">Hide for Zero Balance</span>
                </label>
            </div>
            <div class="col-md-12">
                <div class="table-responsive mb-4">
                    <table>
                        <thead>
                            <tr>
                                <th># ID</th>
                                <th>PIC</th>
                                <th>NAME</th>
                                <th>SYMBOL</th>
                                <th>TYPE</th>
                                <th>BALANCE</th>
                                <th></th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(player, index) in players" :key="index" @click="modal = true">
                                <td class='text-bold'>{{ `354${index}2${index + 7}5${index}` }}</td>
                                <td>
                                    <img :src="require('@/assets/images/player.png')" width="46" alt="">
                                </td>
                                <td>{{ player }}</td>
                                <td>ZHN</td>
                                <td>Player</td>
                                <td>98{{index}}2.{{ index * 10 + 1 }}</td>
                                <td :id="`spark-${index}`"></td>
                                <td class="actions">Trade now</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination :pages="32" :currentPage="28"></Pagination>
            </div>
        </div>

        <div class="modal-shadow" :class="{ 'open' : modal }"></div>
        <div class="modal modal-player" :class="{ 'open' : modal }">
            <img @click="modal = false" :src="require('@/assets/images/player-close.png')" class="close">

            <div class="modal-player__header">
                <div class="row">
                    <div class="col-md-6 flex items-center">
                        <img :src="require('@/assets/images/neymar.png')" height="100%" alt="" class="mr-6">
                        <div class="player-infos">
                            <h5 class="uppercase font-bold mb-0">Neymar Jr</h5>
                            <p class="text-green">21 anos</p>
                        </div>
                    </div>

                    <div class="col-md-6 flex separator justify-center items-center">
                        <img :src="require('@/assets/images/team.png')" alt="">
                    </div>
                </div>
            </div>
            <div class="modal-player__body">
                <div class="row">
                    <div class="col-md-6">
                        <p class="mb-1"><strong class="text-green">Date of Birth: </strong> 05/02/1992</p>
                        <p class="mb-1"><strong class="text-green">Age:</strong> 28</p>
                        <p class="mb-1"><strong class="text-green">Place of Birth:</strong> Mogi das Cruzes, Brazil</p>
                        <p class="mb-1"><strong class="text-green">Nationality:</strong> Brazil</p>
                        <p class="mb-1"><strong class="text-green">Height:</strong> 1.75m / 5 ft 9 in</p>
                        <p class="mb-1"><strong class="text-green">Weight:</strong> 68kg / 10st 10lb</p>
                        <p class="mb-1"><strong class="text-green">Position:</strong> Forward</p>
                    </div>
                    <div class="col-md-6 flex items-center">
                        <div class="turboscores">
                            View more in:
                            <img :src="require('@/assets/images/turboscores.png')" alt="">
                            <a href="#" class="modal-player__button">Go now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import api from '@/api'

import Pagination from '@/components/Pagination'

export default {
    name: 'Portfolio',
    components: { Pagination },
    data() {
        return {
            players : ['C. Ronaldo', 'Neymar Jr', 'R. Madrid', 'Falcão', 'Paraná'],
            modal : false
        }
    },
    mounted () {
        this.players.map( (x, index) => {
            const opts = {
                width : 170,
                height : 50,
                class: "spark",
                cursor: {
                    show: false
                },
                select: {
                    show: false,
                },
                legend: {
                    show: false,
                },
                scales: {
                    x: {
                        time: false,
                    },
                },
                axes: [
                    {
                        show: false,
                    },
                    {
                        show: false,
                    }
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
        })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/settings/_variables.scss';
    @import '@/assets/scss/settings/_mixins.scss';

    .portfolio {
        .portfolio-input {
            height: 55px;
            border: 1px solid rgba(255,255,255,0.21);
            border-radius: 9px;
            padding: 15px 30px;
            text-transform: uppercase;
        }

        table {
            text-transform: uppercase;
            border-collapse: separate;
            border-spacing: 0 15px;
            margin-top: 30px;

            * { border: none; }

            thead {
                opacity: 28%;
                font-weight: bold;
            }

            tbody tr { 
                padding-bottom: 15px; cursor: pointer; 

                &:hover td {
                    background: #172705;
                }
            }
            
            tbody td {
                background: #1D3106;
                padding: 10px 15px;
                transition: all .4s;
                
                &:first-child {
                    border-radius: 10px 0 0 10px;
                }
                &:last-child {
                    border-radius: 0 10px 10px 0;
                }
            }

            .actions {
                color: #14B268;
                font-size: 12px;
            }
        }

        .modal-player__header {
            padding: 25px 35px 0 35px;
            background: #172803;
        }

        .modal-player__body {
            padding: 80px;
            background: #142303;
        }

        .separator {
            border-left: 2px solid #ffffff14;
        }

        .turboscores {
            border-radius: 14px;
            background-color: #192b03;
            padding: 20px;
            text-align: center;
            max-width: 360px;
            width: 100%;
            
            img {
                display: block;
                margin: 20px auto;
            }

            .modal-player__button {
                border-radius: 14px;
                background: linear-gradient(270deg, #D4224C 0%, #5A0C15 100%);
                font-size: 20px;
                font-weight: bold;
                text-transform: uppercase;
                padding: 10px 40px;
                display: inline-block;
            }
        }
    }
</style>
