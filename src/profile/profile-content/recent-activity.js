import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findActivityByCustomerIDThunk} from "../profile-service/activity-thunk";
import RestaurantInfo from "./restaurant-info";
import {
  findRestaurantByRestaurantID
} from "../../restaurant/restaurants-thunks";

const RecentActivity = ({profile}) => {
  // const {activity, loading} = useSelector(state => state.userActivity);
  const dispatch = useDispatch();
  // useEffect(() => {dispatch(findActivityByCustomerIDThunk(profile._id))}, []); // do the search in initial render
  const activity = [
    {
      rating: 4,
      comment: "This is my first time been there. I love the chicken soup!!",
      postedDate: "1/2/2022",
      restaurantID: "63819f70e61fadd4540f63af",
      customerID: "63814758e61fadd4540f639b"
    }
  ];
  const review = activity[0]
  const {singleRestaurant, loading} = useSelector(state => state.restaurantsData);
  useEffect(() => {dispatch(findRestaurantByRestaurantID(activity[0].restaurantID))}, []);

  console.log("This is rest: " + JSON.stringify(singleRestaurant))
  console.log("This is loading: " + loading);

  return (
      <div className="ms-3">
        <h3 className="text-info">Recent Activity</h3>
        <ul className="list-group list-group-flush">
          {loading &&
          <li className="list-group-item">
            Loading...
          </li>}
          {
              // activity && activity.map(review =>
              <li key={review._id} className="list-group-item">
                <ul>
                  <li>{profile.username}</li>
                  <li>{review.rating}</li>
                  {/*<li><RestaurantInfo restaurant={singleRestaurant}/></li>*/}
                  {review.ownerReply && <li>{review.ownerReply}</li>}
                  <li>{review.postedDate}</li>
                </ul>
              </li>
            // )
          }
        </ul>
      </div>
  );
};
export default RecentActivity;