import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";

const Details = () => {
  const [details, setDetails] = useState({});
  const[categories,setCategories]=useState([]);
  const params = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}?api_ key=`)
      .then((res) => {
        setDetails(res.data);
        setCategories(res.data.genres);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[params.id]);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12 col-md-6 col-xl-4">
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt="movieImage" className="col-12 rounded" style={{height:'70vh'}}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-8">
          <table className="table table-striped m-2" style={{height:'70vh'}}>
            <tbody>
              <tr>
                <td><b>Title</b></td>
                <td>{details.title}</td>
              </tr>
              <tr>
                <td><b>Adults</b></td>
                <td>{details.adults?'Appropriate':'Inappropriate'}</td>
              </tr>
              <tr>
                <td><b>Rating</b></td>
                <td>{details.vote_average}</td>
              </tr>
              <tr>
                <td><b>Categories</b></td>
                <td>{categories.map((cate,index)=>{
                  return<li key={index}>{cate.name}</li>
                })}</td>
              </tr>
              <tr>
                <td><b>Language</b></td>
                <td>{details.original_language}</td>
              </tr>
              <tr>
                <td><b>Overview</b></td>
                <td>{details.overview}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Details;
