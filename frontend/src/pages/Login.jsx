import React from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

function Login() {
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <form>
           <div className="mb-3">
          <label htmlFor="name" className="form-label">UserName</label>
          <input type="name" className="form-control" id="name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="loginEmail" required />
        </div>

        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword" required />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" defaultChecked />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <a href="#!" className="text-decoration-none">Forgot password?</a>
        </div>

        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>

        <div className="text-center mb-3">
          <p>Not a member? <a href="#!" className="text-decoration-none">Register</a></p>
          <p>Or sign in with:</p>
          <div className="d-flex justify-content-center gap-3">
            <button type="button" className="btn btn-outline-primary rounded-circle">
              <FaFacebookF />
            </button>
            <button type="button" className="btn btn-outline-danger rounded-circle">
              <FaGoogle />
            </button>
            <button type="button" className="btn btn-outline-info rounded-circle">
              <FaTwitter />
            </button>
            <button type="button" className="btn btn-outline-dark rounded-circle">
              <FaGithub />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
