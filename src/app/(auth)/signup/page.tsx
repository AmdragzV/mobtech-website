"use client";

import dynamic from "next/dynamic";
import SignUpPage from "../_components/signup";

const SignUp = dynamic(() => Promise.resolve(SignUpPage), {
  ssr: false,
});

export default SignUp;
