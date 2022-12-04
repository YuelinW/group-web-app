import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import {
  createReviewThunk,
  findReviewByRestaurantIDThunk
} from "../review/review-thunks";
import {Link} from "react-router-dom";
import FollowProfile from "../follow/follow-profile";
import {
  connectOwnerAndRestaurantThunk,
} from "../restaurant/restaurants-thunks";


const generateRating = (rating) => {
  let result = '';
  const singleStar = '<i class="bi bi-star-fill text-primary"></i>';
  for (let i = 0; i < rating; i++) {
    result = result + singleStar;
  }
  return result;
}

const ReviewAll = ({restaurantInDB}) => {
  const dispatch = useDispatch();
  // Review creating related
  let [writeReview, setWriteReview] = useState('');
  let [rating, setRating] = useState('5');
  const {currentUser} = useSelector(state => state.users);

  // Review listing related
  const {reviews, loading} = useSelector(state => state.reviews)
  useEffect(() => {dispatch(findReviewByRestaurantIDThunk(restaurantInDB._id))}, [restaurantInDB])

  const reviewClickHandler = () => {
    const newReview = {
      postedDate: new Date(),
      rating: rating,
      comment: writeReview,
      restaurantID: restaurantInDB._id,
      customerID: currentUser._id,
    }
    console.log(JSON.stringify(newReview))
    dispatch(createReviewThunk(newReview));
  }
  const profilePic = currentUser ? currentUser.profilePicture : 'https://user-images.githubusercontent.com/113388766/204669517-e093dbef-7812-4273-b5c4-028598111fd3.jpg';


  // Owner related
  const [showButton, setShowButton] = useState(currentUser && currentUser.role === "OWNER" && restaurantInDB.owners.indexOf(currentUser._id) === -1);
  const connectRestaurantAndOwnerHandler = (r) => {
    // If the logged-in user is an owner and the restaurant owners list doesn't contain this user, then display a button of "I am the owner"
    // If the user is already the owner, then for each review below, if the review's owner's reply is empty, then allow this use to reply
    const newOwnerList = [
      ...r.owners,
      currentUser._id
    ]
    const compoundObject = {
      owners: newOwnerList,
      rid: r._id
    };
    dispatch(connectOwnerAndRestaurantThunk(compoundObject))
    .then(() => setShowButton(false));
  }

  return (
      <>
        {/*I am the owner section*/}
        {
            showButton && currentUser && currentUser.role === "OWNER" && restaurantInDB.owners.indexOf(currentUser._id) === -1 &&
            <div>
              <button className="btn btn-success float-left mb-3" onClick={() => connectRestaurantAndOwnerHandler(restaurantInDB)}>I am the owner</button>
            </div>
        }
        {/*Create Review section*/}
        <h5 className="text-primary">Reviews</h5>
        <div className="row">
          <div className="col-auto">
            <img src={profilePic} alt="profile" width={60} height={60} className="wd-object-fit-cover-image"/>
          </div>
          <div className="col-10">
            <label htmlFor="range" className="form-label me-3">Your Rating from 1 to 5 ({rating})</label>
            <br/>
            <input type="range" min="1" max="5"
                   step="1" id="range" onChange={(event) => setRating(event.target.value)}/>
            <br/>
            <textarea value={writeReview} placeholder="Share your comment"
                      className="form-control border-0"
                      onChange={(event) => setWriteReview(event.target.value)}>
               </textarea>

            <div>
              {currentUser &&
                  <button
                      className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                      onClick={reviewClickHandler}>
                    Submit
                  </button>
              }
              {!currentUser &&
                  <Link
                      className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                      to="/login">
                    Submit
                  </Link>
              }
              <div className="text-primary fs-2">
                <i className="bi bi-card-image me-3"></i>
                <i className="bi bi-filetype-gif me-3"></i>
                <i className="bi bi-bar-chart me-3"></i>
                <i className="bi bi-emoji-smile me-3"></i>
                <i className="bi bi-geo-alt"></i>
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr/>
          </div>
        </div>

        {/*Below are review listing*/}
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
                  </li>
              )
          }
        </ul>
      </>
  );
};
export default ReviewAll;