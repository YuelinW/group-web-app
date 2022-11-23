import {useLocation} from "react-router";
import PrivateProfile from "../private-profile";

const BasicInfo = ({profile}) => {
  const {pathname} = useLocation();
  const paths = pathname.split("/");
  const isLoggedIn = paths.length === 2; // if == 3, then it is ["", "profile", "uid"] and we should not show update button

  return (
      <>
        {isLoggedIn && <PrivateProfile profile={profile}/>}
        {!isLoggedIn &&
            <h4>This content is only viewable for the user. Please log in to see details of your profile.</h4>
        }
      </>
  );
};
export default BasicInfo;