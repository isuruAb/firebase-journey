import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../config/firebase";

function Login() {
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user==>",user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
