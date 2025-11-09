import { useState, useRef } from "react";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const usernameRef = useRef();
  const passwordRef = useRef();
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let username = usernameRef.current.value;
    let password = passwordRef.current.value;

    let data = await login(username, password);


    setErrorMessage(data.errorMessage);

    if (!data.errorMessage) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-200 p-6">
        <div className="flex flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl w-full p-10">
          <div className="flex flex-col justify-center items-center p-10 md:w-1/2 w-full">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">
              Sign in to your account
            </h2>

            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  ref={usernameRef}
                  id="username"
                  type="text"
                  name="username"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  ref={passwordRef}
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600 sm:text-sm"
                />
                {errorMessage && (
                  <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all"
              >
                Sign in
              </button>
            </form>
          </div>

          <div className="flex justify-center items-center bg-gray-100 rounded-xl w-1/2 p-10">
            <div className="rounded-xl flex justify-center items-center">
              <img
                src="DGF MARKET.png"
                alt="DGF Market Logo"
                className="max-w-[380px] w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
