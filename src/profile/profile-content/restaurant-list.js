import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  disConnectOwnerAndRestaurantThunk,
  findRestaurantsByOwnerIDThunk
} from "../../restaurant/restaurants-thunks";
import {
  createAdvertisementThunk
} from "../../advertisement/advertisements-thunks";

const RestaurantList = ({profile}) => {
  const {restaurants, loading} = useSelector(state => state.restaurants);
  // const {currentUser} = useSelector(state => state.users); // todo: uncomment
  const currentUser = profile; // todo: delete
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findRestaurantsByOwnerIDThunk(profile._id))}, []);
  const disconnectRestaurantAndOwnerHandler = (r) => {
    const newOwnerList = r.owners.filter(id => id !== profile._id);
    const compoundObject = {
      owners: newOwnerList,
      rid: r._id
    };
    dispatch(disConnectOwnerAndRestaurantThunk(compoundObject)
    )};

  return (
      <div className="ms-3 me-5">
        <h3 className="text-info">Restaurants I Own</h3>
        <div className="list-group list-group-flush">
          {loading &&
              <div className="list-group-item">
                Loading...
              </div>}
          {restaurants.length === 0 && !loading && <>This owner doesn't have any restaurants.</>}
          {
              restaurants && restaurants.length > 0 && restaurants.map(restaurant =>
              <div className="card w-100 m-2" key={restaurant.id}>
                <img src={restaurant.image_url} className="card-img-top" alt={restaurant.name}/>
                <div className="card-body">
                  <h5 className="card-title text-primary">{restaurant.name}<span className="ps-2 text-secondary">{restaurant.price}</span>
                    {
                      currentUser != null && currentUser._id === profile._id && <>
                        <button className="btn btn-danger float-end" onClick={() => disconnectRestaurantAndOwnerHandler(restaurant)}>I am not the owner</button>
                        </>
                    }
                  </h5>
                  <p className="card-text text-dark mb-0">Phone: {restaurant.display_phone}</p>
                  <p>Category: {restaurant.category}</p>
                  <p className="card-text"><Link to={`/details/${restaurant.yelpID}`}>Details</Link></p>
                </div>
              </div>
              )
          }
        </div>
      </div>
  );
};
export default RestaurantList;