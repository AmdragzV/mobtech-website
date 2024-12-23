"use client";

import dynamic from "next/dynamic";
import LoginPage from "../_components/login";

const Login = dynamic(() => Promise.resolve(LoginPage), {
  ssr: false,
});

export default Login;
