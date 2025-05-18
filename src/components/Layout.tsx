// Layout.jsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full">
      <div className="relative w-full max-w-full overflow-hidden bg-darkmain-bg">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="flex flex-col h-full justify-between">
            <img
              className="w-full h-[670px]"
              alt="Header gradient"
              src="/header-gradient.svg"
            />
            <img
              className="w-full h-[659px]"
              alt="Footer gradient"
              src="/footer-gradient.svg"
            />
          </div>
        </div>

        {/* Main Content */}
        <main className=" max-w-4xl mx-auto flex-1 z-10 ">{children}</main>

        {/* Footer */}
        {/* <footer className="p-4 text-white z-10">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer> */}

        {/* Footer Gradient */}
      </div>
    </div>
  );
};

export default Layout;
