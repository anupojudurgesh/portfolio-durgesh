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
        <div className="fixed inset-0 pointer-events-none">
          <div className="flex flex-col h-full justify-between">
            {/* Header gradient */}
            <img
              className="
                w-full h-[670px]                  /* desktop */
                lg:h-[670px]
                md:h-[520px]                     /* tablets */
                sm:h-[420px]                     /* large phones */
                xs:h-[320px]                     /* small phones */
              "
              alt="Header gradient"
              src="/header-gradient.svg"
            />

            {/* Footer gradient */}
            <img
              className="
                w-full h-[659px]
                lg:h-[659px]
                md:h-[520px]
                sm:h-[420px]
                xs:h-[320px]
              "
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
