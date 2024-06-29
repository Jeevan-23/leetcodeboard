"use client"
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase-config";
import React, { useState } from 'react';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const SignupWithEmail = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !password) {
        console.error("Provide Email and Password");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
  
        const user = userCredential.user;
        console.log(user);
  
      } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
  
        console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
      }
    };
  
    return (
      <form onSubmit={SignupWithEmail}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  };
  
  export default SignupForm;
  