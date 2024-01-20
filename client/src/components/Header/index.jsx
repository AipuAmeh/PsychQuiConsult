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
    <header style={styles.accentColor} className="mb-4 py-2 flex-row align-center">
          <img
        src='images/logo.png'
        className="logo flex place-items-center justify-start mt-8"
        alt="psychquiconsult-logo"
        ></img>
      <div className="container flex flex-row justify-end ml-12">
    
   
      <nav className="flex">
      <Link to="/">
          <h3 className="px-2">Home </h3>
        </Link>
        <Link to="/">
          <h3 className="px-2">About </h3>
        </Link>
      </nav>
        {Auth.loggedIn() ? (
          <>
            <span>Hey there, {Auth.getProfile().data.username}!</span>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <nav className="flex ">
          
              <Link to="/">
                <h3 className="px-2">Login </h3>
              </Link>
          
           
              <Link to="/">
                <h3 className="px-3">Signup </h3>
              </Link>
           
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
