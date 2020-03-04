const input =( state="", action) => {
    if (action.type === 'SET_INPUT'){
    return action.value 
    }
    return state
}
export default input