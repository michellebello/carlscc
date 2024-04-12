import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="registerBox">
        <h1 className="lTitle">REGISTER HERE</h1>
        <div className="rightRegister">
          <label className="inputLabel" for="fName">
            First Name
          </label>
          <input
            className="inputBox"
            type="text"
            id="firstName"
            name="firstName"
          ></input>
          <label className="inputLabel" for="phoneNumber">
            Phone number
          </label>
          <input
            className="inputBox"
            type="integer"
            id="phoneNumber"
            name="phoneNumber"
          ></input>
        </div>
        <div className="rightRegister">
          <label className="inputLabel" for="lName">
            Last name
          </label>
          <input
            className="inputBox"
            type="text"
            id="lastName"
            name="lastName"
          ></input>
          <label className="inputLabel" for="email">
            Email
          </label>
          <input
            className="inputBox"
            type="text"
            id="email"
            name="email"
          ></input>
        </div>
        <div className="rightRegister">
          <label className="inputLabel" for="address">
            Street
          </label>
          <input
            className="inputBox"
            type="text"
            id="address1"
            name="address1"
          ></input>
          <label className="inputLabel" for="password">
            Password
          </label>
          <input
            className="inputBox"
            type="text"
            id="password"
            name="password"
          ></input>
        </div>
        <div className="rightRegister">
          <label className="inputLabel" for="address">
            City
          </label>
          <input className="inputBox" type="text" id="city" name="city"></input>
          <label className="inputLabel" for="address">
            Zip code
          </label>
          <input
            className="inputBox"
            type="integer"
            id="zipcode"
            name="zipcode"
          ></input>
        </div>
        <div className="rightRegister">
          <label className="inputLabel" for="address">
            State
          </label>
          <input
            className="inputBox"
            type="text"
            id="state"
            name="state"
          ></input>
        </div>
        <input className="registerClick" type="submit" value="Register"></input>
      </div>
    </>
  );
};

export default RegisterPage;
