class MessagesActions {

    static TYPE_ADD = 'ADD';
    static TYPE_DELETE = 'DELETE';
    static TYPE_CLEAR = 'CLEAR';

    add(data){
        return {
            type: `MESSAGES_${MessagesActions.TYPE_ADD}`,
            payload: data
        };
    }

    delete(data){
        return {
            type: `MESSAGES_${MessagesActions.TYPE_DELETE}`,
            payload: data
        };
    }

    clear(data){
        return {
            type: `MESSAGES_${MessagesActions.TYPE_CLEAR}`,
            payload: data
        };
    }

}

export default new MessagesActions();