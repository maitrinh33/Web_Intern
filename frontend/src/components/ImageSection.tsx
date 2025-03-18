"use client"
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-8 md:p-16 ">
      
      {/* 1st Row*/}
      <div className="relative w-full rounded-2xl overflow-hidden">
        
        <div className="group cursor-pointer relative">
          {/* Main Image */}
          <img
            src="/1.png"
            alt="Featured Image"
            className="w-full h-[450px] sm:h-[500px] md:h-[400px] object-cover transition-transform transform scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

          {/* Text Content */}
          <div className="absolute flex flex-col justify-between inset-0 p-6 sm:p-12 md:px-16 md:py-20 text-white">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Benefits Of Artificial Intelligence
            </h1>
            {/* Description Checkmark */}
            <div className="flex flex-col justify-between lg:gap-20 sm:flex-row sm:justify-between gap-6 mt-4">
              {/* Description */}
              <p className="md:w-2/3 text-xs sm:text-base md:text-lg text-gray-300">
                Artificial intelligence (AI) is rapidly changing the world around us with new innovations and opportunities. It is now integrating into every aspect of your life to make things better in many ways.
                In this blog, we're going to talk about the 20 key benefits of artificial intelligence with real-life examples. What are the benefits of AI? AI provides many benefits to individuals and organizations alike.
              </p>

              {/* Checkmark */}
              <ul className="space-y-5 md:w-1/3">
                {[
                  "Make better Business Decisions",
                  "Reduce costs and increase efficiency",
                  "Time to value creation is faster",
                  "Enhance customer experience"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <Image src="/message.png" alt="Check" width={20} height={20} />
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["/2.png", "/3.png", "/4.png"].map((src, index) => (
          <div key={index} className="group cursor-pointer relative rounded-2xl overflow-hidden">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-[250px] sm:h-[400px] object-cover transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
              <button className="bg-white/70 font-bold text-blue-900 px-4 py-2 rounded-full hover:bg-white cursor-pointer transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
