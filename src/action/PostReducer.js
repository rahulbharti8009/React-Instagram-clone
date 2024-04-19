
export const initial_state = {
    loading: false,
    error : false,
    post: {}
}

export const postReducer =(state, action) => {
    switch(action.type){
        case "fetch_login":
            return{
               loading:true, error: false, post: {}
            }
        case "response_login":
            return{
                    ...state,loading:false, error: false, post: action.playload
            }
        case "error_login":
            return{
                loading:false, error: true, post: {}
            }
    }
}