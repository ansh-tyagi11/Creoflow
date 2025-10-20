import React from 'react';
import "./page.css";

const page = () => {
  return (
    <div>
      <div className="glass-container">
        <h2>Login</h2>
        <form action="">
          <div className="input-group">
            <input type="text" placeholder="Username" />
            <label htmlFor="">Username</label>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Username" />
            <label htmlFor="">Password</label>
          </div>
          <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" name="" id="" />Remember Me</label>
            <a href="">Forgot Password</a>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="">Signup</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
