import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { seletUser } from "./features/userSlice";
import { useSelector } from "react-redux";

export const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(seletUser);
  return (
    <div onClick={onClick} className="header-option">
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && (
        <Avatar className="headerOption-icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
};
