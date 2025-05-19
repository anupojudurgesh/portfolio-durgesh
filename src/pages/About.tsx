// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <section className="py-20 bg-white dark:bg-gray-950">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="max-w-3xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//               About Me
//             </h1>
//             <p className="text-lg text-gray-600 dark:text-gray-300">
//               A passionate designer and developer crafting digital experiences.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="prose prose-lg dark:prose-invert mx-auto"
//           >
//             <p>
//               Hi! I'm Durjoy Anupadh, a designer and developer based in [Your Location].
//               With over 5 years of experience in the digital industry, I've had the pleasure
//               of working with various clients and brands to bring their visions to life.
//             </p>

//             <h2>My Journey</h2>
//             <p>
//               My journey in design and development started when I was in college,
//               experimenting with different creative tools and coding languages.
//               What began as a hobby quickly turned into a passion, and eventually,
//               a fulfilling career.
//             </p>

//             <h2>Philosophy</h2>
//             <p>
//               I believe in creating digital experiences that are not just visually
//               appealing but also functional and user-friendly. My approach combines
//               aesthetic design principles with technical expertise to deliver solutions
//               that make an impact.
//             </p>

//             <h2>Skills & Expertise</h2>
//             <ul>
//               <li>UI/UX Design</li>
//               <li>Frontend Development</li>
//               <li>React & Modern JavaScript</li>
//               <li>Responsive Web Design</li>
//               <li>Brand Identity Design</li>
//               <li>Digital Marketing</li>
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import DecorativeBar from "../components/DecorativeBar";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Product Manager, TechNova",
    text: "Working with Durgesh was a game-changer for our product. His attention to detail and creative approach brought our vision to life—on time and beyond expectations.",
    image: "/testimonial1.jpg",
  },
  {
    name: "Priya Verma",
    role: "Founder, Creativa Studio",
    text: "Durgesh blends design and code like magic. He’s not just a developer—he’s a creative partner who truly cares about the outcome.",
    image: "/testimonial2.jpg",
  },
];

const About = () => {
  return (
    <Layout>
      <Header />
      <section className="py-10 mt-20 sm:mt-32 px-2 sm:px-6 md:px-8 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="text-4xl md:text-5xl font-bold  mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Who am I? Somewhere between a designer's eye and a developer’s
              logic.
            </p>
            {/* Decorative bar */}
            {/* <div className="relative w-[454px] max-w-md md:max-w-xl lg:max-w-2xl h-4 opacity-80 mx-auto mt-16 mb-12">
              <div className="text-center absolute top-[-6px] bottom-0 left-1/2 transform -translate-x-1/2 text-base text-gray-400">
                <img
                  className="w-full  dark:hidden"
                  alt="Decorative"
                  src="/Vector.png"
                />
                <img
                  className="w-full hidden dark:block"
                  alt="Decorative"
                  src="/Vectorlight.png"
                />
              </div> */}
            {/* Light theme images */}
            {/* <div className="absolute sm:w-[187px] w-[127px] h-3.5 top-[-6px] left-0 opacity-20 bg-[url(/lightbar.png)] bg-[100%_100%] bg-no-repeat dark:hidden" />
              <div className="absolute sm:w-[127px] w-[97px] h-3.5 top-[-6px] left-[270px] opacity-20 rotate-180 bg-no-repeat dark:hidden">
                <img
                  className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
                  alt="Group"
                  src="/lightbar2.png"
                />
              </div> */}
            {/* Dark theme images */}
            {/* <div className="absolute w-[187px] h-3.5 top-[-6px] left-0 opacity-30 bg-[url(/group-1938.png)] bg-[100%_100%] bg-no-repeat hidden dark:block" />
              <div className="absolute w-[127px] h-3.5 top-[-6px] left-[270px] rotate-180 opacity-30 bg-no-repeat hidden dark:block">
                <img
                  className="absolute w-[127px] h-3.5 top-0 left-0 -rotate-180"
                  alt="Group"
                  src="/group-1938-1.png"
                />
              </div>
            </div>*/}
          </div>
          <DecorativeBar />
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-2xl mx-auto">
            {/* Profile Image */}
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <img
                src="/me.jpg" // <-- Replace with your actual image path
                alt="Durgesh Anupoju"
                className="w-52 h-52 rounded-full object-cover border-4 border-purple-400 shadow-lg"
              />
            </motion.div> */}
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-left"
            >
              <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
                My Story
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                My journey began with a spark of curiosity and a sketchbook full
                of ideas. Over the years, I’ve transformed that curiosity into a
                career—building everything from sleek web apps to bold brand
                identities. Whether I’m designing a pixel-perfect interface or
                architecting a robust frontend, I’m driven by a simple goal:
                make things that matter.
              </p>
              <h2 className="text-base font-semibold text-gray-600 dark:text-gray-400 opacity-30 uppercase tracking-[.25em] mb-2">
                What Drives Me
              </h2>
              <ul className="mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✦</span>
                  Crafting seamless, human-centered digital experiences
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✦</span>
                  Bringing brands to life with unique visual identities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✦</span>
                  Solving complex problems with creative code
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✦</span>
                  Collaborating with passionate people
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500">✦</span>
                  Learning, experimenting, and sharing knowledge
                </li>
              </ul>

              <p className="text-gray-600 dark:text-gray-400">
                When I’m not building for the web, you’ll find me sketching,
                exploring new tech, or sipping coffee while brainstorming the
                next big thing for{" "}
                <span className="font-semibold text-purple-500 cursor-pointer">
                  SMDigitalX
                </span>
                .
              </p>
            </motion.div>
          </div>

          {/* Signature Section */}
          <div className="flex flex-col items-center justify-center mt-20 mb-10">
            <div className="relative">
              {/* Profile Image */}
              <img
                src="/me-light.png" // Light mode image
                alt="Signature"
                className="dark:hidden "
              />
              <img
                src="/me-dark.png" // Dark mode image
                alt="Signature"
                className=" hidden dark:block"
              />
            </div>
            {/* Handwritten Love Image */}
            <div className="">
              <img
                src="/love-dark.png" // Light mode signature image
                alt="Love Signature"
                className="w-36 mt-[-16px] dark:hidden"
              />
              <img
                src="/love-light.png" // Dark mode signature image
                alt="Love Signature"
                className="w-36 mt-[-16px] hidden dark:block"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default About;
