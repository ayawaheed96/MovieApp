import axios from "axios";
import changeLoader from "../store/actions/changeLoader";
import store from "../store/store";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // headers:{},
  params: {
    api_key: "75c829052144c512e337f869b01eb36b",
    limit: 9,
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    store.dispatch(changeLoader(true));
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    store.dispatch(changeLoader(false));

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
