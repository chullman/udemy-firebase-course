import { app, auth, analytics } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    //console.log(registerEmail, registerPassword);
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((user) => {
        console.log("REGISTER", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = async () => {
    // console.log(loginEmail, loginPassword);
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((user) => {
        console.log("LOGIN", user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>
      <div className="row">
        <LoginRegisterForm
          email={loginEmail}
          setEmail={setLoginEmail}
          pass={loginPassword}
          setPassword={setLoginPassword}
          handleSubmit={login}
          buttonName="Login"
        />
        <LoginRegisterForm
          email={registerEmail}
          setEmail={setRegisterEmail}
          pass={registerPassword}
          setPassword={setRegisterPassword}
          handleSubmit={register}
          buttonName="Register"
        />
      </div>
    </div>
  );
};

export default Login;
