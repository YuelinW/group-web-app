import {createReviewThunk} from "../review/review-thunks";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
// import NotLoggedIn from "../profile/not-logged-in";
import {useEffect} from "react";
import {
  findRestaurantByYelpId
} from "../restaurant/restaurants-thunks";
import ReviewComponent from "./review-component";
const ReviewCreate = () => {
  const {yid} = useParams();
  let [writeReview, setWriteReview] = useState('');
  let [rating, setRating] = useState('');
  const {singleRestaurant, loading} = useSelector(
      state => state.restaurantData)
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findRestaurantByYelpId(yid))}, [yid])
  const {currentUser} = useSelector(state => state.users);
  const profile = useSelector(state => state.users.currentUser);
  const isLoggedIn = (currentUser != null && currentUser._id === profile._id);

  const reviewClickHandler = () => {
    const restaurant = singleRestaurant.at(0)
    console.log(restaurant)
    const newReview = {
      postedDate: Date.now(),
      rating: rating,
      comment: writeReview,
      restaurantID: restaurant._id,
      customerID: isLoggedIn ? currentUser._id : '',
    }
    dispatch(createReviewThunk(newReview));
  }
  console.log("review")
  console.log(singleRestaurant)
  const profilePic = isLoggedIn ? currentUser.profilePicture: 'https://user-images.githubusercontent.com/113388766/204669517-e093dbef-7812-4273-b5c4-028598111fd3.jpg';
  return(

      <>
        {/*<div>Is the user logged in?</div>*/}
        {/*<div><input type="radio" className="form-check-input me-1" name="isUser" id="isUser" defaultChecked onClick={() => setIsLoggedIn(true)}/><label htmlFor="isUser">Yes</label></div>*/}
        {/*<div><input type="radio" className="form-check-input me-1" name="isUser" id="isNotUser" onClick={() => setIsLoggedIn(false)}/><label htmlFor="isNotUser">No</label></div>*/}
        {
          <div className="row">
            <div className="col-auto">
              <img src={profilePic} alt="profile" width={60}/>
            </div>
            <div className="col-10">
              <label htmlFor="customRange3" className="form-label me-3">Rating({rating})</label>
              <br/>
              <input type="range" min="0" max="5"
                     step="1" id="customRange3" onChange={(event) => setRating(event.target.value)}/>
              <br/>
              <textarea value={writeReview} placeholder="What's your comment"
                        className="form-control border-0"
                        onChange={(event) => setWriteReview(event.target.value)}>
               </textarea>

              <div>
                {isLoggedIn &&
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={reviewClickHandler}>
                      Submit
                    </button>
                }
                {!isLoggedIn &&
                    <Link
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        to="/login">
                      Submit
                    </Link>
                }
                <div className="text-primary fs-2">
                  <i className="bi bi-card-image me-3"></i>
                  <i className="bi bi-filetype-gif me-3"></i>
                  <i className="bi bi-bar-chart me-3"></i>
                  <i className="bi bi-emoji-smile me-3"></i>
                  <i className="bi bi-geo-alt"></i>
                </div>
              </div>
            </div>
            <div className="col-12">
              <hr/>
            </div>
          </div>
        }
      </>
  );
}
export default ReviewCreate;