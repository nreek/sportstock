const getters = {
    token : state => state.token,
    user : state => state.user,
    coins : state => state.coins,
    activeCoin : state => state.activeCoin,
    creatingToken : state => {
        return state.creatingToken
        // if(state.creatingToken == 'player') 
        //     return "1" ;
        // else if( state.creatingToken == 'team' ) 
        //     return "2";
        // else 
        //     return false
    },
}

export default getters;