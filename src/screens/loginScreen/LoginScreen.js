import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";
import "./loginScreen.css";
import bgimage from "../../components/assets/bg-image.jpg";
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
  }, [accessToken]);

  return (
    <>
      <div class="container__login">
        <img class="money-locker" src={bgimage} alt="You tube " />
        <div class="detalis-main">
          <div class="login-main">
            <img class="logo" src={logo} alt="SmartSave" />
            <h1 className="welcom__text">Welcome </h1>
            <p> Please enter Your details</p>
          </div>

          <div class="form-detalis">
            <div class="input-main">
              <div class="be-main"></div>
              <div class="input-box">
                <input type="text" class="input" required="" />
                <label for="#">Email Address</label>
              </div>
            </div>
          </div>
          <button class="continue">Continue</button>
          <div class="title-social">Or Continue With</div>
          <div class="with-social">
            <p onClick={handleLogin} className="login__button">
              Login with <FcGoogle />
            </p>
          </div>
          <p class="paragraph-description">
            Currently we are only allow user to login via google only please
            login with goole in future a'll add the functionalty to login via
            Email thank you
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
