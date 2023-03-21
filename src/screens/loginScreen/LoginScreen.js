import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./loginScreen.css";

import logo from "../../components/assets/logo.png";

import { FcGoogle } from "react-icons/fc";
const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <>
      <div className="container__acess">
        <div className="container__login">
          <div className="detalis-main">
            <div className="login-main">
              <img className="logo" src={logo} alt="SmartSave" />
              <h1 className="welcom__text">Welcome </h1>
            </div>

            <div className="with-social">
              <p onClick={handleLogin} className="login__button">
                Login with <FcGoogle />
              </p>
            </div>
            <p className="paragraph-description">
              Currently we are only allow user to login via google only please
              login with goole in future a'll add the functionalty to login via
              Email thank you
            </p>
            <p className="warning"> We are not collecting your Data</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
