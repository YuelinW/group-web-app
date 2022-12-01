import React from "react";
import {findReviewByRestaurantID} from "../review/review-thunks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ReviewCreate from "./review-create";
import FollowProfile from "../follow/follow-profile";
import {useParams} from "react-router";
import {findRestaurantByYelpId} from "../restaurant/restaurants-thunks";

const generateRating = (rating) => {
  let result = '';
  const singleStar = '<i class="bi bi-star-fill text-primary"></i>';
  for (let i = 0; i < rating; i++) {
    result = result + singleStar;
  }
  return result;
}

const ReviewComponent = () => {
  const {yid} = useParams();
  // let params = (new URL(document.location)).searchParams;
  // let inputId = params.get("id");
  const {reviews, loading} = useSelector(state => state.reviews)
  const dispatch = useDispatch();
  const {restaurants} = useSelector(
      state => state.restaurants)
  const restaurantId = restaurants._id
  useEffect(() => {dispatch(findRestaurantByYelpId(yid))}, [yid])
  useEffect(() => {dispatch(findReviewByRestaurantID(restaurantId))}, [restaurantId])

  console.log(reviews)
  return(
      <ul className="list-group">
        {
          loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          reviews && reviews.map(review =>
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
            </li>
            )
        }
      </ul>
  );
};
export default ReviewComponent;