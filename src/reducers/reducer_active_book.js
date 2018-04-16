//state argument is not application state
//only the state that this reducer is responsable for
export default function(state=null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    // return action.payload;
    console.log(action);
    return Object.assign({}, state, action.payload)
  }

  return state;
}
