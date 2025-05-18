import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-16 -mr-16">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <motion.div 
            animate={{ 
              x: [0, 10, 0], 
              y: [0, 15, 0], 
              rotate: [0, 5, 0] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 right-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Say hi!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              Want to create something awesome? Or, have a query? Message me on WhatsApp or email.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center">
                    {/* Animation circles */}
                    <div className="relative w-48 h-48">
                      <motion.div 
                        animate={{ 
                          rotate: 360 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 10, 
                          ease: "linear" 
                        }}
                        className="absolute inset-0"
                      >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-pink-500 rounded-full"></div>
                        <div className="absolute top-1/2 right-0 transform translate-y-1/2 w-8 h-8 bg-purple-500 rounded-full"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-indigo-500 rounded-full"></div>
                      </motion.div>
                      <div className="absolute inset-4 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center">
                        <div className="text-white text-4xl">👋</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Get in touch</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://wa.me/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    whatsapp
                  </a>
                  <a 
                    href="mailto:hi@yourdomain.me" 
                    className="flex items-center justify-center md:justify-start text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    hi@yourdomain.me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;