import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center max-w-lg w-full border border-purple-100">
        <div className="mb-6">
          <img
            src="DGF MARKET.png"
            alt="Logo"
            className="w-48 h-auto object-contain drop-shadow-md"
          />
        </div>

        <h1 className="text-8xl font-extrabold mb-4">404</h1>

        <p className="text-lg text-gray-600 mb-8">
          We couldn't find the page you were looking for.
        </p>

        <Link
          to="/"
          className="px-6 py-2 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-500 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
