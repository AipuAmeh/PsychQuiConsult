const styles = {
  button: {
    backgroundColor: "#C49A6C",
    borderColor: "#C49A6C",
    borderWidth: "5px"
  },
  loginSection: {
    border: "solid black",
    backgroundColor: "#F8F3EB"
  }
}

const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="images/logo-transparent.png"
          alt="psychquiconsult-brand"
          className="transparent-logo max-w-4xl p-8"
        ></img>
      </div>
      <span className="flex justify-center text-xl py-4">
        Bridging the Gap In Psychatric Managment Through Consultation and
        Integration
      </span>
      <div 
      style={styles.loginSection}
      className="login-section flex justify-center grid py-4">
        <h2 className="flex align-center text-lg p-4">New Here? Login or Sign up</h2>
        <div className="button-styles flex flex-row p-6 justify-between">
          <button 
          style={styles.button}
          className="text-black font-semibold py-2 px-4 rounded">
            Login
          </button>
          <button 
          style={styles.button}
          className="text-black-700 font-semibold py-2 px-4 rounded">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
