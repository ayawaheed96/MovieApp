import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import Spinner from "../../components/spinner/spinner";
import changeMovies from "../../store/actions/changeMovies";
import changePages from "../../store/actions/changePages";

import "./movies.css";

const Movies = () => {
  const dispatch = useDispatch();
  const globaleState = useSelector((state) => state.movies);
  const currentPage = globaleState.page;
  const movies = globaleState.movies;
  const loader = useSelector((state) => state.loader.loader);

  useEffect(() => {
    dispatch(changeMovies());
  }, []);

  const handlePages = (event) => {
    dispatch(changePages(event.target.name, currentPage));
  };

  return (
    <>
      {loader === true ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            {movies.map((movie, index) => {
              return (
                <div className="col-12 col-md-6 col-xl-3 m-auto" key={index}>
                  <Link to={`/details/${movie.id}`} className="link">
                    <Card
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      title={movie.title}
                      vote={movie.vote_average}
                      isLiked={false}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-between">
            <button
              disabled={currentPage <= 1}
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
        </div>
      )}
    </>
  );
};
export default Movies;
