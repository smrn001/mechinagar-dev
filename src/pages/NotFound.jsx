import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-center p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Hey Dev!</h1>
        <p className="text-gray-600 mb-4">
          This page doesn’t exist. You may have mistyped the address or it may
          have moved.
        </p>
        <Link to="/" className="inline-block px-4 py-2 text-black border">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
