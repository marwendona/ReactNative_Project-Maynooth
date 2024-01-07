const initialState = {
  title : "test",
  description : "description1"
}

const notifReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS': {
      console.log({
        ...state,
        notifications: action.payload
      })
      return {
      ...state,
      notifications: action.payload
    };
  }
    case 'UPDATE':
      return {
        ...state,
        ...{title : "test"}

      };
  
    default:
      return state;
  }
};

export default notifReducer;