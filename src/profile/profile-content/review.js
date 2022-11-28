import React, {useEffect, useState} from "react";
import RestaurantInfo from "./restaurant-info";
import * as service from "../../review/review-service";

const generateRating = (rating) => {
  let result = '';
  const singleStar = '<i class="bi bi-star-fill text-primary"></i>';
  for (let i = 0; i < rating; i++) {
    result = result + singleStar;
  }
  return result;
}

const Reviews = ({profile}) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    service.findAllReviewsByUserID(profile._id)
    .then(res => setReviews(res))
    .catch(() => setReviews(null))
  }, [profile]);

  return (
      <div className="ms-3">
        <h3 className="text-info">Reviews</h3>
        <div className="list-group list-group-flush">
          {reviews.length === 0 && <>This user doesn't have any recent activities.</>}
          {
              reviews && reviews.length > 0 && reviews.map(review =>
              {
                  return (
                  <div key={review._id} className="list-group-item">
                    <div><img src={profile.profilePicture} height={20} width={20} className="rounded-circle me-2"/>{profile.username}</div>
                    <div>Rating:
                      <span dangerouslySetInnerHTML={{__html: generateRating(review.rating)}} className="ps-2"></span>
                      <span className="ms-4">Posted on: {review.postedDate.substring(0, 10)}</span>
                    </div>
                    <div><RestaurantInfo restaurantID={review.restaurantID}/></div>
                    <div className="text-dark">{review.comment}</div>
                    {review.ownerReply && <div className="text-secondary ms-3 p-1 border-start"><span>Owner's reply:</span> {review.ownerReply}</div>}
                  </div>)
              }
              )
          }
        </div>
      </div>
  );
};
export default Reviews;