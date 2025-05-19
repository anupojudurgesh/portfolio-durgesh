// Layout.jsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full">
      <div
        className="
          relative w-full max-w-full min-h-screen overflow-hidden
          bg-light-noise dark:bg-dark-noise
          bg-opacity-5 dark:bg-opacity-0
          bg-repeat bg-fixed bg-[length:auto_auto]
          before:absolute before:inset-0
          before:bg-light-noise dark:before:bg-dark-noise
          before:opacity-10 dark:before:opacity-10
          before:pointer-events-none before:z-0
        "
      >
        {/* Background gradients */}
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="flex flex-col h-full justify-between">
            <img
              className="w-full  h-[180px] sm:h-[400px] md:h-[370px] lg:h-[670px]"
              alt="Header gradient"
              src="/header-gradient.svg"
            />
            <img
              className="w-full h-[180px] sm:h-[350px] md:h-[370px] lg:h-[659px]"
              alt="Footer gradient"
              src="/footer-gradient.svg"
            />
          </div>
        </div>

        {/* Main Content */}
        <main
          className="
            max-w-4xl mx-auto flex-1 z-10
            px-4                          
            sm:px-6                        
            md:px-8                        
            lg:px-0                        
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
