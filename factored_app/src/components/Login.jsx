import { useState } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import useLocation from "wouter/use-location";

const Login = () => {
  const [message, setMessage] = useState({});
  const [, setLocation] = useLocation();

  const handleSubmit = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/users/sign_in", {
        user: {
          email: email,
          password: password,
        },
      });
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        setMessage({ type: "success", message: "User logged successfully" });
        setLocation("/films");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setMessage({
          type: "error",
          message: "Invalid email or password. Please try again.",
        });
      } else {
        setMessage({
          type: "error",
          message: "Error on login. Please try again",
        });
      }
    }
  };
  return (
    <LoginForm
      handleSubmit={handleSubmit}
      message={message}
      title="Sign In"
      buttonText={"Login"}
    />
  );
};

export default Login;
