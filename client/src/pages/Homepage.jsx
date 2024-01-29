const styles = {
  button: {
    backgroundColor: "#C49A6C",
    borderColor: "#C49A6C",
    borderWidth: "5px",
  },
  loginSection: {
    // border: "solid black",
    backgroundColor: "#F8F3EB",
  },
  brandName: {
    fontSize: "100px"
  }
};

const Home = () => {
  return (
    <div>
      <div className="flex items-center mx-auto flex-col">
        <img
        src="images/logo-tan.png"
        alt="psychquiconsult-brand"
        className="transparent-logo max-w-xs p-8">
        </img>
        <h1 className="font-serif " style={styles.brandName}>PSYCHQUICONSULT</h1>
        {/* <img
          src="images/logo-transparent.png"
          alt="psychquiconsult-brand"
          className="transparent-logo max-w-4xl p-8"
        ></img> */}
      </div>
      <span className="flex justify-center text-xl py-4">
        Bridging the Gap In Psychatric Managment Through Consultation and
        Integration
      </span>
      <div
        style={styles.loginSection}
        className="login-section flex justify-center grid py-4"
      >
        <h2 className="flex align-center text-xl p-4">
          New Here? Login or Sign up
        </h2>
        <div className="button-styles flex flex-row p-6 justify-between">
          <button
            style={styles.button}
            className="text-black font-semibold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            style={styles.button}
            className="text-black-700 font-semibold py-2 px-4 rounded"
          >
            Sign up
          </button>
        </div>
      </div>
      <section className="py-12">
        <h1 className="flex justify-center text-xl mb-3">Why We Care</h1>
        <div className="flex flex-col px-4">
          <ol className="flex flex-col align-baseline list-decimal leading-10 mx-auto text-xl">
            <li>In 2021, 22.8% of US adults experienced mental illness, and 5.5% experienced serious mental illness. (NIH)</li>
            <li>The presence of Serious Mental Illness (SMI) was higher among females than males. (NIH)</li>
            <li>Young adults aged 18-25 had the highest prevalence of SMI compared to adults 26-49. (NIH)</li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Home;
