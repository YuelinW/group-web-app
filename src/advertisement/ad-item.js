import {useDispatch} from "react-redux";
import {
  deleteAdvertisementByIDThunk,
  updateAdvertisementThunk
} from "./advertisements-thunks";
import {useState} from "react";
import RestaurantName from "./restaurant-name";

const AdItem = ({ad, owner}) => {
  const [adContent, setAdContent] = useState(ad.content);
  const [contentInEdit, setContentInEdit] = useState(false);
  const dispatch = useDispatch();

  // const {currentUser} = useSelector(state => state.users); // todo: uncomment
  const currentUser = {...owner}; // todo: delete
  const isLoggedInAndIsOwner = (currentUser._id === owner._id
      && currentUser.role === 'OWNER'); // only owner of the Ads can edit it

  const deleteAdHandler = (aid) => {
    dispatch(deleteAdvertisementByIDThunk(aid));
  };
  const updateAdHandler = () => {
    const newAd = {
      ...ad,
      content: adContent
    }
    dispatch(updateAdvertisementThunk(newAd));
  };
  return (
      <li className="list-group-item wd-post">
        <div className="row mb-2">
          <div className="col-auto">
            <img src={owner.profilePicture} width={45} height={45} className="rounded-circle" alt={owner.profilePicture}/>
          </div>
          <div className="col-10 ps-0 pe-0">
            {
              isLoggedInAndIsOwner && <i className="bi bi-x-lg float-end wd-clickable"
                                         onClick={() => deleteAdHandler(ad._id)}></i>
            }
            {
                isLoggedInAndIsOwner && !contentInEdit && <button className="float-end me-3 btn btn-dark" onClick={() => setContentInEdit(true)}>Edit Content</button>
            }
            {
              contentInEdit && <div className="">
                  <div>
                    <p>Only advertisement content can be changed. Title and poster cannot be changed.</p>
                    <textarea className="w-100" value={adContent} onChange={(e) => setAdContent(e.target.value)}></textarea>
                  </div>
                  <button className="btn btn-success mb-3" onClick={() => {updateAdHandler(); setContentInEdit(false)}}>Finish</button>
                  <button className="btn btn-light ms-2 mb-3" onClick={() => {setContentInEdit(false); setAdContent(ad.content)}}>Cancel</button>
                </div>
            }
            <span className="fw-bold text-primary">{owner.username}</span>
            <i className="bi bi-patch-check-fill ms-1 me-1"></i>
            <span className="text-info"> · {ad.postedDate.substring(0, 10)}</span>
            <RestaurantName rid={ad.restaurantID}/>
            <h4>{ad.title}</h4>
            <h6>{ad.content}</h6>
            <img src={ad.poster} alt={ad.postedDate} className="w-100"/>
          </div>
        </div>
      </li>
  );
};
export default AdItem;