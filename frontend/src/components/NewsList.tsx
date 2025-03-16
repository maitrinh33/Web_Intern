"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NewsCard from "./NewsCard"; 

interface Article {
  title: string;
  date: string;
  content: string;
  description: string;
  image_url: string;
  link: string;
}

interface Props {
  articles: Article[];
}

export default function NewsList({ articles }: Props) {
  if (!Array.isArray(articles) || articles.length === 0) {
    console.error("Error: articles is not an array or empty", articles);
    return <p className="text-center text-gray-600">No articles available.</p>;
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10} // Reduce space between cards
      slidesPerView={1} // Default: 1 card per row
      navigation
      breakpoints={{
        640: { slidesPerView: 2 }, // 2 cards on small screens
        1024: { slidesPerView: 3 }, // 3 cards on medium screens
        1280: { slidesPerView: 4 }, // 4 cards on large screens
      }}
      className="py-4"
    >
      {articles.map((article, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <NewsCard article={article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
