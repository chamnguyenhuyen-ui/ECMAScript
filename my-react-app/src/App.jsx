// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import các trang đã tách
import Home from './pages/Home';
import About from './pages/About'; // Đảm bảo bạn có file này trong src/pages

function App() {
  return (
    // Bọc toàn bộ ứng dụng trong BrowserRouter để kích hoạt routing
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        
        {/* Header (Cố định ở mọi trang) */}
        <Header />

        {/* Khu vực nội dung chính, thay đổi theo đường dẫn */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1 className="text-center py-20">404 - Trang không tồn tại</h1>} />
        </Routes>

        {/* Footer (Cố định ở mọi trang) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;