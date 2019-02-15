const initialTweets = {
    tweets: [],
    fetching:false,
    fetched:false,
    error:null,
};

export default function reducer (state = initialTweets, action) {

    switch (action.type) {
        case "FETCH_TWEETS": {
            return {...state, fetching:true }
            
        }
        case "FETCH_TWEETS_REJECTED": {
            return {...state, fetching:false, error:action.payload }
            
        }
        case "FETCH_TWEETS_FULLFILLED": {
            return {...state, fetching:false, fetched:true, tweets:action.payload}
            
        }
        case "ADD_TWEET": {
            return {...state, tweets:action.payload }
            
        }

        case "UPDATE_TWEET": {
            return {...state, tweets:action.payload }
            
        }
        case "DELETE_TWEET": {
            return {...state, tweets:action.payload }
            
        }
    
       
    }

    return state;

}