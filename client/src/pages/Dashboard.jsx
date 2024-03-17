

import PatientDashboard from "./PatientPages/PatientDashboard";
import ProviderDashboard from "./ProviderPages/ProviderDashboard";
import Auth from "../utils/auth";

// route and render patient or provider dashboard
const Dashboard = () => {
  const isProvider  = Auth.getProfile().data.providerName;

  const renderDashboard = () => {
    if (isProvider) {
    return <ProviderDashboard />
  }
  if (!isProvider) {
    return <PatientDashboard />
  }
  };

  return (
    <>
    {renderDashboard()}
    </>
  );
};

export default Dashboard;
