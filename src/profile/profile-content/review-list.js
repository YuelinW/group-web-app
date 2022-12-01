import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findAllReviewsThunk} from "../../review/review-thunks";
import ReviewItem from "./review-item";


// only viewed by admin users
const ReviewList = ({profile}) => {
  const {reviews, loading} = useSelector(state => state.reviews);

  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.users);
  const isLoggedInAndIsAdmin = (currentUser && currentUser._id === profile._id
      && currentUser.role === 'ADMIN'); // only owner of the Ads can edit it
  useEffect(() => {dispatch(findAllReviewsThunk())}, [profile]);

  return (
      <>
        {
            !isLoggedInAndIsAdmin && <h4 className="text-info">This content is only viewable by the account owner. Please log in to see details of your profile.</h4>
        }
        {
            isLoggedInAndIsAdmin &&
            <div className="ms-3">
              <h3 className="text-info">Reviews</h3>
              {loading &&
                  <div className="list-group-item">
                    Loading...
                  </div>}
              <div className="list-group list-group-flush">
                {!reviews || reviews.length === 0 && <>There are 0 reviews.</>}
                {
                    reviews && reviews.length > 0 && reviews.map(review =>
                        <ReviewItem review={review} key={review._id}
                                    allowDelete={true}/>
                    )
                }
              </div>
            </div>
        }
      </>
  );
};
export default ReviewList;