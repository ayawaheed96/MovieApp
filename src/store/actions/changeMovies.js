import axiosInstance from "../../axios/axiosInstance";

const changeMovies=()=>{

    return (dispatch)=>{
        axiosInstance
      .get(`/movie/popular?api _key=`)
      .then((res) => {
        // setMovies(res.data.results);
        // setPages({ page: res.data.page });
        //console.log(res.data);
        dispatch({type:'SET_MOVIES',payload:{movie:res.data.results,page:res.data.page}});
      })
      .catch((error) => {
        console.log(error);
      });

    }

}
export default changeMovies;