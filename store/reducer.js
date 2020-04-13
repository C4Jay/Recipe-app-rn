const initlist = {
    initfavs: [{}],
    favoritelist: ["cheese-burger","hamburger"],
    favorites: ''
}

const reducer = (state=initlist, action) => {
    if(action.type === 'PUTTOFAV'){
        return {
            ...state,
            initfavs: [...state.initfavs, action.value]
            
        }
    }
    if(action.type === 'MEALSET'){
        return {
            ...state,
            favoritelist: [...state.favoritelist, action.value]
            
        }
    }
    if(action.type === 'FAVOSET'){
        return {
            ...state,
            favorites: action.value
        }
    }
    return state
}

export default reducer;