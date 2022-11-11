import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import Carousel from "react-bootstrap/Carousel";
import './home.css'

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/movie/popular?api _key=`)
      .then((res) => {
        let eightMovies = res.data.results.slice(1, 8);
        //console.log(fourMovies);
        setMovies(eightMovies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center my-3">
      <Carousel className="col-8 border rounded">
        {movies.map((movie, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 rounded"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="First slide"
                style={{height:'85vh'}}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      </div>
    </>
  );
};
