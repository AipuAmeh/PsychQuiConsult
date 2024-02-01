import SignupForm from "../components/Forms/SignupForm";

export default function Signup() {
  return (
    <div className="signup-page h-screen">
        <h1 className="flex justify-center py-10 text-2xl ">Sign up</h1>
     <SignupForm />
    </div>
  );
}
