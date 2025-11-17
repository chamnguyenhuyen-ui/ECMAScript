// src/components/Header.jsx

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo/Tên thương hiệu - Dẫn về Trang Chủ */}
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition duration-300">
          Tour App
        </Link>

        {/* Thanh Điều hướng */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              {/* Sử dụng Link để điều hướng đến Trang Chủ */}
              <Link to="/" className="hover:text-yellow-300 transition duration-300">
                Trang Chủ
              </Link>
            </li>
            <li>
              {/* Sử dụng Link để điều hướng đến Trang Giới Thiệu */}
              <Link to="/about" className="hover:text-yellow-300 transition duration-300">
                Giới Thiệu
              </Link>
            </li>
            {/* Thêm các mục menu khác tại đây */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;