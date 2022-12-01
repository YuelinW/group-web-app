import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {findRestaurantByYelpId} from "../restaurant/restaurants-thunks";
const NotInDB = () => {
  const {yid} = useParams();
  // let params = (new URL(document.location)).searchParams;
  // let inputId = params.get("id");
  const {restaurants, loading} = useSelector(
      state => state.restaurants)
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findRestaurantByYelpId(yid))}, [yid])
  return(
      <ul>
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          {restaurants}.length
        }
      </ul>

  )
};
export default NotInDB;