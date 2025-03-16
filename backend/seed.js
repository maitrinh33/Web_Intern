const mongoose = require("mongoose");
const News = require("./models/News"); // Import model News
const connectDB = require("./config/db"); // Kết nối MongoDB

const seedData = [
  {
    title: "AI sẽ tồn tại cùng con người trong lực lượng lao động",
    date: "12/1/2025",
    content: "https://vnexpress.net/ai-se-ton-tai-cung-con-nguoi-trong-luc-luong-lao-dong-vnepre-4837134.html",
    description: "Bài báo thảo luận về việc AI sẽ phát triển trở thành một phần trong lực lượng lao động, có thể thực hiện một số nhiệm vụ thay con người vào năm 2025.",
    image_url: "https://i1-sohoa.vnecdn.net/2025/01/09/2024-05-30T130136Z-1302678145-2093-3655-1736376273.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=U8yR8i5GU0A9dSY5mnGntQ",
    link: "https://vnexpress.net/ai-se-ton-tai-cung-con-nguoi-trong-luc-luong-lao-dong-vnepre-4837134.html",
  },
  {
    title: "Elon Musk: AI đã dùng cạn dữ liệu tri thức của loài người",
    date: "10/1/2025",
    content: "CEO Tesla Elon Musk cho biết, các công ty AI đã cạn kiệt dữ liệu để đào tạo các mô hình AI và khai thác hết kiến thức của con người.",
    description: "Elon Musk cho biết các mô hình đào tạo AI đã khai thác hết nguồn dữ liệu do con người tạo ra và cần chuyển sang dữ liệu tổng hợp.",
    image_url: "https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/1/10/musk-bloomberg-105199.png?width=0&s=KCs48RihxxcZGntdWdlmVw",
    link: "https://vietnamnet.vn/elon-musk-du-lieu-con-nguoi-dung-de-dao-tao-ai-da-can-kiet-2362080.html",
  },
  {
    title: "Cha đẻ Ethereum đề xuất 'nút tạm dừng AI toàn cầu'",
    date: "8/1/2025",
    content: "Vitalik Buterin, nhà đồng sáng lập Ethereum, cho rằng cần nút bấm giảm sức mạnh tính toán của AI đến 90-99% trong 1-2 năm để tìm giải pháp kiểm soát.",
    description: "Vitalik Buterin cho rằng cần có 'nút bấm' giảm sức mạnh tính toán của AI đến 90-99% trong 1-2 năm để tìm giải pháp kiểm soát.",
    image_url: "https://www.msn.com/vi-vn/news/techandscience/cha-%C4%91%E1%BA%BB-ethereum-%C4%91%E1%BB%81-xu%E1%BA%A5t-n%C3%Bút-t%E1%BA%A1m-d%E1%BB%ABng-ai-to%C3%A0n-c%E1%BA%A7u/ar-AA1x9G0L?ocid=BingNewsVerp",
    link: "https://www.msn.com/vi-vn/news/techandscience/cha-%C4%91%E1%BA%BB-ethereum-%C4%91%E1%BB%81-xu%E1%BA%A5t-n%C3%Bút-t%E1%BA%A1m-d%E1%BB%ABng-ai-to%C3%A0n-c%E1%BA%A7u/ar-AA1x9G0L?ocid=BingNewsVerp",
  },
  // Additional 18 entries as placeholders
  {
    title: "Tiêu đề bài viết 4",
    date: "1/1/2025",
    content: null,
    description: "Mô tả bài viết 4.",
    image_url: "URL hình ảnh 4",
    link: "URL bài viết 4",
  },
  {
    title: "Tiêu đề bài viết 5",
    date: "2/1/2025",
    content: null,
    description: "Mô tả bài viết 5.",
    image_url: "URL hình ảnh 5",
    link: "URL bài viết 5",
  },
  {
    title: "Tiêu đề bài viết 6",
    date: "3/1/2025",
    content: null,
    description: "Mô tả bài viết 6.",
    image_url: "URL hình ảnh 6",
    link: "URL bài viết 6",
  },
  {
    title: "Tiêu đề bài viết 7",
    date: "4/1/2025",
    content: null,
    description: "Mô tả bài viết 7.",
    image_url: "URL hình ảnh 7",
    link: "URL bài viết 7",
  },
  {
    title: "Tiêu đề bài viết 8",
    date: "5/1/2025",
    content: null,
    description: "Mô tả bài viết 8.",
    image_url: "URL hình ảnh 8",
    link: "URL bài viết 8",
  },
  {
    title: "Tiêu đề bài viết 9",
    date: "6/1/2025",
    content: null,
    description: "Mô tả bài viết 9.",
    image_url: "URL hình ảnh 9",
    link: "URL bài viết 9",
  },
  {
    title: "Tiêu đề bài viết 10",
    date: "7/1/2025",
    content: null,
    description: "Mô tả bài viết 10.",
    image_url: "URL hình ảnh 10",
    link: "URL bài viết 10",
  },
  {
    title: "Tiêu đề bài viết 11",
    date: "8/1/2025",
    content: null,
    description: "Mô tả bài viết 11.",
    image_url: "URL hình ảnh 11",
    link: "URL bài viết 11",
  },
  {
    title: "Tiêu đề bài viết 12",
    date: "9/1/2025",
    content: null,
    description: "Mô tả bài viết 12.",
    image_url: "URL hình ảnh 12",
    link: "URL bài viết 12",
  },
  {
    title: "Tiêu đề bài viết 13",
    date: "10/1/2025",
    content: null,
    description: "Mô tả bài viết 13.",
    image_url: "URL hình ảnh 13",
    link: "URL bài viết 13",
  },
  {
    title: "Tiêu đề bài viết 14",
    date: "11/1/2025",
    content: null,
    description: "Mô tả bài viết 14.",
    image_url: "URL hình ảnh 14",
    link: "URL bài viết 14",
  },
  {
    title: "Tiêu đề bài viết 15",
    date: "12/1/2025",
    content: null,
    description: "Mô tả bài viết 15.",
    image_url: "URL hình ảnh 15",
    link: "URL bài viết 15",
  },
  {
    title: "Tiêu đề bài viết 16",
    date: "13/1/2025",
    content: null,
    description: "Mô tả bài viết 16.",
    image_url: "URL hình ảnh 16",
    link: "URL bài viết 16",
  },
  {
    title: "Tiêu đề bài viết 17",
    date: "14/1/2025",
    content: null,
    description: "Mô tả bài viết 17.",
    image_url: "URL hình ảnh 17",
    link: "URL bài viết 17",
  },
  {
    title: "Tiêu đề bài viết 18",
    date: "15/1/2025",
    content: null,
    description: "Mô tả bài viết 18.",
    image_url: "URL hình ảnh 18",
    link: "URL bài viết 18",
  },
  {
    title: "Tiêu đề bài viết 19",
    date: "16/1/2025",
    content: null,
    description: "Mô tả bài viết 19.",
    image_url: "URL hình ảnh 19",
    link: "URL bài viết 19",
  },
  {
    title: "Tiêu đề bài viết 20",
    date: "17/1/2025",
    content: null,
    description: "Mô tả bài viết 20.",
    image_url: "URL hình ảnh 20",
    link: "URL bài viết 20",
  },
  {
    title: "Tiêu đề bài viết 21",
    date: "18/1/2025",
    content: null,
    description: "Mô tả bài viết 21.",
    image_url: "URL hình ảnh 21",
    link: "URL bài viết 21",
  }
];

async function seedDB() {
  try {
    await connectDB(); 
    await News.deleteMany(); 
    await News.insertMany(seedData); 
    console.log("✅ Dữ liệu đã được seed thành công!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Lỗi khi seed dữ liệu:", err);
    mongoose.connection.close();
  }
}

seedDB();