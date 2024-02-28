import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PATIENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const styles = {
  signupForm: {
    backgroundColor: "#C49A6C",
  },
  button: {
    backgroundColor: "#FFEED3",
  },
};

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addPatient, { error, data }] = useMutation(ADD_PATIENT);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log(formState);
    try {
      const { data } = await addPatient({
        variables: { ...formState },
      });
      console.log("PATIENT DATA:", data);
      Auth.login(data.addPatient.token);
      console.log(Auth.getProfile().data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto signup-form">
      {data ? (
        <p>
          Successfully created account!{" "}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col place-content-center mt-8"
          style={styles.signupForm}
        >
          <div className="mb-4">
            <label
              className="block text-black-700 text-sm font-bold mb-2 font-serif"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
              id="signup-username"
              name="username"
              type="text"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-black-700 text-sm font-bold mb-2 font-serif"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="signup-email"
              name="email"
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <label
              className="block text-black-900 text-sm font-bold mb-2 font-serif"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-black-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="signup-password"
              name="password"
              type="password"
              placeholder="******************"
              value={formState.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex items-center justify-between flex-col space-y-4">
            <button
              className=" mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-serif"
              id="patient-signup"
              type="submit"
              style={styles.button}
            >
              Create Patient Account
            </button>
          </div>
        </form>
      )}
      {error ? <div className="my-3 p-3 bg-danger text-white"></div> : null}
    </div>
  );
};

export default SignupForm;
