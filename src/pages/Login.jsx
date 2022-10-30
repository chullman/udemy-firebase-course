import firebase from "../firebase";
import { useState } from "react";
import LoginRegisterForm from "../components/LoginRegisterForm";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    console.log(registerEmail, registerPassword);
  };

  const login = () => {
    console.log(loginEmail, loginPassword);
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
