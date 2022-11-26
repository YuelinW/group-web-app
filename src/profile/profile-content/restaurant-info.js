import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  findRestaurantByRestaurantID
} from "../../restaurant/restaurants-thunks";


const RestaurantInfo = ({restaurant}) => {
  // const {restaurants, loading} = useSelector(state => state.restaurants);
  // const dispatch = useDispatch();
  // useEffect(() => {dispatch(findRestaurantByRestaurantID(rid))}, []);
  console.log("This is the info page " + JSON.stringify(restaurant))
  return (
      <ul className="list-group">
        {/*{*/}
        {/*    loading &&*/}
        {/*    <li className="list-group-item">*/}
        {/*      Loading...*/}
        {/*    </li>*/}
        {/*}*/}
        {/*<li className="list-group-item">{JSON.stringify(restaurant)}</li>*/}
        <li>Restaurant Info starts here</li>
        <li>{restaurant.price}</li>
        <li>{restaurant.display_phone}</li>
        <li>{restaurant.owners[0]}</li>
        <li>Restaurant Info ends here</li>
      </ul>
  );
};
export default RestaurantInfo;