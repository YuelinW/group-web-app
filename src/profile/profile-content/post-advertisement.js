import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  createAdvertisementThunk
} from "../../advertisement/advertisements-thunks";
import {
  findRestaurantsByOwnerIDThunk
} from "../../restaurant/restaurants-thunks";
import {Link} from "react-router-dom";

const PostAdvertisement = ({profile}) => {
  const {currentUser} = useSelector(state => state.users);
  const dispatch = useDispatch();
  const {restaurants, loading} = useSelector(state => state.restaurants);
  useEffect(() => {dispatch(findRestaurantsByOwnerIDThunk(profile._id))}, [profile]);

  const [inEdit, setInEdit] = useState(false);
  const [adTitle, setAdTitle] = useState('');
  const [adContent, setAdContent] = useState('');
  const [posterLink, setPosterLink] = useState('');
  const [activeRestaurantID, setActiveRestaurantID] = useState('');
  const adCreationHandler = () => {
    const newAd = {
      restaurantID: activeRestaurantID,
      ownerID: profile._id,
      title: adTitle,
      content: adContent,
      poster: posterLink,
    }
    dispatch(createAdvertisementThunk(newAd));
  }

  const isLoggedInAndIsOwner = (currentUser && currentUser._id === profile._id
      && currentUser.role === 'OWNER');
  return (
      <>
      {!isLoggedInAndIsOwner &&
        <h4 className="text-info">This content is only viewable by the account owner. Please log in to see details of your profile.</h4>
      }
      {
        isLoggedInAndIsOwner && <div className="ms-3 me-5">
          <h3 className="text-info">Post Advertisement</h3>
            {inEdit && <div className="p-4">
              <h4 className="text-secondary"><i
                  className="bi bi-file-post-fill me-2"></i>Create a new advertisement</h4>
              <label className="text-primary fw-bold">Title: </label><div><textarea value={adTitle} placeholder="Enter the title..." onChange={(e) => setAdTitle(e.target.value)} className="w-100"></textarea></div>
              <label className="text-primary fw-bold">Content: </label><div><textarea value={adContent} placeholder="Enter the content..." onChange={(e) => setAdContent(e.target.value)} className="w-100"></textarea></div>
              <label className="text-primary fw-bold">Poster Link: </label><div><textarea value={posterLink} placeholder="Enter the link to the poster" onChange={(e) => setPosterLink(e.target.value)} className="w-100"></textarea></div>
              <button className="mt-2 me-2 btn btn-success" onClick={() => {adCreationHandler(); setInEdit(false);}}>Post</button>
              <button className="mt-2 btn btn-light" onClick={() => {setAdTitle(''); setAdContent(''); setPosterLink(''); setActiveRestaurantID(''); setInEdit(false);}}>Cancel</button>
            </div>}

            <div className="list-group list-group-flush">
            {loading &&
                <div className="list-group-item">
                  Loading...
                </div>}
            {restaurants.length === 0 && !loading && <>This owner doesn't have any restaurants.</>}
            {
                restaurants && restaurants.length > 0 && restaurants.map(restaurant =>
                    <div className="card w-100 m-2" key={restaurant._id}>
                      <div className="card-body">
                        <button className="btn btn-info mb-4 w-100 rounded-pill" onClick={() => {
                          setInEdit(true);
                          setActiveRestaurantID(restaurant._id);
                        }}>Create advertisement for this restaurant</button>
                        <h5 className="card-title text-primary">{restaurant.name}</h5>
                        <p className="card-text text-dark mb-0">Phone: {restaurant.display_phone} | Category: {restaurant.category}</p>
                        <p className="card-text"><Link to={`/details/${restaurant.yelpID}`}>Details</Link></p>
                      </div>
                    </div>
                )
            }
          </div>
        </div>
      }
      </>
  );
};
export default PostAdvertisement;