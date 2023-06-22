import { useState } from "react";
import PropTypes from "prop-types";
const LoginForm = ({
  handleSubmit,
  resetPassword,
  message,
  title,
  buttonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  const handlePasswordReset = () => {
    resetPassword(email);
  };

  return (
    <div className="flex items-center justify-center h-1/2vh">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {message && message.type == "error" && (
          <p className="text-red-500 mb-4">{message.message}</p>
        )}
        {message && message.type == "success" && (
          <p className="text-green-500 mb-4">{message.message}</p>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {buttonText}
            </button>
            {title == "Sign In" && (
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                onClick={handlePasswordReset}
              >
                Forgot Password?
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  message: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string,
  }),
  title: PropTypes.string,
  buttonText: PropTypes.string,
};

export default LoginForm;
