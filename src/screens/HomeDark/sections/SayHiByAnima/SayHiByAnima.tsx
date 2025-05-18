import { MailIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SayHiByAnima = (): JSX.Element => {
  const contactOptions = [
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      text: "tweet",
      gradient:
        "bg-gradient-to-r from-[rgba(21,132,235,1)] to-[rgba(36,214,217,1)]",
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      text: "hi@vjy.me",
      gradient:
        "bg-gradient-to-r from-[rgba(240,104,68,1)] via-[rgba(238,76,84,1)] via-[rgba(212,94,149,1)] via-[rgba(156,108,166,1)] to-[rgba(101,131,193,1)]",
    },
  ];

  return (
    <section className="flex w-full max-w-[678px] mx-auto my-16 relative">
      <Card className="w-full rounded-[20px] bg-gradient-to-r from-[rgba(30,28,50,0.5)] to-[rgba(43,22,29,0.55)]">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-8">
          <div className="w-full md:w-[314px]">
            <h2 className="bg-gradient-to-r from-[rgba(240,104,68,1)] via-[rgba(238,76,84,1)] via-[rgba(212,94,149,1)] via-[rgba(156,108,166,1)] to-[rgba(101,131,193,1)] bg-clip-text text-transparent font-bold text-[44px] tracking-[-0.88px] leading-[52.8px] font-['Inter',Helvetica]">
              Say hi!
            </h2>

            <p className="mt-4 opacity-80 font-['Inter',Helvetica] font-medium text-darkprimary-text text-[21px] tracking-[-0.36px] leading-8">
              Want to create something awesome? Or, you have any query? Drop an
              email or tweet.
            </p>

            <div className="flex items-start gap-[39px] mt-6">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 py-0.5 cursor-pointer"
                >
                  {option.icon}
                  <span
                    className={`${option.gradient} bg-clip-text text-transparent font-20-20-med text-[length:var(--20-20-med-font-size)] tracking-[var(--20-20-med-letter-spacing)] leading-[var(--20-20-med-line-height)]`}
                  >
                    {option.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-[275px] h-[275px] mt-8 md:mt-0">
            <div className="relative w-[313px] h-[330px]">
              <img
                className="absolute w-[313px] h-[313px] top-[17px] left-0 blur-[32px] object-cover"
                alt="Profile background"
                src="/rectangle-1.png"
              />
              <img
                className="absolute w-[275px] h-[275px] top-0 left-px object-cover"
                alt="Profile"
                src="/rectangle-1.png"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
