import { useState } from "react";
import axios_api from "../api/axios_api";
import LoginForm from "../components/LoginForm";
import useLocation from "wouter/use-location";

const Login = () => {
  const [message, setMessage] = useState({});
  const [, setLocation] = useLocation();

  const handleSubmit = async (email, password) => {
    try {
      const response = await axios_api.post(
        "http://localhost:8000/users/sign_in",
        {
          user: {
            email: email,
            password: password,
          },
        }
      );
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data);
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

  const handlePasswordReset = (email) => {
    axios_api
      .post("/users/password", {
        user: {
          email: email,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.removeItem("token");
          setMessage({
            type: "success",
            message: "Email sent successfully",
          });
          setLocation("/");
        } else {
          setMessage({
            type: "success",
            message: `${response.data}`,
          });
        }
      })
      .catch((err) => {
        setMessage({
          type: "error",
          message: err.message,
        });
      });
  };
  return (
    <LoginForm
      handleSubmit={handleSubmit}
      resetPassword={handlePasswordReset}
      message={message}
      title="Sign In"
      buttonText={"Login"}
    />
  );
};

export default Login;
