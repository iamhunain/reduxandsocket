const initialstate = { data: null }

const reducer = (state = initialstate, action, hun) => {
    switch (action.type) {
        case 'console':
            console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
export default reducer;