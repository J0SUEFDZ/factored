import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Link, Switch } from "wouter";
import logo from "./assets/img/logo.webp";
import Film from "./components/Film";
import { useEffect, useState } from "react";
import useLocation from "wouter/use-location";
import People from "./components/People";
import Planet from "./components/Planet";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setLoggedIn(false);
    setLocation("/");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <a href="/">
          <img src={logo} alt="Logo" className="h-16 mb-4" />
        </a>
        <nav className="flex justify-center">
          {!loggedIn && (
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/signup"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
          {loggedIn && (
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
              <li>
                <Link
                  href="/films"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Films
                </Link>
              </li>
              <li>
                <Link
                  href="/people"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  People
                </Link>
              </li>
              <li>
                <Link
                  href="/planets"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Planets
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>

      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/films" component={Film} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planet} />
      </Switch>
    </div>
  );
}

export default App;
