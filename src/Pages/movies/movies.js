import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";
import Card from "../../components/card/card";
import Spinner from '../../components/spinner/spinner';
import changeMovies from "../../store/actions/changeMovies";

import "./movies.css";

const Movies = () => {
  const dispatch=useDispatch()
  const moviesFromState=useSelector(state=>state.movies.movies);
  const currentPage=useSelector(state=>state.movies.page);
  const[movies,setMovies]=useState([])
  const [pages, setPages] = useState({});
  const loader=useSelector((state)=>state.loader.loader);

  useEffect(() => {
    dispatch(changeMovies());
    //console.log(moviesFromState)
    setMovies(moviesFromState);
    setPages({page:currentPage})
  },[]);

  const handlePages = (event) => {
    //console.log(event.target.name);
    if (event.target.name === "prev") {
      if (pages.page > 1) {
        axiosInstance
          .get(`/movie/popular?page=${pages.page - 1}`)
          .then((res) => {
            //console.log(res.data.results);
            setMovies(res.data.results);
            setPages({ page: res.data.page });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (event.target.name === "next") {
      axiosInstance
        .get(`/movie/popular?page=${pages.page + 1}`)
        .then((res) => {
          console.log(res.data.results);
          setMovies(res.data.results);
          setPages({ page: res.data.page });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
    {(loader===true)?<Spinner/>:<div className="container">
        <div className="row">
          {movies.map((movie, index) => {
            return (
              <div
                className="col-12 col-md-6 col-xl-3 m-auto"
                key={index}
              >
                <Link to={`/details/${movie.id}`} className="link">
                  <Card src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title} vote={movie.vote_average} isLiked={false}/>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-between">
          <button
            className="col-3 col-md-2 col-xl-1 p-2 m-5 border rounded"
            onClick={(e) => {
              handlePages(e);
            }}
            name="prev"
          >
            Prev
          </button>
          <button
            className="col-3 col-md-2 col-xl-1 p-2 m-5 border rounded"
            onClick={(e) => {
              handlePages(e);
            }}
            name="next"
          >
            Next
          </button>
        </div>
      </div>}
    </>
  );
};
export default Movies;
