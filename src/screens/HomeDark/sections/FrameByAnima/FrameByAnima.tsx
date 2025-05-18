import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameByAnima = (): JSX.Element => {
  // Article data for mapping
  const articles = [
    {
      title: "Open-Source 3dicons Library: Case Study And Free Downloads",
      description:
        "In this article, I describes his learning experiences during the design stages of creating his 3dicons image library (a free library for product screens, social media ...",
      date: "May 7, 2022",
      source: "Smashingmagzine",
    },
    {
      title: "Open-Source 3dicons Library: Case Study And Free Downloads",
      description:
        "In this article, I describes his learning experiences during the design stages of creating his 3dicons image library (a free library for product screens, social media ...",
      date: "May 7, 2022",
      source: "Smashingmagzine",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-9 px-1 py-0 w-full">
      {articles.map((article, index) => (
        <Card
          key={index}
          className="w-full max-w-[676px] border-none shadow-none bg-transparent"
        >
          <CardContent className="flex flex-col items-start gap-[7px] px-3 py-4">
            <h3 className="self-stretch mt-[-1.00px] font-18-18-semib font-[number:var(--18-18-semib-font-weight)] text-darkprimary-text text-[length:var(--18-18-semib-font-size)] tracking-[var(--18-18-semib-letter-spacing)] leading-[var(--18-18-semib-line-height)] [font-style:var(--18-18-semib-font-style)]">
              {article.title}
            </h3>

            <p className="self-stretch h-12 opacity-60 font-16-16-reg font-[number:var(--16-16-reg-font-weight)] text-darkprimary-text text-[length:var(--16-16-reg-font-size)] tracking-[var(--16-16-reg-letter-spacing)] leading-[var(--16-16-reg-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--16-16-reg-font-style)]">
              {article.description}
            </p>

            <span className="w-fit opacity-30 font-13-13-med font-[number:var(--13-13-med-font-weight)] text-darkprimary-text text-[length:var(--13-13-med-font-size)] tracking-[var(--13-13-med-letter-spacing)] leading-[var(--13-13-med-line-height)] whitespace-nowrap [font-style:var(--13-13-med-font-style)]">
              {article.date} • {article.source}
            </span>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
