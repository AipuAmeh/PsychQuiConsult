import { Link } from "react-router-dom";

const styles = {
  buttons: {
    backgroundColor: "#C49A6C",
  },
};
const ProviderDashboard = () => {
  return (
    <div className="flex flex-col m-5 space-y-8 ">
      <h2 className="mx-auto text-xl ">Provider Portal</h2>
      <button
        className=" mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-serif"
        id="patient-login"
        style={styles.buttons}
         type="submit"
      >
        <Link to='/view-patients'></Link>
        View All Patients
      </button>
      <button
        className=" mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-serif"
        id="patient-login"
        style={styles.buttons}
        type="submit"
      >
        Add Patients
      </button>
    </div>
  );
};

export default ProviderDashboard;
