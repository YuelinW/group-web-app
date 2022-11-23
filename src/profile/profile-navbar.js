import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const ProfileNavbar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split("/");
  let active = '';
  if (paths.length < 3 || paths[2] === '') {
    active = 'home';
  } else {
    active = paths[2];
  }

  return (
      <div className="list-group">
        <Link to="/profile/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
          <i className="fas fa-home"></i>
          <span className="d-none d-xl-inline ms-2">Profile Overview</span>
        </Link>
        <Link to="/profile/review" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
          <i className="fas fa-hashtag"></i>
          <span className="d-none d-xl-inline ms-2">Reviews</span>
        </Link>
        <Link to="/profile/following" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
          <i className="fas fa-bell"></i>
          <span className="d-none d-xl-inline ms-2">Following</span>
        </Link>
        <Link to="/profile/followers" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
          <i className="fas fa-envelope"></i>
          <span className="d-none d-xl-inline ms-2">Followers</span>
        </Link>
        <Link to="/profile/friends" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
          <i className="fas fa-bookmark"></i>
          <span className="d-none d-xl-inline ms-2">Friends</span>
        </Link>
      </div>
  );
};
export default ProfileNavbar;