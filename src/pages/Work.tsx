import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Figma 2025',
    category: 'Design',
    description: 'Next generation design tool',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    year: '2025',
    status: 'NEW'
  },
  {
    id: 2,
    title: 'Kigen',
    category: 'Development',
    description: 'AI-powered design system',
    image: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg',
    year: '2024 - Now',
    status: 'WIP'
  },
  // Add more projects as needed
];

const Work = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Works
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            It has been an absolute pleasure to put my heart and soul into these projects. 
            While you're here, browse these projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-square"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {project.description}
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        {project.year}
                      </p>
                    </div>
                    {project.status && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === 'NEW' 
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                  <button className="mt-4 flex items-center text-white hover:text-purple-400 transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;