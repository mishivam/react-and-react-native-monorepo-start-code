import action from "../actionTypes";

const initState = {
    val: 0
};

const counterReducer = (state = initState, { type}) => {
    console.log(type);
    switch (type) {
        
        case action.ADD_ONE:
            return {
                val: state.val + 1,
            };
        case action.REMOVE_ONE:
            return {
                val: state.val - 1,
            };
        case action.RESET:
            return initState;

        default: return state;
    }
};

export default counterReducer;