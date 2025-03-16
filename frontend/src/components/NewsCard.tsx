"use client"
import Link from "next/link";

interface Props {
  article: {
    title: string;
    date: string;
    content: string;
    description: string;
    image_url: string;
    link: string;
  };
}

export default function NewsCard({ article }: Props) {
  return (
    <div className="w-full md:w-[280px] rounded-4xl my-5 mb-20">
      <img 
        src={article.image_url || "/fallback-image.jpg"} 
        alt={article.title} 
        className="w-full h-40 object-cover rounded-2xl"
        onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
      />
            {/* Title wrapped inside Link */}
      <Link href={article.link} passHref>
        <h2 className="text-md font-bold mt-2 line-clamp-2 leading-tight hover:underline hover:text-blue-600 cursor-pointer">
          {article.title}
        </h2>
      </Link>
      <p className="text-xs text-gray-500 mt-1 leading-snug">{article.date}</p>
      <p className="text-sm text-gray-950 mt-1 line-clamp-4 leading-snug">{article.content}</p>
      
      {/* "More" button positioned right after content */}
      <Link href={article.link} className="inline-block pb-1 mt-2 text-base font-black underline text-blue-600 border-b border-transparent hover:border-blue-600">
        More
      </Link>

      <div className="w-full h-1 bg-gray-300 rounded my-2"></div>

      {/* Description below the separator */}
      <p className="text-xs text-gray-600 italic line-clamp-4 mb-2 leading-snug">{article.description}</p>
    </div>
  );
}