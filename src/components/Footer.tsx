export const Footer = (): JSX.Element => {
  // Footer navigation links data
  const navLinks = [
    { text: "home", isActive: false },
    { text: "work", isActive: false },
    { text: "services", isActive: false },
    { text: "about", isActive: false },
    { text: "contact", isActive: false },
  ];

  return (
    <footer className="flex flex-col items-center justify-center  w-full px-4 py-8 md:px-16 md:py-12 bg-transparent">
      {/* <img
        className="w-full h-[659px] absolute bottom-0 left-0 right-0 -z-10"
        alt="Footer gradient"
        src="/footer-gradient.svg"
      /> */}
      <div className="flex flex-col items-center justify-center gap-3 w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto opacity-20">
        {/* Copyright section */}
        <div className="flex flex-wrap items-center gap-1 opacity-80 justify-center text-center">
          <div className="font-16-16-med ">@durgesh</div>
          <div className="opacity-50 font-medium text-darklight-gray text-[20px]">
            ✦
          </div>
          <div className="font-16-16-med ">durgesh anupoju</div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap items-center gap-4 justify-center">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`font-12-12-med text-darklight-gray "opacity-40`}
            >
              {link.text}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer quote with decorative elements */}
      <div className="relative w-full max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-20 mx-auto mt-16 mb-12">
        <div className="absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2  text-gray-500 text-center whitespace-nowrap">
          {/* stay hungry, stay foolish */}
          Keep it simple, stupid!.
        </div>
        <div className="absolute w-[90px] md:w-[227px] h-3.5 top-px left-0 opacity-40 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat" />
        <div className="absolute w-[90px] md:w-[227px] h-3.5 top-px right-0 rotate-180 opacity-40">
          <img
            className="absolute w-full h-full top-0 left-0 -rotate-180"
            alt="Group"
            src="/group-1938-1.png"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
