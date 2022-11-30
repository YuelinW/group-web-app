import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
  findAllAdvertisementsByOwnerIDThunk
} from "../../advertisement/advertisements-thunks";
import AdItem from "../../advertisement/ad-item";

const AdvertisementList = ({profile}) => {
  const {adsOfOwner, loading} = useSelector(state => state.advertisements);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllAdvertisementsByOwnerIDThunk(profile._id))}, [profile]);
  return (
      <div className="ms-1 me-1">
        <h3 className="text-info">Advertisements I Posted</h3>
        <ul className="list-group">
          {
              loading &&
              <div className="list-group-item">
                Loading...
              </div>
          }
          {adsOfOwner.length === 0 && !loading && <>This owner doesn't have any advertisements.</>}
          {
              adsOfOwner && adsOfOwner.length > 0 && adsOfOwner.map(ad => <AdItem key={ad._id} ad={ad} owner={profile}/>)
          }
        </ul>
      </div>
  );
};
export default AdvertisementList;