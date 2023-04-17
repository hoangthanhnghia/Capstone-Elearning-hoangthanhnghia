import React, { useEffect, useState } from "react";
import "./Footer.css";
import { eLearningServ } from "../services/eServices";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    danhMuc: [],
  });
  const fetchData = () => {
    eLearningServ
      .getCategory()
      .then((res) => {
        setState({
          ...state,
          danhMuc: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => fetchData(), []);
  return <footer></footer>;
};

export default Footer;
