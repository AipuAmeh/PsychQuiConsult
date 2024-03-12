
import { Navigate } from "react-router-dom";
import { useCurrentUserContext } from "../../utils/currentUser";
import Auth from "../../utils/auth";



const ProviderProtectedRoute = () => {
    const { isProvider } = useCurrentUserContext();
    // if not logged in or is a patient, 
    // navigate to login page
  if (!Auth.loggedIn() || isProvider) {
    return <Navigate to="/login" />;
  }
};

export default ProviderProtectedRoute;