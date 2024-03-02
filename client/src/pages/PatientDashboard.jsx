import Auth from "../utils/auth";

const PatientDashboard = () => {
  return (
    <div>
      Patient Dashboard
      {console.log(Auth.getProfile().data)}
    </div>
  );
};

export default PatientDashboard;
