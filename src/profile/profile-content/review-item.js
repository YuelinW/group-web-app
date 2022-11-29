import RestaurantInfo from "./restaurant-info";
import React from "react";
import FollowProfile from "../../follow/follow-profile";
import {useDispatch} from "react-redux";
import {deleteReviewByIDThunk} from "../../review/review-thunks";


const generateRating = (rating) => {
  let result = '';
  const singleStar = '<i class="bi bi-star-fill text-primary"></i>';
  for (let i = 0; i < rating; i++) {
    result = result + singleStar;
  }
  return result;
}

const ReviewItem = ({review, allowDelete}) => {
  const dispatch = useDispatch();
  const deleteReviewHandler = (review) => {
    dispatch(deleteReviewByIDThunk(review));
  };

  return (
      <div key={review._id} className="list-group-item">
        <div>
          {allowDelete && <button className="btn btn-danger float-end" onClick={() => deleteReviewHandler(review)}>Delete</button>}
          <FollowProfile profile_ID={review.customerID}/>
        </div>
        <div>Rating:
          <span dangerouslySetInnerHTML={{__html: generateRating(review.rating)}} className="ps-2"></span>
          <span className="ms-4">Posted on: {review.postedDate.substring(0, 10)}</span>
        </div>
        <div><RestaurantInfo restaurantID={review.restaurantID}/></div>
        <div className="text-dark">{review.comment}</div>
        {review.ownerReply && <div className="text-secondary ms-3 p-1 border-start"><span>Owner's reply:</span> {review.ownerReply}</div>}
      </div>)
};
export default ReviewItem;