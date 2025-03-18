"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "@/app/Utils/fetchNews";
import { Autoplay, Pagination } from "swiper/modules";

interface News {
  _id: string;
  title: string;
  date: string;
  content: string;
  description: string;
  image_url: string;
  link: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data);
    };
    loadNews();
  }, []);

  return (
    <div className="md:p-16 p-4">
      <h1 className="text-3xl text-blue-900 font-bold mb-6">AI News in the World</h1>
      
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1} 
        navigation
        autoplay={{ delay: 3000 }} 
        pagination={{ clickable: true }} 
        breakpoints={{
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
          1280: { slidesPerView: 4 }, 
        }}
      >
        {news.map((article) => (
          <SwiperSlide key={article._id}>
            <NewsCard article={article} />
          </SwiperSlide>
        ))}

        {/* Pagination Dots Below the List */}
        <div className="swiper-pagination "></div> 
      </Swiper>
    </div>
  );
}
