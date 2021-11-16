const initialState = {
  Users: [],
};

const SaveUserReducer = (state = initialState, action) => {
    
  switch (action.type) {
    case "SAVE_USERS":
      return {
          Users : [...action.payload]
      };

    default:
      return state;
  }
};

export default SaveUserReducer;
