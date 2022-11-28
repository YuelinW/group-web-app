import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  findAllAdvertisementsByOwnerIDThunk
} from "../../advertisement/advertisements-thunks";
import AdItem from "../../advertisement/ad-item";

const AdvertisementList = ({profile}) => {
  const {adsOfOwner, loading} = useSelector(state => state.advertisements);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllAdvertisementsByOwnerIDThunk(profile._id))}, [profile]);
  return (
      <ul className="list-group">
        {
            loading &&
            <div className="list-group-item">
              Loading...
            </div>
        }
        {
          adsOfOwner.map(ad => <AdItem key={ad._id} ad={ad} owner={profile}/>)
        }
      </ul>
  );
};
export default AdvertisementList;