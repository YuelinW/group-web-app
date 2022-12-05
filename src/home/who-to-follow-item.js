import React, {useEffect, useState}  from "react";
import {Link} from "react-router-dom";
import * as service from "../profile/profile-service/profile-service";
import {useDispatch, useSelector} from "react-redux";
import {createFollowThunk} from "../follow/follow-thunks";

const WhoToFollowItem = ({who}) => {
  const {currentUser} = useSelector((state) => state.users)
  const [profile, setProfile] = useState([]);
  const dispatch = useDispatch()
  const handleFollowBtn = () => {
    const followerId = currentUser._id
    const leaderId = who._id
    dispatch(createFollowThunk({followerId, leaderId}))
  }
  useEffect(() => {
    service.findProfileByProfileID(who._id)
    .then(res => setProfile(res))
    .catch(() => setProfile(null))
  }, []);


  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <Link to={`/profile/${who._id}`}><img alt="" className="rounded-circle" height={48} width={48} src={who.profilePicture}/></Link>
          </div>
          <div className="col-8">
            <Link to={`/profile/${who._id}`}><div className="fw-bold ms-2">{who.username}</div></Link>
          </div>
          <div className="col-2">
            <button className="btn btn-outline-primary rounded-pill float-end"
                    onClick={(handleFollowBtn)}>Follow</button>
          </div>
        </div>
      </li>
  );
};

export default WhoToFollowItem;