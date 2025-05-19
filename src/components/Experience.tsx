// import { motion } from "framer-motion";

// const experiences = [
//   {
//     id: 1,
//     title: "Crafting Experiences with React & Design Thinking",
//     description:
//       "A behind-the-scenes look at my journey at Soft Soft Technologies — where I currently work as a Frontend Developer, crafting clean UIs with React.js and focusing on seamless, user-friendly UX/UI design for web and mobile apps.",
//     date: "Feb 2023 - Present",
//     role: "Frontend • Software Engineer",
//   },
//   {
//     id: 2,
//     title: "Designing for Impact: My Freelance Creative Journey",
//     description:
//       "In this article, I share my experience working with 80+ clients, designing impactful visual content using Photoshop, Illustrator, and Figma — from brand identity to web UI/UX.",
//     date: "Jan 2019 - Present",
//     role: "Freelance • Art Director",
//   },
// ];

// const Experience = () => {
//   return (
//     <section id="about" className="">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="mb-6 text-start">
//           <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
//             WORK IN MOTION
//           </h2>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={exp.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="mb-12 last:mb-0"
//             >
//               <div className="flex flex-col md:flex-row gap-6">
//                 <div className="md:w-1/4">
//                   <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
//                     {exp.date}
//                   </p>
//                   <p className="text-xs text-gray-400 dark:text-gray-500">
//                     {exp.role}
//                   </p>
//                 </div>
//                 <div className="md:w-3/4">
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
//                     {exp.title}
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {exp.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Crafting Experiences with React & Design Thinking",
    description:
      "A behind-the-scenes look at my journey at Soft Soft Technologies — where I currently work as a Frontend Developer, crafting clean UIs with React.js and focusing on seamless, user-friendly UX/UI design for web and mobile apps.",
    date: "Feb 2023 - Present",
    role: "Frontend • Software Engineer",
  },
  {
    id: 2,
    title: "Designing for Impact: My Freelance Creative Journey",
    description:
      "In this article, I share my experience working with 80+ clients, designing impactful visual content using Photoshop, Illustrator, and Figma — from brand identity to web UI/UX.",
    date: "Jan 2019 - Present",
    role: "Freelance • Graphic Designer",
  },
];

const Experience = () => {
  return (
    <section id="about" className="py-6 sm:py-10 px-6 ">
      <div className="container mx-auto">
        <div className="mb-6 text-start">
          <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
            WORK IN MOTION
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col gap-4">
                <div className="">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400/80">
                    {exp.description}
                  </p>
                </div>
                <div className="">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {exp.role}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {" "}
                    {exp.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
