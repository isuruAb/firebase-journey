import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        navigate(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder="username" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="submit" value="login" />
      </form>
    </>
  );
}

export default Login;
