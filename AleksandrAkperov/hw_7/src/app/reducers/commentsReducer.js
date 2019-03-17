const initialComments = {
    comments: [],
    fetching:false,
    fetched:false,
    error:null,
};

export default function reducer (state = initialComments, action) {

    switch (action.type) {
        case "FETCH_COMMENTS": {
            return {...state, fetching:true }
            
        }
        case "FETCH_COMMENTS_REJECTED": {
            return {...state, fetching:false, error:action.payload }
            
        }
        case "FETCH_COMMENTS_FULLFILLED": {
            return {...state, fetching:false, fetched:true, comments:action.payload}
            
        }
        case "ADD_TWEET": {
            return {...state, comments:action.payload }
            
        }
           
    }

    return state;

}