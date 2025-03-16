export const fetchNews = async () => {
    const res = await fetch("http://localhost:5000/api/news");
    return res.json();
  };
  