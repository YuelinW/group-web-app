import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import AdvertisementPostItem from "./advertisement-post-item";
import {
  findAllAdvertisementsThunk
} from "../advertisement/advertisements-thunks";

const AdvertisementPostsList = () => {
  const {allAds, loading} = useSelector(
      state => state.advertisements)
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllAdvertisementsThunk())}, []);
  const adsRender = [];
  for (let i = 0; i < allAds.length; i += 3) {
    adsRender.push(
        <div className="d-flex justify-content-between" key={i}>
          {
            allAds.slice(i, i + 3)
            .map(ad =>
                <AdvertisementPostItem
                    key={ad._id}
                    ad={ad}/>)
          }
        </div>
    );
  }
  return (
      <div>
        <ul className="list-group mt-2">
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          <div>
            {adsRender}
          </div>
        </ul>
      </div>
  );
};

export default AdvertisementPostsList;