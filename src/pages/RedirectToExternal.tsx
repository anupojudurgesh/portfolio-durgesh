// src/pages/RedirectToExternal.jsx
import { useEffect } from "react";

const RedirectToExternal = () => {
  useEffect(() => {
    window.location.replace("https://smdigitalx.com/");
  }, []);

  return (
    <div className="text-center mt-10 text-gray-600">
      Redirecting to Services...
    </div>
  );
};

export default RedirectToExternal;
