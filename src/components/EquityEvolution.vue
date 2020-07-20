<template>
    <div class="equity-evolution">
        <h2 class="page-title mb-4 mt-10 flex justify-between">
            <div class="flex items-center text-bold">
                <img src="../assets/icons/document.png" class="icon" alt="" style="width: 20px">
                Equity Evolution
            </div>
        </h2>

        <div class="card h-auto">
            <div class="row">
                <div class="border-dashed border-green-700 border-r-2 px-6 py-2">
                    <p class="font-bold lh-1 text-2xl mb-0 text-red">$15,000</p>
                    <small>This month</small>
                </div>
                <div class="px-6 py-2 opacity-50">
                    <p class="font-bold lh-1 text-2xl mb-0">$10,000</p>
                    <small>Last month</small>
                </div>
                

                <div class="random">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="15" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient spreadMethod="pad" id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:rgb(242, 51, 69);stop-opacity:1;" />
                                <stop offset="100%" style="stop-color:rgb(58, 219, 0);stop-opacity:1;" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    <trend-chart :datasets="datasets" :grid="grid" :labels="labels" :min="0" :interactive="true" @mouse-move="onMouseMove" class="random-chart"></trend-chart>
                        <div id="pop" role="tooltip" ref="tooltip" class="tooltip" :class="{'is-active': tooltipData}">
                            <div class="tooltip-container" v-if="tooltipData">
                                <strong>{{labels.xLabels[tooltipData.index]}}</strong>
                                <div class="tooltip-data">
                                <div class="tooltip-data-item tooltip-data-item--1">{{tooltipData.data[0]}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'EquityEvolution',
    data() {
        return {
            datasets: [
                {
                    data: [70, 100, 400, 180, 100, 300, 500],
                    smooth: true,
                    showPoints: false,
                    fill: false,
                    className: "curve1"
                },
            ],
            grid: {
                verticalLines: false,
                horizontalLines: true
            },
            labels: {
                xLabels: ["18", "19", "20", "21", "22", "23", "24"],
                yLabels: 5,
                yLabelsTextFormatter: val => '$ ' + Math.round(val * 100) / 100
            },
            tooltipData: null,
            popper: null,
            popperIsActive: false
        };
    },
    methods: {
        initPopper() {
            const chart = document.querySelector(".random-chart");
            const ref = chart.querySelector(".active-line");
            const tooltip = this.$refs.tooltip;
            
            this.popper = new window.Popper(ref, tooltip, {
                placement: "right",
                modifiers: {
                    offset: { offset: "0,10" },
                    preventOverflow: {
                        boundariesElement: chart
                    }
                }
            });
        },
        onMouseMove(params) {
            this.popperIsActive = !!params;
            this.popper.scheduleUpdate();
            this.tooltipData = params || null;
        }
    },
    mounted() {
        this.initPopper();
    }
}
</script>

<style lang="scss">
    .equity-evolution {
        .random {
            width: calc(100% - 30px);
            margin-left: 15px;
            
            .vtc {
                height: 250px;
                font-size: 12px;

                @media (min-width: 699px) {
                    height: 320px;
                }
            }

            .labels {
                stroke: white;
                stroke-width: 0.3px;
                fill: white;
            }

            .active-line {
                stroke: rgba(0, 0, 0, 0.05);
            }

            .line {
                stroke : rgba(255, 255, 255, 0.13);
            }

            .point {
                stroke-width: 2;
                transition: stroke-width 0.2s;
            }

            .point.is-active {
                stroke-width: 5;
            }
            
            .curve1 {
                .stroke {
                    stroke: url(#gradient) ;
                    stroke-width: 2;
                }
                .fill {
                    fill: transparent;
                    opacity: 0.05;
                }
                .point {
                    fill: #fbac91;
                    stroke: #fbac91;
                }
            }

            .tooltip {
                padding: 10px;
                background: transparent;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                pointer-events: none;

                &:not(.is-active) {
                    display: none;
                }
                
                &-data {
                    display: flex;
                
                    &-item {
                        display: flex;
                        align-items: center;
                        
                        &:not(:first-child) {
                            margin-left: 20px;
                        }

                        &:before {
                            content: "";
                            display: block;
                            width: 15px;
                            height: 15px;
                            margin-right: 5px;
                        }
                        &--1:before {
                            background: #fbac91;
                        }
                        &--2:before {
                            background: #fbe1b6;
                        }
                        &--3:before {
                            background: #7fdfd4;
                        }
                    }
                }
            }
        }
    }
</style>