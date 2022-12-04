import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import ReviewAll from "./review-index";
import "./index.css";
import {
  createRestaurantThunk,
} from "../restaurant/restaurants-thunks";


const RestaurantInfo = ({yelpRestaurant}) => {
  const dispatch = useDispatch();
  const {restaurantInDetail} = useSelector(state => state.restaurants)
  useEffect(() => { // create the restaurant
    const newRestaurant = {
      name: yelpRestaurant.name,
      image_url: yelpRestaurant.image_url,
      category: yelpRestaurant.categories[0].title,
      url: yelpRestaurant.url,
      price: yelpRestaurant.price,
      display_phone: yelpRestaurant.display_phone,
      owners: [],
      reviews: [],
      yelpID: yelpRestaurant.id,
    };

    dispatch(createRestaurantThunk(newRestaurant))
  }, [yelpRestaurant]);

  return (
      <div className="list-group">
        {
            yelpRestaurant &&
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img className="wd-object-fit-cover-image wd-detail-image"
                       width={450} height={350} src={yelpRestaurant.image_url}
                       alt="home banner"/></div>
                <div className="col-6">
                  <div className="text-primary"><h1>{yelpRestaurant.name}</h1>
                  </div>
                  <div className="list-group">
                    <div
                        className="list-group-item border-0 pt-0 pb-0 text-dark">Price: {`${yelpRestaurant.price ? yelpRestaurant.price : 'N/A'}`}</div>
                    <div
                        className="list-group-item border-0 pt-0 pb-0 text-dark">Phone: {`${yelpRestaurant.display_phone ? yelpRestaurant.display_phone : 'N/A'}`}</div>
                    <div
                        className="list-group-item border-0 pt-0 pb-0 text-dark">Status: {`${yelpRestaurant.is_closed
                        ? 'Closed' : 'Open'}`}</div>
                    {(!yelpRestaurant.categories || yelpRestaurant.categories.length === 0) && <div className="list-group-item border-0 pt-0 pb-0 text-dark">Categories: N/A</div>}
                    {yelpRestaurant.categories && yelpRestaurant.categories.length > 0 && <div
                        className="list-group-item border-0 pt-0 pb-0 text-dark">Categories: {yelpRestaurant.categories?.map(
                        (c, index) =>
                            <div
                                className="list-group-item border-0 pt-0 pb-0 text-dark"
                                key={index + "_category"}>{c.title} </div>)}
                    </div>}
                    {(!yelpRestaurant.transactions || yelpRestaurant.transactions.length === 0) && <div className="list-group-item border-0 pt-0 pb-0 text-dark">Support: N/A</div>}
                    {yelpRestaurant.transactions && yelpRestaurant.transactions.length > 0 && <div
                        className="list-group-item border-0 pt-0 pb-0 text-dark">Support: {yelpRestaurant.transactions?.map(
                        (transaction, index) =>
                            <i className="bi-check me-2"
                               key={index + "_transaction"}>{transaction}</i>)}
                    </div>}
                    <div
                        className="list-group-item border-0 pt-0 pb-0 text-dark">Address: {yelpRestaurant.location?.display_address.map(
                        (location, index) => <div className="ms-2" key={index
                            + "_location"}>{location}</div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        }
        <br/>
        <h5 className="text-primary">Reviews</h5>
        {restaurantInDetail && <ReviewAll restaurantInDB={restaurantInDetail}/>}
      </div>
  );
};
export default RestaurantInfo;