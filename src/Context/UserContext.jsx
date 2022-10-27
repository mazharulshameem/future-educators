import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
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

  //
  const logout = () => {
    return signOut(auth);
  };
  //
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    logout,
    Login,
    resetPassword,
    signInWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
