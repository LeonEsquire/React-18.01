export default class Reducer {

    static find(state, id){
        return state.findIndex(item => item.id === id);
    }

    static merge(state, payload){
        return payload.map(item => {
            let found = Reducer.find(state, item.id);

            return found > -1 ? {...state[found], ...item} : item;
        });
    }

    static push(state, payload){
        let found = Reducer.find(state, payload.id);

        if(found > -1){
            state[found] = {...state[found], ...payload};
        }else{
            state.push(payload);
        }

        return state;
    }

    static pop(state, payload){
        let found = Reducer.find(state, payload.id);

        if(found > -1)
            state.splice(found, 1);

        return state;
    }

    static update(state, payload, data){
        let found = Reducer.find(state, payload.id);

        if(found > -1)
            state[found] = {...state[found], ...data};

        return state;
    }

    static reducer(state = [], action){
        return [...state];
    }

}