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

const RecentActivity = ({profile}) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    service.findAllReviewsByUserID(profile._id)
    .then(res => {setReviews(res); console.log(res); return res;})
    .catch(() => setReviews(null))
  }, []);

  return (
      <div className="ms-3">
        <h3 className="text-info">Recent Activity</h3>
      </div>
  );
};
export default RecentActivity;