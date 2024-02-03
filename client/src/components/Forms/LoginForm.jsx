import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_PATIENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const styles = {
  loginForm: {
    backgroundColor: "#C49A6C",
  },
  buttons: {
    backgroundColor: "#FFEED3",
  },
};

const LoginForm = () => {
  const [patientFormState, setPatientFormState] = useState({
    email: "",
    password: "",
  });

  const [loginPatient, { error, data }] = useMutation(LOGIN_PATIENT);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPatientFormState({
      ...patientFormState,
      [name]: value,
    });
  };

  const handlePatientLogin = async (e) => {
    e.preventDefault();
    console.log(patientFormState);
    try {
      const { data } = await loginPatient({
        variables: { ...patientFormState },
      });
      Auth.login(data.loginPatient.token);
      setPatientFormState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {data ? (
        <p>
          Success! {' '}
          <Link to="/"> back to homepage.</Link>
        </p>
      ) : (
        <form
          onSubmit={handlePatientLogin}
          className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col place-content-center mt-8 rounded"
          style={styles.loginForm}
        >
          <div className="mb-4">
            <label
              className="block text-black-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              value={patientFormState.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-black-900 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            ></input>
            <label
              className="block text-black-900 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={patientFormState.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex items-center justify-between flex-col space-y-4">
            <button
              className="mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              style={styles.buttons}
              type="submit"
            >
              Provider Login
            </button>
            <button
              className=" mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              style={styles.buttons}
              type="submit"
            >
              Patient Login
            </button>
          </div>
        </form>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default LoginForm;
