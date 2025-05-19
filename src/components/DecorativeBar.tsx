import React from "react";

export default function DecorativeBar() {
  return (
    // <div>
    //   <div className="relative w-[300px]  sm:w-[454px] max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-80 mx-auto mt-16 mb-12">
    //     <div className="text-center absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-base text-gray-400">
    //       <img
    //         className="w-full dark:hidden"
    //         alt="Decorative"
    //         src="/Vector.png"
    //       />
    //       <img
    //         className="w-full hidden dark:block"
    //         alt="Decorative"
    //         src="/Vectorlight.png"
    //       />
    //     </div>
    //     {/* Light theme images */}
    //     <div className="absolute w-[187px] h-3.5 top-[-6px] sm:left-0  opacity-20 bg-[url(/lightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden" />
    //     <div className="absolute w-[127px] h-3.5 top-[-6px] sm:left-[270px] opacity-20 rotate-180 bg-no-repeat dark:hidden">
    //       <img
    //         className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
    //         alt="Group"
    //         src="/lightbar2.png"
    //       />
    //     </div>
    //     {/* Dark theme images */}
    //     <div className="absolute w-[187px] h-3.5 top-[-6px] sm:left-0 left-[-70px] opacity-30 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block" />
    //     <div className="absolute w-[127px] h-3.5 top-[-6px] sm:left-[270px] left-[190px] rotate-180 opacity-30 bg-no-repeat hidden dark:block">
    //       <img
    //         className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
    //         alt="Group"
    //         src="/group-1938-1.png"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="flex justify-center items-center w-full ">
        <div className="relative w-[300px] sm:w-[454px] max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-80 mt-12 mb-8">
          <div className="text-center absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-base text-gray-400">
            <img
              className="w-full dark:hidden"
              alt="Decorative"
              src="/Vector.png"
            />
            <img
              className="w-full hidden dark:block"
              alt="Decorative"
              src="/Vectorlight.png"
            />
          </div>

          {/* Light theme images */}
          <div className="absolute w-[187px] h-3.5 top-[-6px] left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 opacity-20 bg-[url(/lightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden" />
          <div className="absolute w-[127px] h-3.5 top-[-6px] left-1/2 sm:left-[270px] -translate-x-1/2 sm:translate-x-0 opacity-20 rotate-180 bg-no-repeat dark:hidden">
            <img
              className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
              alt="Group"
              src="/lightbar2.png"
            />
          </div>

          {/* Dark theme images */}
          <div className="absolute w-[187px] h-3.5 top-[-6px] left-[25px] sm:left-0 -translate-x-1/2 sm:translate-x-0 opacity-30 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block" />
          <div className="absolute w-[127px] h-3.5 top-[-6px] right-[-75px] sm:left-[270px] -translate-x-1/2 sm:translate-x-0 rotate-180 opacity-30 bg-no-repeat hidden dark:block">
            <img
              className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
              alt="Group"
              src="/group-1938-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
