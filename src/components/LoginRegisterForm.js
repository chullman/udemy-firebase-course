import React from "react";

const LoginRegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  buttonName,
  handleSubmit,
}) => (
  <div className="col-md-6">
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="form-control"
      />
      <small>We'll never share your email</small>
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="form-control"
      />
    </div>

    <div>
      <button onClick={handleSubmit} className="btn btn-primary">
        {buttonName}
      </button>
    </div>
  </div>
);

export default LoginRegisterForm;
