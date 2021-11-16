const initialState = {
    userState :[]
}

const DummyReducer =(state=initialState,action)=>{
switch (action.type) {
    case "Dummy_Reducer":
         return state;

    default:
        return state;
}
}

export default DummyReducer;