import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-32 pb-12 md:pt-36 md:pb-2 relative overflow-hidden mt-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Designer, Image, and Coder Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
          {/* Coder Text */}
          <div className="w-[50%] md:w-[30%] flex flex-col items-center">
            {/* Designer Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <h2 className="text-2xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                designer!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-sm text-center">
                Crafting complex ideas into elegant, intuitive designs users
                love.
              </p>
            </motion.div>
          </div>

          {/* Coder Section / Hero Image */}
          <div className="w-[50%] md:w-[30%] flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white text-center">
                {"<coder>"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center text-sm md:text-sm">
                Bringing designs to life with clean, efficient, and functional
                code.
              </p>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full absolute top-[-30px] left-0 right-0 bottom-0 object-cover inset-0 -z-30"
          />
        </motion.div>
      </div>

      {/* Introduction Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 max-w-3xl mx-auto text-center"
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed mt-[370px]">
          Hi! I’m{" "}
          <span className="bg-gradient-to-r from-[#4AB1F1] via-[#566CEC] via-[#D749AF] to-[#FF7C51] bg-clip-text text-transparent font-bold">
            Durgesh Anupoju!
          </span>{" "}
          A wizard who loves design and code. I create clean, user-friendly
          websites and eye-catching designs that tell stories. Most of my time
          goes into building stuff for brands and making digital ideas come to
          life.
        </p>
        <p className="text-base text-gray-400">
          Building what I love at{" "}
          <a
            href="https://www.smdigitalx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#4AB1F1] to-[#566CEC] bg-clip-text text-transparent font-semibold hover:underline"
          >
            @SMDigitalX
          </a>
        </p>
      </motion.div>

      {/* Background Gradients */}
    </section>
  );
};

export default Hero;
