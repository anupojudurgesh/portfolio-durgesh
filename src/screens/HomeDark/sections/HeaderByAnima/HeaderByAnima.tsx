import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderByAnima = (): JSX.Element => {
  return (
    <Card className="border-none shadow-none w-full max-w-[676px] mx-auto mt-8">
      <CardContent className="flex flex-col items-start gap-4 p-4">
        <div className="flex items-center gap-[15px] pb-3">
          <Avatar className="w-[90px] h-[90px]">
            <AvatarImage src="/avatar.svg" alt="Avatar" />
          </Avatar>

          <div className="relative w-36 h-[50px]">
            <img className="w-36 h-6" alt="Logo" src="/logo.svg" />

            <div className="flex items-center gap-1 mt-1">
              <div className="font-16-16-semib font-[number:var(--16-16-semib-font-weight)] text-darklight-gray text-[length:var(--16-16-semib-font-size)] tracking-[var(--16-16-semib-letter-spacing)] leading-[var(--16-16-semib-line-height)] whitespace-nowrap [font-style:var(--16-16-semib-font-style)]">
                realvjy.eth
              </div>

              <ChevronDownIcon className="w-4 h-4 text-darklight-gray" />
            </div>
          </div>
        </div>

        <div className="w-full font-20-20-reg font-[number:var(--20-20-reg-font-weight)] text-darkprimary-text text-[length:var(--20-20-reg-font-size)] tracking-[var(--20-20-reg-letter-spacing)] leading-[var(--20-20-reg-line-height)] [font-style:var(--20-20-reg-font-style)]">
          A design wizard voyaging into the metaverse. I tell the story through
          my design and illustrations. I spent most of my time designing for
          brands and creating open-source design resources.
        </div>

        <div className="flex items-start gap-[9px]">
          <div className="font-18-18-med font-[number:var(--18-18-med-font-weight)] text-darklight-gray text-[length:var(--18-18-med-font-size)] tracking-[var(--18-18-med-letter-spacing)] leading-[var(--18-18-med-line-height)] whitespace-nowrap [font-style:var(--18-18-med-font-style)]">
            Building what I love at
          </div>

          <div className="[background:linear-gradient(90deg,rgba(74,177,241,1)_0%,rgba(86,108,236,1)_33%,rgba(215,73,175,1)_66%,rgba(255,124,81,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-18-18-semib font-[number:var(--18-18-semib-font-weight)] text-transparent text-[length:var(--18-18-semib-font-size)] tracking-[var(--18-18-semib-letter-spacing)] leading-[var(--18-18-semib-line-height)] whitespace-nowrap [font-style:var(--18-18-semib-font-style)]">
            @overlayz
          </div>

          <div className="font-18-18-med font-[number:var(--18-18-med-font-weight)] text-darklight-gray text-[length:var(--18-18-med-font-size)] tracking-[var(--18-18-med-letter-spacing)] leading-[var(--18-18-med-line-height)] whitespace-nowrap [font-style:var(--18-18-med-font-style)]">
            studio
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
