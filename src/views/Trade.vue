<template>
    <div class="trade overflow-y-auto">
        <div class="grid-container">
            <div class="grid-cell graph">
                <img src="../assets/images/graph.png" style="height: 100%; width: 100%; object-fit: contain" alt="">
            </div>
            <div class="grid-cell sell overflow-y-auto">
                <TradeBuySell action="buy"></TradeBuySell>
            </div>
            <div class="grid-cell teams-players  overflow-y-auto">
                <TeamPlayerTabs></TeamPlayerTabs>
            </div>
            <div class="grid-cell news-wrapper">
                <News></News>
            </div>
            <div class="grid-cell my-orders overflow-y-auto">
                <div class="p-3">
                    <h2 class="page-title font-bold">My Orders</h2>
                    <div class="table-responsive mt-3">
                        <table>
                            <thead>
                                <tr class="uppercase text-secondary-light">
                                    <th>Time</th>
                                    <th>Side</th>
                                    <th>Type</th>
                                    <th>Trigger</th>
                                    <th>Price (USTD)</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="i of [1,3,4,5,6,9,11,14]" :key="i">
                                    <td>0{{i}}:01:{{i}}7</td>
                                    <td :class="`uppercase text-${i % 2 == 1 ? 'green' : 'red' }`">{{ i % 2 == 1 ? 'Buy' : 'Sell' }}</td>
                                    <td>Limit</td>
                                    <td> - </td>
                                    <td>0.0134533</td>
                                    <td>8737.90231</td>
                                    <td>{{ i % 2 == 1 ? 'Complete' : 'Partial 50/50' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="grid-cell crowd-funding">
                <Crowdfunding></Crowdfunding>
            </div>
            <div class="grid-cell orders">
                <TradeOrders></TradeOrders>
            </div>
            <div class="grid-cell buy overflow-y-auto">
                <TradeBuySell action="sell"></TradeBuySell>
            </div>
        </div>
    </div>
</template>

<script>
import Crowdfunding from '@/components/Crowdfunding'
import News from '@/components/News'
import TradeBuySell from '@/components/TradeBuySell'
import TradeOrders from '@/components/TradeOrders'
import TeamPlayerTabs from '@/components/TeamPlayerTabs'

export default {
    components: { Crowdfunding, News, TradeBuySell, TradeOrders, TeamPlayerTabs },
}
</script>

<style lang="scss" scoped>
/* https://grid.layoutit.com/?id=ZmUKlRB */

.grid-container {
    min-height: 100vh;
    padding: 10px;
    max-height: 140vh;
    display: grid;
    grid-template-columns: 1fr 1.2fr 1.2fr 1fr;
    grid-template-rows: 1fr 1fr 0.7fr 0.6fr 1fr;
    gap: 10px 10px;
    grid-template-areas: 
            "orders graph graph teams-players" 
            "orders graph graph teams-players" 
            "orders buy sell teams-players" 
            "orders buy sell news" 
            "crowd-funding my-orders my-orders news";

    @media screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;

        > div {
            flex: 0 0 100%;
            max-width: 100%;
            order: 10;
        }

        .news {
            max-width: 100%;
            order: 11;
        }

        .graph { order: 0 }
        .orders { order: 1 }
        .sell { order: 2 }
        .buy { order: 3 }
    }
}

.grid-cell {
    background: #1D3106;
    border-radius: 5px;
}
.graph { grid-area: graph; }
.sell { grid-area: sell; }
.teams-players { grid-area: teams-players; }
.news-wrapper { grid-area: news; }
.my-orders { grid-area: my-orders; }
.crowd-funding { grid-area: crowd-funding; }
.orders { grid-area: orders; }
.buy { grid-area: buy; }

.news-wrapper {
    background: transparent;
}

.text-green {
    color: #1FC87F !important
}

/deep/ {
    .text-green {
        color: #1FC87F !important
    }

    .page-title { font-size: 20px; }

    .news {
        max-width: 22vw;
        height: 100%;
        display: flex;
        flex-direction: column;

        .page-title {
            padding: 0 15px;
            margin-top: 0 !important;
        }

        > .card { flex: 1; }
    }

    .crowdfunding {
        padding: 15px;

        .page-title { margin-top: 0 !important; margin-bottom: 10px !important; }
        .player-team { padding-top: 0 !important; }
        .player-team .text-center img{ width: 70px;}

        .card__footer { 
            padding: 0 0 25px 0 !important; 
            background: transparent !important; 

            &:last-child { padding-bottom: 0 !important; }
        }

        .btn-border-gradient span { font-size: 12px !important; }

        .fz-21, .fz-21 * {
            font-size: 16px;

            img {
                width: 25px;
                margin-right: 10px !important;
            }
        }
    }
}

</style>