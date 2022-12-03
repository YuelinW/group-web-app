import React from "react";
import {
  findReviewByRestaurantIDThunk
} from "../review/review-thunks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import FollowProfile from "../follow/follow-profile";
import {useParams} from "react-router";
import {findRestaurantByYelpIdThunk} from "../restaurant/restaurants-thunks";
import {Link} from "react-router-dom";

const generateRating = (rating) => {
  let result = '';
  const singleStar = '<i class="bi bi-star-fill text-primary"></i>';
  for (let i = 0; i < rating; i++) {
    result = result + singleStar;
  }
  return result;
}

const ReviewComponent = ({restaurantInDB}) => { // can be seen by both logged-in user and anonymous users
  const {reviews, loading} = useSelector(state => state.reviews)
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findReviewByRestaurantIDThunk(restaurantInDB._id))}, [restaurantInDB])
  const {currentUser} = useSelector(state => state.users);

  const connectRestaurantAndOwnerHandler = (rid, uid) => {

  }

  return(
      <ul className="list-group">
        {
          loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {reviews && reviews.length === 0 && <>No reviews yet.</>}
        {
          reviews && reviews.length > 0 && reviews.map(review =>
            <li key={review._id} className="list-group-item">
              <div>
                <FollowProfile profile_ID={review.customerID}/>
              </div>
              <div>Rating:
                <span dangerouslySetInnerHTML={{__html: generateRating(review.rating)}} className="ps-2"></span>
                <span className="ms-4">Posted on: {review.postedDate.substring(0, 10)}</span>
              </div>
              <div className="text-dark">{review.comment}</div>
              {review.ownerReply && <div className="text-secondary ms-3 p-1 border-start"><span>Owner's reply:</span> {review.ownerReply}</div>}
              {
                  currentUser && currentUser.role === "OWNER" && restaurantInDB.owners.findIndex(currentUser._id) == -1 &&
                  <div>
                    <button className="btn btn-success float-end" onClick={() => connectRestaurantAndOwnerHandler(restaurantInDB._id, currentUser._id)}>I am the owner</button>
                    {/*<Link to={`/review/${review._id}`} placeholder="I'm the owner" className="btn btn-primary"/>*/}
                  </div>
              }
            </li>
            )
        }
      </ul>
  );
};
export default ReviewComponent;