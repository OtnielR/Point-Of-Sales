import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-4 text-purple-500 hover:text-purple-600 underline">Go Back Home</Link>
    </div>
  );
}
