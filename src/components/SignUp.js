import React from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUp() {
  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    console.log(email.value);
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="username" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="submit" value="Signup" />
      </form>
    </>
  );
}

export default SignUp;
