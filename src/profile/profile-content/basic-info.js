import PrivateProfile from "../private-profile";
import {useSelector} from "react-redux";

const BasicInfo = ({profile}) => {
  const {currentUser} = useSelector(state => state.users);
  const isAccountOwner = (currentUser != null && currentUser._id === profile._id);

  return (
      <>
        {isAccountOwner && <PrivateProfile profile={profile}/>}
        {!isAccountOwner &&
            <h4 className="text-info">This content is only viewable by the account owner. Please log in to see details of your profile.</h4>
        }
      </>
  );
};
export default BasicInfo;