import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div id="error-page" className="flex text-3xl font-bold underline justify-center p-5">
      <h1>Oops! This page does not exist.</h1>
      <p >
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
