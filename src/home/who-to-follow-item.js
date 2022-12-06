import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createFollowThunk} from "../follow/follow-thunks";
import {
  increaseUserFollowerCountByUserIDThunk,
  increaseUserFollowingCountByUserIDThunk
} from "../users/users-thunks";

const WhoToFollowItem = ({who}) => {
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [disable, setDisable] = useState(false);
  const handleFollowBtn = () => {
    const followerID = currentUser._id
    const leaderID = who._id
    dispatch(createFollowThunk({followerID, leaderID}))
    dispatch(increaseUserFollowerCountByUserIDThunk(leaderID))
    dispatch(increaseUserFollowingCountByUserIDThunk(followerID))
    setDisable(true)
  }

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2 d-none d-xl-block align-items-center">
            <Link to={`/profile/${who._id}`}><img alt="" className="rounded-circle" height={48} width={48} src={who.profilePicture}/></Link>
          </div>
          <div className="col-9 col-xl-8 d-flex justify-content-left align-items-center">
            <Link to={`/profile/${who._id}`}><div className="fw-bold ms-2">{who.username}</div></Link>
          </div>
          {disable &&
              <div className="col-3 col-xl-2 d-flex justify-content-end align-items-center">
                <button className="btn btn-outline-primary disabled rounded-pill float-end"
                        onClick={(handleFollowBtn)}>Followed</button>
              </div>
          }
          {!disable &&
              <div className="col-3 col-xl-2 d-flex justify-content-end align-items-center">
                <button className="btn btn-outline-primary rounded-pill float-end"
                        onClick={(handleFollowBtn)}>Follow</button>
              </div>
          }
        </div>
      </li>
  );
};

export default WhoToFollowItem;