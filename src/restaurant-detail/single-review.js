import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {
  findReviewByIDThunk,
  updateReviewOwnerReplyThunk
} from "../review/review-thunks";
import {Link} from "react-router-dom";

const SingleReview = () =>{
  const {reviewid} = useParams();
  const {signleReview, loading} = useSelector(state => state.reviewData);
  const [ownerReply, setOwnerReply] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findReviewByIDThunk(reviewid))}, [reviewid])
  const replyClickHandler = () => {
    const newReview = {
      rating: signleReview.rating,
      comment:signleReview.comment,
      postedDate: signleReview.postedDate,
      restaurantID: signleReview.restaurantID,
      customerID : signleReview.customerID,
      _id: signleReview._id,
      ownerReply: ownerReply
    }
    dispatch(updateReviewOwnerReplyThunk(newReview));
  }
  console.log("review")
  console.log(signleReview)
  return(
      <>
        <div className="mb-3">
        <input placeholder="Enter your reply"
               onChange={(event) => setOwnerReply(event.target.value)}
        />
        </div>
       <div>
          <button
              onClick={replyClickHandler}
              className="btn btn-primary">Reply</button>
       </div>
      </>

  );
};
export default SingleReview;