import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 bg-gradient-to-br from-purple-50 via-white to-purple-100 p-8">
      <div className="flex justify-center items-center w-1/2">
        <img
          src="/11104.png"
          alt="Not Found Illustration"
          className=" w-full h-auto  drop-shadow-xl rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl p-10 md:w-1/3 w-full border border-purple-100 text-center">
        <div className="mb-6">
          <img
            src="/DGF MARKET.png"
            alt="DGF Market Logo"
            className="w-40 h-auto object-contain drop-shadow-md"
          />
        </div>

        <h1 className="text-8xl font-extrabold mb-4">404</h1>

        <p className="text-lg text-gray-600 mb-8">
          Oops! We couldn’t find the page you were looking for.
        </p>

        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-500 active:scale-95 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
