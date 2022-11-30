import axiosInstance from "../../axios/axiosInstance";

const changeMovies = () => {
  return (dispatch) => {
    axiosInstance
      .get(`/movie/popular?api _key=`)
      .then((res) => {
        dispatch({
          type: "SET_MOVIES",
          payload: { movie: res.data.results, page: res.data.page },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export default changeMovies;
