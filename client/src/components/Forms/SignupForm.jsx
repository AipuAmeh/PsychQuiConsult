import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstname: "",
    lastname: "",
    dob: "",
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
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto signup-form">
      {data ? (
        <p>
          <Link to="/"></Link>
        </p>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col place-content-center mt-8"
          style={styles.signupForm}
        >
          <div className="mb-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-black-700 text-sm font-bold mb-2 font-serif"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 pl-2"
                  placeholder="First Name"
                  value={formState.firstname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-black-700 text-sm font-bold mb-2 font-serif"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 pl-2"
                  placeholder="Last Name"
                  value={formState.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-black-700 text-sm font-bold mb-2 font-serif"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 pl-2"
              id="signup-email"
              name="email"
              type="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <label
              className="block text-black-700 text-sm font-bold mb-2 mt-2 font-serif sm:col-span-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              className="block w-100% rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 pl-2 sm:col-span-2"
              id="signup-dob"
              name="dob"
              type="text"
              placeholder="MM/DD/YYYY"
              value={formState.dob}
              onChange={handleChange}
            ></input>
            <label
              className="block text-black-900 text-sm font-bold mb-2 mt-2 font-serif"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6 pl-2"
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
