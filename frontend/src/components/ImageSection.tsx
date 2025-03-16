import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 sm:px-4 md:px-16 py-8">
      {/* Full-width Image with Text Overlay */}
      <div className="relative w-full rounded-2xl overflow-hidden">
        <div className="group cursor-pointer relative">
          {/* Main Image */}
          <img
            src="/1.png"
            alt="Featured Image"
            className="w-full h-[400px] sm:h-[500px] md:h-[400px] object-cover transition-transform transform scale-100 group-hover:scale-105"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80"></div>

          {/* Text Content */}
          <div className="absolute inset-0 p-6 sm:p-12 md:px-16 md:py-20 flex flex-col justify-between text-white">
            {/* Title (Top Left) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Benefits Of Artificial Intelligence
            </h1>

            {/* Flex Column for Description & Checkmarks */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mt-4">
              {/* Description (Bottom Left) */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 sm:w-2/3">
                Artificial intelligence (AI) is rapidly changing the world around us with new innovations and opportunities. It is now integrating into every aspect of your life to make things better in many ways.
                In this blog, we're going to talk about the 20 key benefits of artificial intelligence with real-life examples. What are the benefits of AI? AI provides many benefits to individuals and organizations alike.
              </p>

              {/* Checkmarks (Bottom Right on Mobile, Side-by-Side on Large Screens) */}
              <ul className="space-y-4 sm:w-1/3">
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

      {/* Second Row - Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {["/2.png", "/3.png", "/4.png"].map((src, index) => (
          <div key={index} className="group cursor-pointer relative rounded-2xl overflow-hidden">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-[250px] sm:h-[300px] object-cover transition-transform transform scale-100 group-hover:scale-105"
            />
            {/* Hover Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
              <button className="bg-white/70 text-blue-900 px-4 py-2 rounded-full hover:bg-gray-500 transition-colors">
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
