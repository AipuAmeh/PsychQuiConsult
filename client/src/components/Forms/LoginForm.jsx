import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LOGIN_PATIENT, LOGIN_PROVIDER } from "../../utils/mutations";

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
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [loginPatient, { error: patientError , data: patientData }] = useMutation(LOGIN_PATIENT);
  const [loginProvider, { error: providerError, data: providerData }] = useMutation(LOGIN_PROVIDER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const login =
      e.nativeEvent.submitter.id == "provider-login"
        ? loginProvider
        : loginPatient;
    try {
      const mutationResponse = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });
     console.log('RESPONSE', mutationResponse);

      // if (e.nativeEvent.submitter.id == "provider-login") {
      //   try {
      //     const { providerData } = await loginProvider({
      //       variables: { ...mutationResponse },
      //     });
      //     Auth.login(providerData.loginProvider.token);
      //     setFormState({
      //       email: "",
      //       password: ""
      //     })
      //     navigate('/');
      //   } catch (error) {
      //     console.error(error)
      //   }
       
      // } else {
      //   console.log('UNABLE TO LOG PROVIDER');
      // }
    // else {
    //     Auth.login(mutationResponse.loginPatient.token);
    //     setFormState(mutationResponse);
    //   }
      
    //   // let mutationObj =
    //   //   mutationResponse.data[Object.keys(mutationResponse.data)[0]];

    //   // const { token } = mutationObj;
    //   // const user =
    //   //   mutationObj[
    //   //     Object.keys(mutationObj)[Object.keys(mutationObj).findIndex((el) => el.includes("current"))]
    //   //   ];
    // } catch (error) {
    //   console.error(error)
    // }
    // e.preventDefault();
    // console.log(formState);
    // try {
    //   const { data } = await loginPatient({
    //     variables: { ...formState },
    //   });
    //   Auth.login(data.loginPatient.token);
    //   setFormState({
    //     email: "",
    //     password: "",
    //   });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {patientData || providerData ? (
        <p>
          Success! <Link to='/'> back to homepage. </Link>
        </p>
      ) : (
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col place-content-center mt-8 rounded"
          style={styles.loginForm}
        >
          <div className="mb-4">
            <label
              className="block text-black-700 text-sm font-bold mb-2 font-serif"
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
              value={formState.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-black-900 text-sm font-bold mb-2 font-serif"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-black-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            ></input>
            <label
              className="block text-black-900 text-sm font-bold mb-2 font-serif"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="new-password"
              type="password"
              placeholder="******************"
              name="password"
              value={formState.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex items-center justify-between flex-col space-y-4">
            <button
              className="mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-serif"
              id="provider-login"
              style={styles.buttons}
              type="submit"
            >
              Provider Login
            </button>
            <button
              className=" mx-auto text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-serif"
              id="patient-login"
              style={styles.buttons}
              type="submit"
            >
              Patient Login
            </button>
          </div>
        </form>
      )}
      {patientError || providerError ? (
        <div className="my-3 p-3 bg-danger text-white"></div>
      ) : null}
    </div>
  );
};

export default LoginForm;
