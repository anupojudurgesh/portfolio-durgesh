import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import DecorativeBar from "../components/DecorativeBar";

const projects = [
  {
    id: 1,
    title: "APIGen",
    category: "Development",
    description: "AI-powered tool to generate and run API test cases",
    image: "/APIGen2.png",
    year: "2024 - Present",
    link: "https://example.com",
    status: "In Progress",
    featured: true,
  },
  {
    id: 2,
    title: "Label Design",
    category: "Design",
    description: "Creative and print-ready labels for product branding",
    image: "/label design.png",
    year: 2025,
    link: "https://example.com",
    status: "SINCE 2019",
  },
  {
    id: 3,
    title: "Travel Website",
    category: "Development",
    description: "Responsive site to explore and book travel packages",
    image: "/travel website2.png",
    year: 2025,
    link: "https://example.com",
    status: "NEW",
  },
  {
    id: 4,
    title: "Logo Design",
    category: "Branding",
    description: "Unique logo concepts crafted for strong brand recall",
    image: "/logos.png",
    year: 2023,
    link: "https://example.com",
    status: "SINCE 2019",
  },
  {
    id: 5,
    title: "Static Websites",
    category: "Development",
    description: "Clean and fast-loading websites built with HTML/CSS",
    image: "/websites.png",
    year: 2024,
    link: "https://example.com",
    status: "SINCE 2024",
  },
  {
    id: 6,
    title: "Brochure Designs",
    category: "Design",
    description: "Elegant layouts for promotional business brochures",
    image: "brouchure.png",
    year: 2024,
    link: "https://example.com",
    status: "SINCE 2020",
  },
];

const Work = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header />
        <section
          id="work"
          className="py-10 mt-20 sm:mt-32 px-2 sm:px-6 md:px-8"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold   mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-l from-pink-500 via-purple-500 to-blue-500">
                Works
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto  text-center">
                It has been an absolute pleasure to put my heart and soul into
                these projects. While you're here, browse these projects.
              </p>
              {/* <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-80 mx-auto mt-8 sm:mt-16 mb-8 sm:mb-12">
                <div className="text-center absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-base text-gray-400 w-2xl max-w-xs sm:w-3xl md:max-w-xl lg:max-w-2xl">
                  <img
                    className="w-full dark:hidden"
                    alt="Group"
                    src="/Vector.png"
                  />
                  <img
                    className="w-full hidden dark:block"
                    alt="Group"
                    src="/Vectorlight.png"
                  />
                </div>

                {/* Light theme images */}
              {/* <div className="absolute h-3.5 top-[-6px] left-0 opacity-20 bg-[url(/lightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden w-[90px] sm:w-[187px]" />
                <div className="absolute h-3.5 top-[-6px] right-0 opacity-20 rotate-180 bg-no-repeat dark:hidden w-[60px] sm:w-[127px]">
                  <img
                    className="absolute h-3.5 w-full top-0 left-0 -rotate-180"
                    alt="Group"
                    src="/lightbar2.png"
                  />
                </div>

                {/* Dark theme images */}
              {/* <div className="absolute h-3.5 top-[-6px] left-0 opacity-30 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block w-[90px] sm:w-[187px]" />
                <div className="absolute h-3.5 top-[-6px] right-0 rotate-180 opacity-30 bg-no-repeat hidden dark:block w-[60px] sm:w-[127px]">
                  <img
                    className="absolute h-3.5 w-full top-0 left-0 -rotate-180"
                    alt="Group"
                    src="/group-1938-1.png"
                  />
                </div>
              </div>  */}
              <DecorativeBar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl overflow-hidden  aspect-square"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-800"
                  />
                  {project.status && (
                    <span
                      className={`px-2 py-1 text-xs ml-2 mb-2 absolute top-6 left-4 rounded-full ${
                        project.status === "NEW" ||
                        project.status === "SINCE 2023" ||
                        project.status === "In Progress"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-purple-500 text-purple-100"
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                  <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-t from-black/60 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-6 flex items-center justify-center">
                      <div className=" mt-16">
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm ">
                            {project.description}
                          </p>
                          <p className="text-gray-400 text-xs mt-2 text-center">
                            {project.year}
                          </p>
                        </div>
                      </div>
                      {/* <button className="mt-4 flex items-center text-white hover:text-purple-400 transition-colors">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </button> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Footer />{" "}
      </Layout>
    </>
  );
};

export default Work;
