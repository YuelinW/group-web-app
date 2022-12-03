import {useParams} from "react-router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  createRestaurantThunk,
  findRestaurantByYelpIdThunk, findRestaurantFromYelpByYelpIDThunk
} from "../restaurant/restaurants-thunks";

const DetailReview = () => {
  const {yid} = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(findRestaurantByYelpIdThunk(yid)), [yid]); // check if there is a restaurant in our db
  const {restaurantInDetail, loading} = useSelector(state => state.restaurants); // from our DB
  const {yelpRestaurant, retrieveLoading} = useSelector(state => state.restaurants); // from YelpAPI
  if (!loading) { // only do this check when not loading
    if (restaurantInDetail) { // already in database
      // display review info
    } else { // not in our database
      dispatch(findRestaurantFromYelpByYelpIDThunk(yid)) // retrieve this info
      if (!retrieveLoading && !yelpRestaurant) { // create when the detailed page is loaded
        const newRestaurant = {
          name: yelpRestaurant.name,
          image_url: yelpRestaurant.image_url,
          category: yelpRestaurant.categories[0].title,
          url: yelpRestaurant.url,
          price: yelpRestaurant.price,
          diaplay_phone: yelpRestaurant.display_phone,
          owners: [],
          reviews: [],
          yelpID: yelpRestaurant.id,
        }
        dispatch(createRestaurantThunk(newRestaurant))
      }


    }
  }


  // if the restaurant exists, show the current reviews and a review button
  // if the restaurant doesn't exist, only show the review button
  // when the review button is clicked, the handler will do two things (add review to db && create restaurant if needed)
  // check if the restaurant exists, if so, only add the reivew to db
  // If not, create the restaurant first to db, then add the review to db.
  return (
    <>
    </>
  )
};
export default DetailReview;