import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faFilledHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import changeAddFavorites from "../../store/actions/changeAddFavorites";
import { useState } from "react";

const Card = (props) => {
  const [flag, setFlag] = useState(props.isLiked);
  const dispatch = useDispatch();
  const handleAddToFav = (event) => {
    event.preventDefault();
    dispatch(changeAddFavorites(props));
    setFlag(!flag);

  };

  return (
    <>
      <div className="card-group my-3">
        <div className="card">
          <img src={props.src} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              <small className="text-muted">Rate:{props.vote}</small>
              <span
                style={{ float: "right" }}
                onClick={(e) => handleAddToFav(e)}
              >
                <FontAwesomeIcon icon={flag ? faFilledHeart : faHeart} />
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
