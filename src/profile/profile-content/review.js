import React, {useEffect, useState} from "react";
import * as service from "../../review/review-service";
import ReviewItem from "./review-item";

// reviews of a certain user
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
          {reviews && reviews.length === 0 && <>This user doesn't have any recent activities.</>}
          {
              reviews && reviews.length > 0 && reviews.map(review => <ReviewItem review={review} allowDelete={false} key={review._id}/>             )
          }
        </div>
      </div>
  );
};
export default Reviews;