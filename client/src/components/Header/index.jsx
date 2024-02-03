import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const styles = {
  accentColor: {
    backgroundColor: "#C49A6C",
  },
  welcomeMessage: {
    display: "inline",
    position: "absolute",
    top: "30px"
  }
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header style={styles.accentColor} className="py-0 flex-row align-center">
      <img
        src="images/logo.png"
        className="logo flex place-items-center justify-start mt-0 pt-2"
        alt="psychquiconsult-logo"
      ></img>
      <div className="container flex flex-row justify-end ml-12">
        <nav className="pb-3 flex items-center">
          <Link to="/">
            <h3 className="px-2">Home </h3>
          </Link>
          <Link to="/about">
            <h3 className="px-2">About </h3>
          </Link>
        </nav>
        {Auth.loggedIn() ? (
          <>
            <span 
            className="welcome-message flex"
            style={styles.welcomeMessage}>
              Hey there, {Auth.getProfile().data.username}!
            </span>
            <button className="btn btn-lg btn-light m-2 mb-5" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <nav className=" pb-3 flex items-center">
            <Link to="/login">
              <h3 className="px-2">Login </h3>
            </Link>

            <Link to="/signup">
              <h3 className="px-3">Signup </h3>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
