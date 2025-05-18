// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye } from "lucide-react";

// // Project Data
// const projects = [
//   {
//     id: 1,
//     title: "APIGen (React)",
//     category: "Development",
//     description: "Designed and developed an enterprise API testing tool",
//     image:
//       "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Label Design",
//     category: "Design",
//     description: "Beautifully crafted open source 3D icons",
//     image:
//       "https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 3,
//     title: "Travel Website",
//     category: "Development",
//     description: "Beautifully crafted open source 3D icons",
//     image:
//       "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 4,
//     title: "Logo Design",
//     category: "Branding",
//     description: "Beautifully crafted open source 3D icons",
//     image:
//       "https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 5,
//     title: "Static Websites",
//     category: "Development",
//     description: "Beautifully crafted open source 3D icons",
//     image:
//       "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     id: 6,
//     title: "Brochure Designs",
//     category: "Design",
//     description: "Beautifully crafted open source 3D icons",
//     image:
//       "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ];

// const Projects = () => {
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section id="work" className="py-20 ">
//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="mb-12 text-start">
//           <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-widest mb-2">
//             FEATURED PROJECTS
//           </h2>
//         </div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={item}
//               className="relative group"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <div className="relative overflow-hidden rounded-lg ">
//                 <div className="bg-gradient-to-r from-[rgba(74,177,241,0.2)] via-[rgba(86,108,236,0.2)] via-[rgba(215,73,175,0.2)] to-[rgba(255,124,81,0.2)] rounded-lg transition-transform duration-500 group-hover:scale-105 p-5">
//                   <div className="aspect-w-9 aspect-h-12  ">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="text-gray-800 text-xl dark:text-gray-200 font-bold mb-1">
//                       {project.title}
//                     </h4>
//                     {/* <p className="text-gray-300 text-sm">{project.description}</p> */}
//                   </div>
//                 </div>

//                 <div
//                   className={`absolute inset-0  flex flex-col justify-center p-6 transition-opacity duration-300 ${
//                     hoveredProject === project.id
//                       ? "opacity-100 backdrop-blur-md ease-in-out "
//                       : "opacity-100  "
//                   }`}
//                 >
//                   {project.featured && (
//                     <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
//                       Featured
//                     </span>
//                   )}
// <div className="flex items-center justify-center">
//   <button
//     className={`  text-gray-800 dark:text-white p-2 rounded-full transition-transform duration-300 ${
//       hoveredProject === project.id
//         ? "translate-y-0 opacity-100"
//         : "translate-y-8 opacity-0 bg-white dark:bg-gray-800"
//     }`}
//   >
//     <h4 className="text-white text-xl font-bold mb-1">
//       {project.title}
//     </h4>
//     <p className="text-gray-300 text-sm">
//       {project.description}
//     </p>
//     <Eye className="w-5 h-5" />
//   </button>
// </div>
//                 </div>
//               </div>

//               <div className="flex items-center justify-start mt-4">
//                 <div>
//                   <h4 className="text-gray-800 text-xl dark:text-gray-200 font-bold mb-1">
//                     {project.title}
//                   </h4>
//                   {/* <p className="text-gray-300 text-sm">{project.description}</p> */}
//                 </div>
//                 {/* <button
//                   className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full transition-transform duration-300 ${
//                     hoveredProject === project.id
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-8 opacity-0"
//                   }`}
//                 >
//                   <Eye className="w-5 h-5" />
//                 </button> */}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigLeft, Eye, MoveUpRight } from "lucide-react";

// Project Data
const projects = [
  {
    id: 1,
    title: "APIGen",
    category: "Development",
    description: "Designed and developed an enterprise API testing tool",
    image: "/APIGen2.png",
    year: "2024 - Present",
    link: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Label Design",
    category: "Design",
    description: "Beautifully crafted open source 3D icons",
    image: "/label design.png",
    year: 2025,
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Travel Website",
    category: "Development",
    description: "Beautifully crafted open source 3D icons",
    image: "/travel website2.png",
    year: 2025,
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Logo Design",
    category: "Branding",
    description: "Beautifully crafted open source 3D icons",
    image: "/logos.png",
    year: 2023,
    link: "https://example.com",
  },
  {
    id: 5,
    title: "Static Websites",
    category: "Development",
    description: "Beautifully crafted open source 3D icons",
    image: "/websites.png",
    year: 2024,
    link: "https://example.com",
  },
  {
    id: 6,
    title: "Brochure Designs",
    category: "Design",
    description: "Beautifully crafted open source 3D icons",
    image: "brouchure.png",
    year: 2024,
    link: "https://example.com",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="work" className="py-20 ">
      <div className="container mx-auto  relative z-10">
        <div className="mb-6 text-start">
          <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
            FEATURED PROJECTS
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className={`relative group rounded-2xl bg-gradient-to-br from-[rgba(35,74,99,0.2)] via-[rgba(86,108,236,0.1)] to-[rgba(215,73,175,0.08)] border border-[rgba(255,255,255,0.08)] 
overflow-hidden transition-transform duration-300 hover:scale-[1.03]
`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative *: ${
                  hoveredProject === project.id ? "blur-md  " : ""
                }`}
              >
                <div className="px-10 py-10">
                  <div className="aspect-w-1 aspect-h-1 w-full flex justify-center items-end ">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-[200px] h-[200px] object-cover transition-all duration-300 shadow-2xl
                      `}
                    />
                    {project.featured && (
                      <span className="absolute top-8 left-26 bg-purple-600 text-white text-xs px-2 py-1 flex rounded-full z-10">
                        In Progress
                      </span>
                    )}
                  </div>
                  <div className=" text-center mt-6">
                    <h4 className="text-gray-700 dark:text-white  text-xl font-bold mb-1">
                      {project.title}
                    </h4>
                    {/* <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {project.description}
                </p> */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center absolute inset-0 p-10 transition-opacity duration-300">
                <button
                  className={`  text-gray-800 dark:text-white transition-transform duration-300 ${
                    hoveredProject === project.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0 bg-white dark:bg-gray-800"
                  }`}
                >
                  <h4 className="text-white text-xl font-bold mb-1">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="flex items-center justify-center mt-2">
                    <MoveUpRight className="w-6 h-6 px-1 py-1 bg-white dark:bg-gray-800 rounded-full " />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
