import { FooterByAnima } from "./sections/FooterByAnima/FooterByAnima";
import { FrameByAnima } from "./sections/FrameByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima/HeaderByAnima";
import { NavbarByAnima } from "./sections/NavbarByAnima";
import { SayHiByAnima } from "./sections/SayHiByAnima";
import { WorksByAnima } from "./sections/WorksByAnima";

export const HomeDark = (): JSX.Element => {
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

        {/* Main content */}
        <div className="relative z-10 ">
          {/* Navigation */}
          <NavbarByAnima />

          {/* Header section */}
          <HeaderByAnima />

          {/* Featured Projects section */}
          <section className="w-full mt-16">
            <div className="container px-6 mx-auto">
              <h2 className="opacity-60 font-section-title-desktop font-[number:var(--section-title-desktop-font-weight)] text-darklight-gray text-[length:var(--section-title-desktop-font-size)] tracking-[var(--section-title-desktop-letter-spacing)] leading-[var(--section-title-desktop-line-height)] [font-style:var(--section-title-desktop-font-style)]">
                FEATURED PROJECTS
              </h2>
              <WorksByAnima />
            </div>
          </section>

          {/* Recent Stories section */}
          <section className="w-full mt-16">
            <div className="container px-6 mx-auto">
              <h2 className="opacity-60 font-section-title-desktop font-[number:var(--section-title-desktop-font-weight)] text-darklight-gray text-[length:var(--section-title-desktop-font-size)] tracking-[var(--section-title-desktop-letter-spacing)] leading-[var(--section-title-desktop-line-height)] [font-style:var(--section-title-desktop-font-style)]">
                RECENT STORIES
              </h2>
              <FrameByAnima />
            </div>
          </section>

          {/* Say Hi section */}
          <section className="w-full mt-16">
            <div className="container px-6 mx-auto">
              <SayHiByAnima />
            </div>
          </section>

          {/* Footer section */}
          <section className="w-full mt-16">
            <div className="container px-6 mx-auto flex flex-col items-center">
              <img
                className="w-[629px] h-7 mb-8"
                alt="Group"
                src="/group-2026.png"
              />
              <FooterByAnima />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
