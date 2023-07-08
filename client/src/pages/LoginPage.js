import React from "react";
import { Link } from "react-router-dom";

import Login from "../components/Login";

export default function LoginPage({ loginHandler }) {
  return (
    <div>
      {console.log(typeof loginHandler)}
      <Login loginHandler={loginHandler} />
    </div>
  );
}
