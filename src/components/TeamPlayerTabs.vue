<template>
    <div class="team-player-tabs">
        <div class="tabs flex">
            <div class="tab flex items-center py-3 px-4" :class="{ 'active' : activeTab == 'teams' }" @click="activeTab = 'teams'; activeSubTab = 'ALL'">
                <img src="../assets/icons/team-field.svg" width="20" class="mr-2" alt="">    
                <span>Teams</span>
            </div>  
            <div class="tab flex items-center py-3 px-4" :class="{ 'active' : activeTab == 'players' }" @click="activeTab = 'players'; activeSubTab = 'ALL'">
                <img src="../assets/icons/chuteira.svg" width="20" class="mr-2 icon" alt="">    
                <span>Players</span>
            </div>  
            <div class="tab flex-1 items-center py-3 px-4 flex items-center">
                <input type="text" placeholder="Search">
                <img src="../assets/icons/search.png" class="icon" width="15" alt="">
            </div>
        </div>

        <div class="tabs-content relative mx-3">
            <div class="tab-content" :class="{ 'active' : activeTab == tab }" v-for="(tab, index) in ['teams', 'players']" :key="'tab_'+index">
                <div class="subtabs flex text-center">
                    <a 
                    href="javascript:void(0);" 
                    v-for="(subtab, index) in ['ALL', 'FIFA', 'UEFA','CBF','USDSC']" 
                    :key="'subtab_'+index"
                    class="px-4 py-2 flex-1" 
                    :class="{ 'active' : activeSubTab == subtab }"
                    @click="activeSubTab = subtab"
                    >{{ subtab }}</a>
                </div>

                <div class="table-responsive">
                        <table>
                            <thead>
                                <tr class="uppercase text-secondary-light">
                                    <th>Market</th>
                                    <th>Price (USDSC)</th>
                                    <th>Volume (24h)</th>
                                    <th>Change (24h)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="i of [1,3,4,5,6,9,11,14]" :key="i">
                                    <td>
                                        <img class="rounded-full" :src="require(`../assets/images/${ activeTab == 'teams' ? 'team-logo' : 'neymar' }.png`)" alt="" width="30">
                                    </td>
                                    <td>$ {{ i * (index + 1) }}432.09</td>
                                    <td>$ 455678.09</td>
                                    <td>
                                        <img :src="require(`../assets/icons/graph-${ i % 2 == 1 ? 'up' : 'down' }.svg`)" class="float-left mr-2" alt="" width="20">
                                        <span :class="`uppercase text-${i % 2 == 1 ? 'green' : 'red' }`">{{ i % 2 == 1 ? '-1.39%' : '12.97%' }}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab : 'teams',
            activeSubTab : 'ALL',
        }
    }
}
</script>

<style lang="scss" scoped>
    .subtabs a {
        font-size: 12px;
        border-bottom: 1px solid rgba(255,255,255,0.2);

        &.active { color: #1FC87F !important; font-weight: bold; }
    }

    .tab-content {
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
        opacity: 0;
        transition: all .6s;
        left: 0;

        &.active {
            opacity: 1;
            pointer-events: all;
        }
    }

    .tab {
        background: #233a09;
        transition: all .6s;
        cursor: pointer;

        span { font-size: 14px; }

        &.active {
            background: #1d3106;

            span  { font-weight: bold; }
        }

        input { outline: none; }
        ::placeholder { color: white; }
    }

    table {
        border-top: none;

        * { font-size: 10px; }

        tr:hover td {
            background: rgba(255,255,255, 0.09);
        }

        td {
            padding: 5px 10px;
            font-size: 13px;
        }
    }
</style>