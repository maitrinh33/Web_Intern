import Image from "next/image";
import AIImageSection from "./AIImageSection";
export default function AISection() {
  return (
<section className="flex flex-col md:flex-row items-center justify-between gap-15 px-4 md:px-16 py-8 bg-white">
  {/* Left Side*/}
  <div className="flex flex-col md:pb-15 md:w-1/2 lg:w-1/2 items-center md:items-start gap-8">
    {/* Left - Text Section (Now on Top) */}
    <div className="text-center md:text-left relative">
    <h1 className="lg:text-5xl text-4xl font-bold text-gray-900 relative z-10 md:pr-20 leading-normal">
      Bringing the benefits of AI to everyone
    </h1>
    <div className="w-full md:w-100 h-1 md:h-8 bg-indigo-200 rounded absolute transform hidden md:block md:top-[calc(50%-2rem)] z-0"></div>
      <p className="text-gray-600 text-sm sm:text-base mt-5 pb-5">
        We research and develop the fields of Artificial Intelligence: Natural Language, Computer Vision, Machine Learning, and Big Data Analysis.
      </p>
      <button className="relative flex items-center justify-center md:mt-5 px-6 py-2 sm:py-3 cursor-pointer theme-color hover:bg-blue-800 text-white text-lg font-semibold rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105">
        <span className="absolute inset-0 rounded-full bg-blue-100 opacity-50 animate-ping"></span>
        Explore
      </button>
    </div>

    {/* Right - List & Image Section (Now Below) */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start mt-10 gap-6">
      {/* AI Icon */}
      <div className="flex flex-col items-center">
        <Image src="/robot-ai.png" alt="AI Icon" width={150} height={150} className="sm:w-[150px] sm:h-[150px] md:hidden lg:mt-20" />
      </div>

      {/* List Section */}
      <div className="max-w-md">
        {[
          {
            description: "NLP is the use of Machine Learning to represent text structure and meaning.",
            icon: "/megaphone.png",
          },
          {
            description: "Get information from images in cloud storage to detect emotions and understand text.",
            icon: "/human.png",
          },
          {
            description: "Machine learning for data visualization & AI-powered recommendations.",
            icon: "/earth.png",
          },
        ].map((step, index) => (
          <div className="flex items-start space-x-4" key={index}>
            {/* Step Icon */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <Image src={step.icon} alt="Step Icon" width={30} height={30} />
              </div>

              {/* Connector Line (Hidden on Last Item) */}
              {index !== 2 && <div className="h-16 w-[2px] bg-gray-300 dark:bg-slate-500"></div>}
            </div>

            {/* Description */}
            <div className="text-gray-600 text-sm sm:text-base">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right Side */}
  <div className="relative justify-self-end w-full md:w-1/2 h-[500px] sm:h-[600px] md:h-[700px] hidden md:block">
    <div className="hidden md:block">
      <AIImageSection />
    </div>
  </div>
</section>

  );
}
