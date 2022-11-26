import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const ProfileOther = () => {
  // doesn't care of logged in or not. Can always display public info
  const {pathname} = useLocation();
  const paths = pathname.split("/"); // ["", "profile", "uid"]
  const {otherProfile, loading} = useSelector(state => state.otherProfile);
  // useEffect(() => dispatch(findProfileByID(paths[2])), []); // TODO: update to use server and db

  return (
      <>
        <h1>{otherProfile.username}</h1>
      </>
  );
};
export default ProfileOther;