"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const fetchNews = async () => {
    const res = await fetch("http://localhost:5000/news");
    return res.json();
  };
  
export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchNews();
      const article = data.find((item: any) => item._id === id);
      setNews(article);
    };
    if (id) getData();
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{news.title}</h1>
      <p className="text-gray-500">{news.date}</p>
      {news.image_url && <img src={news.image_url} alt={news.title} className="w-full my-4" />}
      <p className="mt-4">{news.content}</p>
    </div>
  );
}
