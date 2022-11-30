import axiosInstance from "../../axios/axiosInstance";

const changePages = (target, currentPage) => {
  if (target === "prev" && currentPage > 1) {
    return (dispatch) => {
      axiosInstance
        .get(`/movie/popular?page=${currentPage - 1}`)
        .then((res) => {
          dispatch({
            type: "SET_PAGES",
            payload: { movie: res.data.results, page: res.data.page },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  } else if (target === "next") {
    return (dispatch) => {
      axiosInstance
        .get(`/movie/popular?page=${currentPage + 1}`)
        .then((res) => {
          dispatch({
            type: "SET_PAGES",
            payload: { movie: res.data.results, page: res.data.page },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  }
};
export default changePages;
