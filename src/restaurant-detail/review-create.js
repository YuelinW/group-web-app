import {createReviewThunk} from "../review/review-thunks";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

// for sure have an existing restaurant in DB after fully loaded
const ReviewCreate = ({restaurantInDB}) => {
  const dispatch = useDispatch();
  let [writeReview, setWriteReview] = useState('');
  let [rating, setRating] = useState('1');
  const {currentUser} = useSelector(state => state.users);

  const reviewClickHandler = () => {
    const newReview = {
      postedDate: new Date(),
      rating: rating,
      comment: writeReview,
      restaurantID: restaurantInDB._id,
      customerID: currentUser._id,
    }
    dispatch(createReviewThunk(newReview));
  }
  const profilePic = currentUser ? currentUser.profilePicture : 'https://user-images.githubusercontent.com/113388766/204669517-e093dbef-7812-4273-b5c4-028598111fd3.jpg';
  return(
      <>
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
      </>
  );
}
export default ReviewCreate;