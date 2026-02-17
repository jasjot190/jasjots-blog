"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isAdmin = () => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`,
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
  };

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  //Google Sign in
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //Email SignIn
  const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const emailSignUp = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    console.log("User signed up and profile updated successfully!");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        gitHubSignIn,
        firebaseSignOut,
        googleSignIn,
        emailSignIn,
        emailSignUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
