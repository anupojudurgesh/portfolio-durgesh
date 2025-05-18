import React from "react";

export const FooterByAnima = (): JSX.Element => {
  // Footer navigation links data
  const navLinks = [
    { text: "version", isActive: false },
    { text: "uikit", isActive: false },
    { text: "bookshelf", isActive: true },
    { text: "stacks", isActive: false },
    { text: "supporters", isActive: false },
  ];

  return (
    <footer className="flex flex-col items-center gap-[120px] px-32 py-[60px] w-full bg-transparent">
      <div className="flex flex-col items-center justify-center gap-3">
        {/* Copyright section */}
        <div className="flex items-center gap-0.5 opacity-80">
          <div className="font-16-16-med text-darklight-gray">©realvjy</div>

          <div className="opacity-50 font-medium text-darklight-gray text-[9px]">
            ✦
          </div>

          <div className="font-16-16-med text-darklight-gray">vijay verma</div>
        </div>

        {/* Navigation links */}
        <nav className="flex items-start gap-4">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`font-12-12-med text-darklight-gray ${link.isActive ? "opacity-80" : "opacity-40"}`}
            >
              {link.text}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer quote with decorative elements */}
      <div className="relative w-[454px] h-4 opacity-20">
        <div className="absolute top-0 left-[156px] font-12-12-med text-darkprimary-text">
          stay hungry, stay foolish
        </div>

        <div className="absolute w-[147px] h-3.5 top-px left-0 opacity-40 bg-[url(/group-1938.png)] bg-[100%_100%]" />

        <div className="absolute w-[147px] h-3.5 top-px left-[305px] rotate-180 opacity-40">
          <img
            className="absolute w-[147px] h-3.5 top-0 left-0 -rotate-180"
            alt="Group"
            src="/group-1938-1.png"
          />
        </div>
      </div>
    </footer>
  );
};
