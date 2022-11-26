import React from "react";


const customerList = [
  {_id: "customerlist1", icon: "bi bi-person-circle", label: "Basic Information", active: "basic"},
  {_id: "customerlist2", icon: "bi bi-activity", label: "Recent Activity", active: "activity"},
  {_id: "customerlist3", icon: "bi bi-r-square-fill", label: "Reviews", active: "review"},
  {_id: "customerlist4", icon: "bi bi-person-fill-check", label: "Following", active: "following"},
  {_id: "customerlist5", icon: "bi bi-person-fill-down", label: "Followers", active: "follower"},
  {_id: "customerlist6", icon: "bi bi-people-fill", label: "Friends", active: "friend"},
];

const ownerList = [
  {_id: "ownerlist6", icon: "bi bi-person-circle", label: "Basic Information", active: "basic"},
  {_id: "ownerlist2", icon: "bi bi-shop", label: "Restaurant List", active: "restaurant"},
  {_id: "ownerlist1", icon: "bi bi-house-add-fill", label: "Add Restaurant", active: "addRes"},
  {_id: "ownerlist3", icon: "bi bi-badge-ad-fill", label: "Advertisement List", active: "ad"},
  {_id: "ownerlist4", icon: "bi bi-file-earmark-plus-fill", label: "Post Advertisement", active: "post"},
  {_id: "ownerlist5", icon: "bi bi-people-fill", label: "Partners", active: "partner"},
];

const adminList = [
  {_id: "adminList1", icon: "bi bi-person-circle", label: "Basic Information", active: "basic"},
  {_id: "adminList2", icon: "bi bi-person-lines-fill", label: "User List", active: "userList"},
  {_id: "adminList3", icon: "bi bi-list-stars", label: "Restaurant List", active: "resList"},
];


const ProfileNavbar = ({role, setActiveComponent}) => {
  if (role === 'CUSTOMER') {
    return (
        <div className="col-2 col-md-2 col-lg-1 col-xl-3">
          <div className="btn-group-vertical w-100" role="group">
          {
            customerList.map((item, index) =>
              <React.Fragment key={item._id}>
                <input type="radio" className="btn-check btn-primary" name="profile-radio"
                       id={`radio-${item.active}`} defaultChecked={index === 0} autoComplete="off" onClick={() => setActiveComponent(item.active)}/>
                <label className="btn btn-outline-primary text-start fa-lg p-3" htmlFor={`radio-${item.active}`}><i className={`${item.icon} fa-lg pe-2`}></i><span className="d-none d-xl-inline">{item.label}</span></label>
              </React.Fragment>
            )
          }
          </div>
        </div>
    );
  } else if (role === 'ADMIN') {
    return (
        <div className="col-2 col-md-2 col-lg-1 col-xl-3">
          <div className="btn-group-vertical w-100" role="group">
            {
              adminList.map((item, index) =>
                  <React.Fragment key={item._id}>
                    <input type="radio" className="btn-check btn-primary" name="profile-radio"
                           id={`radio-${item.active}`} defaultChecked={index === 0} autoComplete="off" onClick={() => setActiveComponent(item.active)}/>
                    <label className="btn btn-outline-primary text-start fa-lg p-3" htmlFor={`radio-${item.active}`}><i className={`${item.icon} fa-lg pe-2`}></i><span className="d-none d-xl-inline">{item.label}</span></label>
                  </React.Fragment>
              )
            }
          </div>
        </div>
    );
  } else if (role === 'OWNER') {
    return (
        <div className="col-2 col-md-2 col-lg-1 col-xl-3">
          <div className="btn-group-vertical w-100" role="group">
            {
              ownerList.map((item, index) =>
                  <React.Fragment key={item._id}>
                    <input type="radio" className="btn-check btn-primary" name="profile-radio"
                           id={`radio-${item.active}`} defaultChecked={index === 0} autoComplete="off" onClick={() => setActiveComponent(item.active)}/>
                    <label className="btn btn-outline-primary text-start fa-lg p-3" htmlFor={`radio-${item.active}`}><i className={`${item.icon} fa-lg pe-2`}></i><span className="d-none d-xl-inline">{item.label}</span></label>
                  </React.Fragment>
              )
            }
          </div>
        </div>
    );
  } else {
    return (<></>);
  }
};
export default ProfileNavbar;