import { MailIcon, TwitterIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const SayHiByAnima = () => {
  const contactOptions = [
    {
      icon: <BsWhatsapp className="w-5 h-5" />,
      text: "Whatsapp",
      gradient: "bg-gradient-to-r from-[#25D366] to-[#128C7E]",
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      text: "hi@designdurgesh.com",
      gradient:
        "bg-gradient-to-r from-[rgba(240,104,68,1)]  via-[rgba(212,94,149,1)]  to-[rgba(101,131,193,1)]",
    },
  ];

  return (
    <section className="flex w-full max-w-4xl mx-auto my-16 relative">
      <div
        className="w-full rounded-[20px] px-8 
  bg-gradient-to-r from-[rgba(226,224,253,0.5)] to-[rgba(241,222,228,0.55)]
  dark:from-[rgba(30,28,50,0.5)] dark:to-[rgba(43,22,29,0.55)]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-8">
          {/* Left section */}
          <div className="w-full md:w-[314px]">
            <h2 className="bg-gradient-to-br from-[rgba(240,104,68,1)] via-[rgba(238,76,84,1)] via-[rgba(212,94,149,1)] via-[rgba(156,108,166,1)] to-[rgba(101,131,193,1)] bg-clip-text text-transparent font-bold text-[44px] tracking-[-0.88px] leading-[52.8px] font-['Inter',Helvetica]">
              Say hi!
            </h2>

            <p className="mt-4 opacity-80  font-medium text-[21px] tracking-[-0.36px] leading-8">
              Want to create something awesome? Or, you have any query? Drop an
              email or tweet.
            </p>

            <div className="flex items-start gap-[39px] mt-6">
              {contactOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 py-0.5 cursor-pointer text-gray-500 "
                >
                  {option.icon}
                  <span
                    className={`${option.gradient} bg-clip-text text-transparent font-medium text-[16px] leading-[24px] tracking-wide`}
                  >
                    {option.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right section - image */}
          <div className="relative w-[275px] h-[275px] mt-8 md:mt-0">
            <div className="relative w-[313px] h-[330px]">
              <img
                className="absolute w-[313px] h-[300px] top-[17px] left-0 blur-[32px] object-cover opacity-50"
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
        </div>
      </div>
    </section>
  );
};

export default SayHiByAnima;
