import React from "react";
import "./index.css";

const AdvertisementPostItem = ({ad}) => {
  return (
      <div className="wd-ad-post">
        <div className="m-3">
          <h4 className="text-primary fw-bold">{ad.title}</h4>
          <p>{ad.content}</p>
          <img src={ad.poster} alt={ad.postedDate} className="w-100"/>
        </div>
      </div>
  );
};
export default AdvertisementPostItem;