import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App.jsx";
import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import ProviderDashboard from "../provider-pages/Dashboard.jsx";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
// import Payment from "./pages/Payment.jsx";
import Signup from "./pages/Signup.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
// import PatientDashboard from "./pages/PatientDashboard.jsx";
// import ProviderProtectedRoute from "./components/ProviderComponents/ProviderProtectedRoute.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errprElement={<ErrorPage/>}>
      <Route index element={< Homepage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
      path="/dashboard" 
      element={
              <Dashboard /> 
      } />
 
    </Route>
  )
  // {
  //   path: "/",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Homepage />,
  //     },
  //     {
  //       path: "/about",
  //       element: <About />,
  //     },
  //     // {
  //     //   path: "/contact",
  //     //   element: <Contact />,
  //     // },
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <Signup />,
  //     },
  //     {
  //       path: "/admin",
  //       element: <ProviderDashboard />,
  //     },
  //     {
  //       path: "/patient-dashboard/",
  //       element: <PatientDashboard />,
  //     },
  // {
  //   path: "/dashboard/:patientId",
  //   element: <Dashboard />,
  // },
  // {
  //   path: "/payments",
  //   element: <Payment />
  // }  },
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
