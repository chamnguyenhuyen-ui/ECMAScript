// Bài tập Array Destructuring
// Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
function getFirstLast(array) {
  const first = array[0];
  const last = array[array.length - 1];
  return [first, last];
}
console.log(getFirstLast([1, 2, 3, 4])); 

// Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
function swapElements(arr) {
  if (arr.length < 4) {
    return arr;
  }
  const temp = arr[1];   
  arr[1] = arr[3];      
  arr[3] = temp;         
  return arr;
}
console.log(swapElements([1, 2, 3, 4, 5]));

// Bài tập Object Destructuring
// Bài 1: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  const name = user.personalInfo.name;
  const email = user.personalInfo.contact.email;
  return {
    name: name,
    email: email
  };
}
console.log(getUserInfo(user));

// Bài 2: Viết hàm với tham số mặc định
function createProduct({ name, price, category = "general", inStock = true }) {
  return {
    name: name,
    price: price,
    category: category,
    inStock: inStock
  };
}
const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);

// Bài tập Promises
// Bài 1: Viết hàm delay trả về Promise
function delay(ms) {
  return new Promise((resolve) => {
    
    setTimeout(resolve, ms);
  });
}
delay(2000).then(() => console.log("2 seconds passed"));

// Bài 2: Viết hàm fetchMultipleData
function fetchMultipleData(urls) {
  const promises = urls.map((url) => fetch(url).then((res) => res.json()));
  return Promise.all(promises);
}
fetchMultipleData(["/api/user/1", "/api/user/2"])
  .then((users) => console.log(users))
  .catch((error) => console.error("Lỗi:", error));

// Bài tập Async/Await
// Bài 1: Viết lại callback hell thành async/await
async function processOrder(orderId) {
  const order = await getOrder(orderId);
  const user = await getUser(order.userId);
  const products = await getProducts(order.productIds);
  return { order, user, products };
}
processOrder(1)
  .then((data) => console.log(data))
  .catch((err) => console.error("Lỗi:", err));

// Bài 2: Xử lý lỗi với async/await
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return result;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    return null;
  }
}






