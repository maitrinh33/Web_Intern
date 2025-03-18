import Image from "next/image";

const AIImageSection = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/robot.jpg" 
          alt="AI Robot" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70 rounded-3xl"></div>
      </div>

      {/* Hekate Text */}
      <div className="absolute bg-white logo-font text-2xl sm:text-4xl md:text-6xl px-4 py-2 rounded-ee-3xl" style={{ color: '#04085b' }}>
        hekate
      </div>

      {/* AI Information */}
      <p className="absolute top-[15%] lg:pr-55 left-6 right-6 sm:left-10 sm:right-20 text-gray-300 italic text-sm sm:text-base shadow-md rounded leading-loose">
        Build an intelligent business using pre-built AI and a comprehensive portfolio of cloud platform services
      </p>

      {/* AI Stats */}
      <div className="absolute bottom-15 left-6 text-white space-y-4 sm:space-y-5">
        <h1 className="font-bold text-sm sm:text-4xl">
          70% 
          <p className="font-normal text-gray-400 text-sm mt-1 opacity-80">Machine Learning</p>
        </h1>
        <h1 className="font-bold text-sm sm:text-4xl">
          50% 
          <p className="font-normal text-gray-400 text-sm mt-1 opacity-80">Data Analytics</p> 
        </h1>
        <h1 className="font-bold text-sm sm:text-4xl">
          90% 
          <p className="font-normal text-gray-400 text-sm mt-1 opacity-80">Natural Language Processing</p> 
        </h1>
      </div>
    </div>
  );
};

export default AIImageSection;