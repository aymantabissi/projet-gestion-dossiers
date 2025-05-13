import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Sign In</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#" className="text-decoration-none">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-100">Sign In</button>

              <div className="text-center mt-4">
                <p>Not a member? <a href="#" className="text-decoration-none">Register</a></p>
                <p>or sign in with:</p>
                <div className="d-flex justify-content-center gap-2">
                  <button type="button" className="btn btn-outline-primary rounded-circle">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" className="btn btn-outline-danger rounded-circle">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="btn btn-outline-info rounded-circle">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-outline-dark rounded-circle">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
