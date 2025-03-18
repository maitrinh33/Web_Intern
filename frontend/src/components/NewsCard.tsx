"use client";
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
    <Link href={article.link} passHref>
      <div className="w-full md:w-[280px] rounded-4xl my-5 mb-20 cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <img 
          src={article.image_url || "/fallback-image.jpg"} 
          alt={article.title} 
          className="w-full md:h-40 h-60 object-cover rounded-2xl"
          onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
        />
        <div className="p-4">
          <h2 className="text-md font-bold mt-2 hover:text-blue-600 hover:underline cursor-pointer line-clamp-2 leading-tight">
            {article.title}
          </h2>
          <p className="text-xs text-gray-500 mt-1 leading-snug">{article.date}</p>
          <div className="flex justify-between items-end mt-1">
            <p className="text-sm text-gray-950 line-clamp-4 leading-snug">{article.content}</p>
            <span className="inline-block text-base font-bold underline text-gray-700 border-b border-transparent hover:text-blue-600 hover:border-blue-600">
              More
            </span>
          </div>
          <div className="w-full h-1 bg-gray-300 rounded my-2"></div>
          <p className="text-xs text-gray-600 italic line-clamp-4 mb-2 leading-snug">{article.description}</p>
        </div>
      </div>
    </Link>
  );
}