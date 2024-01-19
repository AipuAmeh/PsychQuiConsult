import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const styles = {
  accentColor: {
    backgroundColor: "#C49A6C",
  },
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header style={styles.accentColor} className="flex py-4">
      <div>
        <img
        src='images/logo.png'
        className="logo flex justify-start"
        alt="psychquiconsult-logo"
        ></img>
      </div>
      <div className="flex flex-row justify-items-end">
      <Link to="/">
          <h3 className="px-2">Home </h3>
        </Link>
        <Link to="/">
          <h3 className="px-2">About </h3>
        </Link>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <div className="flex flex-row">
          
              <Link to="/">
                <h3 className="px-2">Login </h3>
              </Link>
          
           
              <Link to="/">
                <h3 className="px-3">Signup </h3>
              </Link>
           
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
