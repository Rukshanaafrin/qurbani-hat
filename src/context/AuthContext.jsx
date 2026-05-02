"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 🔁 user track
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  // 🔐 login
  const login = (email, pass) =>
    signInWithEmailAndPassword(auth, email, pass);

  // 📝 register
  const register = async (name, photo, email, pass) => {
    const res = await createUserWithEmailAndPassword(auth, email, pass);

    await updateProfile(res.user, {
      displayName: name,
      photoURL: photo,
    });

    // 🔥 user state update
    setUser({ ...res.user });
  };

  // 🌐 google login
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  // 🚪 logout
  const logout = () => signOut(auth);

  // 🔥🔥 NEW: Update Profile function (IMPORTANT)
  const updateUserProfile = async (name, photo) => {
    if (!auth.currentUser) return;

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });

    // 🔁 refresh user
    setUser({ ...auth.currentUser });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        googleLogin,
        logout,
        updateUserProfile, // 👈 add this
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);