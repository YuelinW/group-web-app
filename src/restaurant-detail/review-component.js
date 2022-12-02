import React from "react";
import {
  findReviewByRestaurantID,
  updateReviewOwnerReply, updateReviewOwnerReplyThunk
} from "../review/review-thunks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ReviewCreate from "./review-create";
import FollowProfile from "../follow/follow-profile";
import {useParams} from "react-router";
import {findRestaurantByYelpId} from "../restaurant/restaurants-thunks";
import {Link} from "react-router-dom";

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
  const {singleRestaurant, loading2} = useSelector(
      state => state.restaurantData)
  const restaurantId = singleRestaurant?.at(0)._id
  useEffect(() => {dispatch(findRestaurantByYelpId(yid))}, [yid])
  useEffect(() => {dispatch(findReviewByRestaurantID(restaurantId))}, [restaurantId])
  const {currentUser} = useSelector(state => state.users);
  console.log("hhh")
  console.log(singleRestaurant)
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
              {
                  currentUser && currentUser.role === "OWNER" &&
                  <div>
                  <Link to={`/review/${review._id}`} placeholder="I'm the owner" className="btn btn-primary"/>
                  </div>
              }
            </li>
            )
        }
        {/*{*/}
        {/*  currentUser && currentUser.role === "OWNER" &&*/}
        {/*    reviews && reviews.map(review =>*/}
        {/*        <li key={review._id} className="list-group-item">*/}
        {/*          <input placeholder="I'm the owner"/>*/}
        {/*        </li>*/}
        {/*    )*/}

        {/*}*/}
      </ul>
  );
};
export default ReviewComponent;