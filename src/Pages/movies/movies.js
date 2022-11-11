import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";
import Card from "../../components/card/card";
import Spinner from '../../components/spinner/spinner';

import "./movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState({});
  const loader=useSelector((state)=>state.loader.loader);

  useEffect(() => {
    axiosInstance
      .get(`/movie/popular?api _key=`)
      .then((res) => {
        setMovies(res.data.results);
        setPages({ page: res.data.page });
        //console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePages = (event) => {
    console.log(event.target.name);
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
