import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import SayHi from "../components/SayHi";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className=" min-h-screen w-full flex flex-col">
//       {/* Header Gradient */}
//       <img
//         className="absolute top-0 left-0 w-full h-[670px] pointer-events-none z-0"
//         alt="Header gradient"
//         src="/header-gradient.svg"
//       />

//       {/* Footer Gradient */}
//       <img
//         className="absolute bottom-0 left-0 w-full h-[659px] pointer-events-none z-0"
//         alt="Footer gradient"
//         src="/footer-gradient.svg"
//       />

//       {/* Main content */}
//       <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col items-center">
//         <Hero />
//         <section className="w-full mt-16">
//           <div className="container px-6 mx-auto">
//             <h2 className="opacity-60 ">FEATURED PROJECTS</h2>
//             <Projects />
//           </div>
//         </section>
//         {/* <Experience /> */}
//       </div>
//     </div>
//   );
// };

// export default Home;

export const HomeDark = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full">
      <div
        className="
    relative w-full max-w-full min-h-screen overflow-hidden
    bg-light-noise dark:bg-dark-noise                      
    bg-opacity-5 dark:bg-opacity-0                         
    bg-repeat bg-fixed bg-[length:auto_auto]
    before:absolute before:inset-0
    before:bg-light-noise dark:before:bg-dark-noise        
    before:opacity-10 dark:before:opacity-10                
    before:pointer-events-none before:z-0
  "
      >
        {/* your content */}

        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="flex flex-col h-full justify-between">
            <img
              className="w-full  h-[180px] sm:h-[400px] md:h-[370px] lg:h-[670px]"
              alt="Header gradient"
              src="/header-gradient.svg"
            />
            <img
              className="w-full h-[180px] sm:h-[350px] md:h-[370px] lg:h-[659px]"
              alt="Footer gradient"
              src="/footer-gradient.svg"
            />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl mx-auto flex-1 z-10 relative px-2 sm:px-6 md:px-8">
          <Header />
          <Hero />
          <Projects />
          <Experience />
          <SayHi />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default HomeDark;
