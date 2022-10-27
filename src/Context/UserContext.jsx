import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateName = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // 4. Google Signin

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
