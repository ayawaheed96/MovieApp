const INITIAL_STATE={
    movies:[],
    page:null
}
const moviesReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_MOVIES':
            console.log(action.payload.movie);
            return {...state,movies:action.payload.movie,page:action.payload.page}
            case 'SET_PAGES':
                console.log(action.payload.movie)
                return {...state,movies: [...action.payload.movie],page:action.payload.page}
        default:
            return state;

    }

}
export default moviesReducer;