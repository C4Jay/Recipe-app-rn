const initlist = {
    initfavs: [{}]
}

const reducer = (state=initlist, action) => {
    if(action.type === 'PUTTOFAV'){
        return {
            ...state,
            initfavs: [...state.initfavs, action.value]
            
        }
    }
    return state
}

export default reducer;