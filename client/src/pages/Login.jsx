import LoginForm from "../components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="login-page h-screen">
      <h1 className="flex justify-center py-10 text-2xl font-serif ">Login</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
