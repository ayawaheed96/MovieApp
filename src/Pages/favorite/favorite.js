import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import changeRemoveFavorites from '../../store/actions/changeRemoveFavorites';
import './favorite.css'

const Favorite = () => {

  const favoriteState = useSelector(state=>state.favorites);
  const dispatch = useDispatch();
  
  function handleRemoveFromFav(film){
    //console.log(film)
    dispatch(changeRemoveFavorites(film));

  }
  return (
    <>
      <div className='col-12 mainFav border d-flex justify-content-between'>
        <p className='textFav'>My Favorites</p>
        <span><FontAwesomeIcon icon={faHeart} size='xl'/> {favoriteState.counter}</span>
      </div>
      <div className='container'>
        <div className='row'>
          
          {
            (favoriteState.favs.length > 0 )? favoriteState.favs.map((fav,index)=>{
              return <div
              className="col-12 col-md-6 col-xl-3 "  key={index}>
               <div className="card-group my-3">
              <div className="card">
                <img
                  src={fav.src}
                  className="card-img-top"
                  alt={fav.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{fav.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">Rate:{fav.vote}</small>
                    <span style={{ float: "right" ,color:'red'}} onClick={()=> handleRemoveFromFav(fav)}>
                      <FontAwesomeIcon icon={faTrash}  size='xl'/>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            </div>
            }): <div className='d-flex my-5 justify-content-center'> <h1> Empty!</h1></div>
          } 
          
          
        
      
        </div>
        
      </div>

    </>
  )
}
export default Favorite;
