import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "sonner";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const registerWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-md bg-white rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">Login / Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border rounded"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginWithEmail} className="w-full mb-2 bg-[#6b4a33] text-white p-2 rounded">
        Login
      </button>
      <button onClick={registerWithEmail} className="w-full mb-2 bg-gray-600 text-white p-2 rounded">
        Register
      </button>
      <button onClick={loginWithGoogle} className="w-full bg-blue-500 text-white p-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
