// src/pages/Home.jsx

import TourCard from '../components/TourCard';
import Heading from '../components/Heading';

// Dữ liệu giả lập các tour (Tạm thời đặt ở đây)
const tours = [
  {
    id: 1,
    title: 'Tour Du Lịch Cuba',
    image:
      'https://dulichviet.com.vn/images/bandidau/thoi-diem-ly-tuong-de-di-du-lich-nhat-ban.jpg',
  },
  {
    id: 2,
    title: 'Tour Du Lịch Hoa Ky',
    image:
      'https://dulichviet.com.vn/images/bandidau/thoi-diem-ly-tuong-de-di-du-lich-nhat-ban.jpg',
  },
  {
    id: 3,
    title: 'Tour Du Lịch Nhat Ban',
    image:
      'https://dulichviet.com.vn/images/bandidau/thoi-diem-ly-tuong-de-di-du-lich-nhat-ban.jpg',
  },
  {
    id: 4,
    title: 'Tour Du Lịch Viet Nam',
    image:
      'https://dulichviet.com.vn/images/bandidau/thoi-diem-ly-tuong-de-di-du-lich-nhat-ban.jpg',
  },
];

function Home() {
  return (
    <main className="px-4 py-6">
      {/* Heading */}
      <Heading title="Tour Nội Địa" />

      {/* Mô tả */}
      <p className="text-xl font-medium my-2 px-2">
        Các chuyến đi đồng hành cùng chúng tôi là khoảnh khắc đặc biệt, luôn sẵn sàng tạo ra những trải nghiệm độc đáo và không quên cho du khách, giúp mang đến những chuyến hành trình tuyệt vời.
      </p>

      {/* Danh sách TourCard */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {tours.map(tour => (
          <TourCard
            key={tour.id}
            title={tour.title}
            image={tour.image}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;