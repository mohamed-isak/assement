import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/formValidation";
import "./styles.scss";
import { Link } from "react-router-dom";
// Login Page
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="formHeader">Login Page</h2>
        {/* Username Field */}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            {...register("password")}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot Password */}
        <Link to={"/forgot-password"} className="forgot-password">
          Forgot Password?
        </Link>

        {/* Login Button */}
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
