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
          <i className="bi bi-person-circle fa-lg"></i>
          <span className="d-none d-xl-inline ms-2">Profile Overview</span>
        </Link>
        <Link to="/profile/activity" className={`list-group-item ${active === 'activity' ? 'active' : ''}`}>
          <i className="bi bi-activity fa-lg"></i>
          <span className="d-none d-xl-inline ms-2">Activities</span>
        </Link>
        <Link to="/profile/review" className={`list-group-item ${active === 'review' ? 'active' : ''}`}>
          <i className="bi bi-r-square-fill fa-lg"></i>
          <span className="d-none d-xl-inline ms-2">Reviews</span>
        </Link>
        <Link to="/profile/following" className={`list-group-item ${active === 'following' ? 'active' : ''}`}>
          <i className="bi bi-person-fill-check fa-lg"></i>
          <span className="d-none d-xl-inline ms-2">Following</span>
        </Link>
        <Link to="/profile/follower" className={`list-group-item ${active === 'follower' ? 'active' : ''}`}>
          <i className="bi bi-person-fill-down fa-lg"></i>
          <span className="d-none d-xl-inline ms-2">Followers</span>
        </Link>
        <Link to="/profile/friend" className={`list-group-item ${active === 'friend' ? 'active' : ''}`}>
          <i className="bi bi-people-fill fa-lg"></i>
          <span className="d-none d-xl-inline ms-2">Friends</span>
        </Link>
      </div>
  );
};
export default ProfileNavbar;