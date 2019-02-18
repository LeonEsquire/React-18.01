const initialPost = {
    posts: [],
    fetching:false,
    fetched:false,
    error:null,
 }

export default function reducer (state = initialPost, action) {

    switch (action.type) {
        case "FETCH_POSTS": {
            return {...state, fetching:true }
            
        }
        case "FETCH_POSTS_REJECTED": {
            return {...state, fetching:false, error:action.payload }
            
        }
        case "FETCH_POSTS_FULLFILLED": {
            return {...state, fetching:false, fetched:true, posts:action.payload}
            
        }
        
        case "DELETE_POST": {
            return {...state, posts:action.payload}
            
        }
       
    }
    return state;


}