import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A passionate designer and developer crafting digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="prose prose-lg dark:prose-invert mx-auto"
          >
            <p>
              Hi! I'm Durjoy Anupadh, a designer and developer based in [Your Location]. 
              With over 5 years of experience in the digital industry, I've had the pleasure 
              of working with various clients and brands to bring their visions to life.
            </p>
            
            <h2>My Journey</h2>
            <p>
              My journey in design and development started when I was in college, 
              experimenting with different creative tools and coding languages. 
              What began as a hobby quickly turned into a passion, and eventually, 
              a fulfilling career.
            </p>

            <h2>Philosophy</h2>
            <p>
              I believe in creating digital experiences that are not just visually 
              appealing but also functional and user-friendly. My approach combines 
              aesthetic design principles with technical expertise to deliver solutions 
              that make an impact.
            </p>

            <h2>Skills & Expertise</h2>
            <ul>
              <li>UI/UX Design</li>
              <li>Frontend Development</li>
              <li>React & Modern JavaScript</li>
              <li>Responsive Web Design</li>
              <li>Brand Identity Design</li>
              <li>Digital Marketing</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;