const state = {
    theme : localStorage.getItem('theme') || 'dark',
    token : localStorage.getItem('token'),
    loading : false,
    user : {},
    coins : [],
    activeCoin : {}
}

export default state