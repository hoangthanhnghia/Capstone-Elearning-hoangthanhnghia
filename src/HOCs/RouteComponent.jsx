import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RouteComponent = ({
  isAdmin,
  isAuth,
  isLogin,
  Component,
  redirectPath,
}) => {
  const { user } = useSelector((state) => state.auth);
  const admin =
    JSON.parse(localStorage.getItem("USER_LOGIN"))?.maLoaiNguoiDung === "GV";

  if (isAdmin) {
    return admin ? (
      <Component></Component>
    ) : (
      <Navigate to={redirectPath}></Navigate>
    );
  }
  if (isLogin) {
    return user ? (
      <Component></Component>
    ) : (
      <Navigate to={redirectPath}></Navigate>
    );
  }
  if (isAuth) {
    return !user ? (
      <Component></Component>
    ) : (
      <Navigate to={redirectPath}></Navigate>
    );
  }
  return <Component></Component>;
};

export default RouteComponent;
