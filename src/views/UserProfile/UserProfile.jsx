import React from "react";
import "./UserProfile.scss";
import Avatar from "react-avatar";
export default function UserProfile() {
  return (
    <div className="container-fluid user-profile-wrapper">
      <div className="col-3 bg-danger info-wrapper">
        <div>
          <Avatar name="User Name" />
        </div>
      </div>
    </div>
  );
}
