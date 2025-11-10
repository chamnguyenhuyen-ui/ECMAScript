// bai 1 Chuyển các hàm sau thành arrow functions:
// Function 1
const multiply = (a, b) => a * b;

// Function 2
const isPositive = number => number >= 0;

// Function 3
const getRandomNumber = () => Math.random();

// Function 4
document.addEventListener("click", () => {
  console.log("Clicked!");
});

// bai 2 
// Bài tập 2: Sử dụng Default Parameters
// Viết lại hàm sau sử dụng default parameters
function createUser(name = "Anonymous", age = 18, isAdmin = false) {
  return {
    name,
    age,
    isAdmin,
  };
}

// bai 3  Rest và Spread
// Hàm 1: mergeArrays - gộp nhiều mảng thành một
const mergeArrays = (...arrays) => [].concat(...arrays);
// hoặc: const mergeArrays = (...arrays) => arrays.flat();

// Hàm 2: sumAll - tính tổng tất cả tham số truyền vào
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);

// Hàm 3: createProduct - tạo object sản phẩm với giá trị mặc định
const createProduct = ({
  name = "Sản phẩm chưa có tên",
  price = 0,
  category = "Chưa phân loại",
  stock = 0,
} = {}) => ({
  name,
  price,
  category,
  stock,
});

// bai 4 : Ứng dụng thực tế
//  Tạo hàm shoppingCart với: Tham số đầu tiên là tên khách hàng Các tham số tiếp theo là các sản phẩm
//  Sử dụng rest parameters để thu thập sản phẩm Trả về object chứa thông tin đơn hàng
const shoppingCart = (customerName, ...products) => {
  return {
    customer: customerName,
    items: products,
    totalItems: products.length,
  };
};



