import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Project data for mapping
const projects = [
  {
    id: 1,
    title: "Overlayz",
    description: "My Dream Studio",
    image: "/image-792.png",
    badge: { text: "NEW", type: "gradient" },
    hasGradientOverlay: true,
  },
  {
    id: 2,
    title: "Overlayz",
    description: "Beautifully crafted open source 3D icons",
    image: "/3dicons.png",
    badge: null,
  },
  {
    id: 3,
    title: "V5 UI Kit",
    description: "Open-source Figma UI Kit made for this website",
    image: "/v5.png",
    badge: { text: "UPDATE", type: "pink" },
  },
  {
    id: 4,
    title: "uiLogos",
    description: "Add dummby logos to your design quickly",
    image: "/uilogos.png",
    badge: { text: "UPDATE", type: "pink" },
  },
  {
    id: 5,
    title: "UIHues",
    description: "Generate color palattes directly on figma",
    image: "/uihues.png",
    badge: { text: "NEW", type: "gradient" },
  },
  {
    id: 6,
    title: "Croods",
    description: "illustration system made for blush.design",
    image: "/croods.png",
    badge: null,
  },
];

export const WorksByAnima = (): JSX.Element => {
  // Split projects into rows of 3
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 6);

  // Reusable project card component
  const ProjectCard = ({ project }) => (
    <Card className="inline-flex flex-col items-start gap-2 pt-3 pb-4 px-3 rounded-2xl relative">
      {project.hasGradientOverlay && (
        <div className="absolute w-56 h-[282px] top-0 left-0 rounded-[18px] [background:linear-gradient(90deg,rgba(30,28,50,0.5)_0%,rgba(43,22,29,0.55)_100%)]" />
      )}

      <CardContent className="p-0">
        <div className="flex items-center gap-2.5 relative self-stretch w-full rounded-xl overflow-hidden">
          {project.image.includes(".png") ? (
            <div
              className={`relative flex-1 grow h-[200px] rounded-xl ${
                project.id === 1 ? "bg-[#0072b0]" : ""
              }`}
            >
              <img
                className={`${project.id === 1 ? "absolute w-[200px] h-[200px] top-0 left-0" : "w-full h-full"} object-cover`}
                alt={project.title}
                src={project.image}
              />
            </div>
          ) : (
            <div
              className={`bg-[url(${project.image})] bg-cover bg-[50%_50%] relative flex-1 grow h-[200px] rounded-xl`}
            />
          )}
        </div>

        <div className="inline-flex flex-col items-start gap-0.5 mt-2">
          <div className="relative w-[200px] h-6 mt-[-1.00px] font-16-16-bold font-[number:var(--16-16-bold-font-weight)] text-darkprimary-text text-[length:var(--16-16-bold-font-size)] tracking-[var(--16-16-bold-letter-spacing)] leading-[var(--16-16-bold-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--16-16-bold-font-style)]">
            {project.title}
          </div>
          <div className="relative w-[199px] opacity-60 font-15-15-reg font-[number:var(--15-15-reg-font-weight)] text-darkprimary-text text-[length:var(--15-15-reg-font-size)] tracking-[var(--15-15-reg-letter-spacing)] leading-[var(--15-15-reg-line-height)] [font-style:var(--15-15-reg-font-style)]">
            {project.description}
          </div>
        </div>
      </CardContent>

      {project.badge && (
        <div className="absolute top-5 left-5">
          <Badge
            className={`px-1.5 py-px ${
              project.badge.type === "gradient"
                ? "[background:linear-gradient(90deg,rgba(74,177,241,1)_0%,rgba(86,108,236,1)_33%,rgba(215,73,175,1)_66%,rgba(255,124,81,1)_100%)]"
                : "bg-basic-pink"
            } rounded-lg`}
          >
            <span className="font-10-10-bold font-[number:var(--10-10-bold-font-weight)] text-basic-white text-[length:var(--10-10-bold-font-size)] tracking-[var(--10-10-bold-letter-spacing)] leading-[var(--10-10-bold-line-height)] whitespace-nowrap [font-style:var(--10-10-bold-font-style)]">
              {project.badge.text}
            </span>
          </Badge>
        </div>
      )}
    </Card>
  );

  return (
    <section className="flex flex-col items-start gap-6 px-1 py-0">
      <div className="inline-flex items-start gap-3.5 relative">
        {firstRow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="inline-flex items-start gap-3.5 relative">
        {secondRow.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
