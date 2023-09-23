import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate(ROUTES.LOGIN);
      })
      .catch((error) => {
        console.error(error);
        // An error happened.
      });
  };
  return (
    <>
      <div>Dashboard</div>
      <input type="button" value="Sign out" onClick={handleSignOut} />
    </>
  );
}

export default Dashboard;
