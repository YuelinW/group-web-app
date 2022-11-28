import {useDispatch} from "react-redux";
import {
  deleteAdvertisementByIDThunk,
  updateAdvertisementThunk
} from "./advertisements-thunks";

const AdItem = ({ad, owner}) => {
  const dispatch = useDispatch();

  const deleteAdHandler = (aid) => {
    dispatch(deleteAdvertisementByIDThunk(aid));
  };
  const updateAdHandler = (content) => {
    const newAd = {
      ...ad,
      postedDate: new Date(),
      content: content
    }
    dispatch(updateAdvertisementThunk(newAd));
  };
  return (
      <li className="list-group-item wd-post">
        <div className="row mb-2">
          <div className="col-auto">
            <img src={owner.profilePicture} width={45} height={45} className="rounded-circle" alt={owner.profilePicture}/>
          </div>
          <div className="col-10 pe-0">
            <i className="bi bi-x-lg float-end wd-clickable"
               onClick={() => deleteAdHandler(ad._id)}></i>
            <button className="float-end me-3">Edit Content</button>
            <span className="fw-bold text-primary">{owner.username}</span>
            <i className="bi bi-patch-check-fill ms-1 me-1"></i>
            <span className="text-info">{ad.restauranID} · {ad.postedDate.substring(0, 10)}</span>
            <h3 className="pt-3">{ad.title}</h3>
            <h6>{ad.content}</h6>
            <img src={ad.poster} alt={ad.postedDate} className="w-100"/>
          </div>
        </div>
      </li>
  );
};
export default AdItem;