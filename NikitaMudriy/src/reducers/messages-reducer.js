class MessagesReducer {

    static reducer(state = [], action){
        switch(action.type){
            case 'MESSAGES_ADD':
                return [...state, action.payload];
            default:
                return [...state];
        }
    }

}

export default MessagesReducer.reducer;