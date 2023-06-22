import { useState } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm";
import useLocation from "wouter/use-location";

const SignUp = () => {
  const [message, setMessage] = useState({});
  const [, setLocation] = useLocation();

  const handleSubmit = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8000/users", {
        user: {
          email: email,
          password: password,
        },
      });
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data);
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
          message: "Error on signup. Please try again",
        });
      }
    }
  };
  return (
    <LoginForm
      handleSubmit={handleSubmit}
      message={message}
      title="Sign Up"
      buttonText={"Create Account"}
    />
  );
};

export default SignUp;
