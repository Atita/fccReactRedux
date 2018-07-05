// define ADD, addMessage(), messageReducer(), and store here:
const ADD='ADD';

const addMessage=(msg)=> {
  return {  
      type:ADD,
      message:msg
       };
};

const messageReducer=(state=[],action)=> {
   switch(action.type){
        case ADD: return [...state, action.message]
        default: return state
    };
}

let store=Redux.createStore(messageReducer)