const main = (state = [], action) => {
  if (action.type === "ADD_INPUT") {
    console.log(action.value);
    return [...state, action.value];
  } else if (action.type === "REMOVE_INPUT") {
    return state.filter(el => el.id !== action.id);
  } else if (action.type === "COMPLETE_INPUT") {
    return state.map(el =>
      el.id === action.id ? { ...el, iscomplete: !el.iscomplete } : el
    );
  } 
  

  return state;
}
export default main;
