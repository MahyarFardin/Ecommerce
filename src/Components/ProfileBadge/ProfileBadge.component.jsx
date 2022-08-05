import React from "react";
import { BiUserCircle } from "react-icons/bi";
import "./ProfileBadge.style.css";

function ProfileBadge() {
    return (
        <div className="p-badge">
            <BiUserCircle size={35} color={"#5F5449"} />
        </div>
    );
}

export default ProfileBadge;
