//bai1
// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2
//bai2
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
  grade:"A",
};
student.age = 21;
console.log(student);

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student
// Tạo template cho email thông báo
//
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS2",
  price: 25000000,
  orderDate: "2024-01-15",
};
//bai1
// Tạo template string cho email
const emailTemplate = `firstName:${user.firstName}
lastName:${user.lastName}
product:${user.product}
price:${user.price}
orderDate:${user.orderDate}`; // Viết template ở đây

console.log(emailTemplate);
//bai2
// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
tên sản phẩm:${product.name}
giá gốc:${product.price}
giá sau giảm:${finalPrice}
tình trạng:${product.inStock ? " còn hàng" : "hết hàng"}`; // Viết template ở đây

console.log(productCard);
//bai5
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea() {
    return this.width * this.height;
  },

  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};

console.log(rectangle.calculateArea());
console.log(rectangle.describe());    
//bai6
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  // Viết code ở đây
  [`api_${env}_${version}`] : "kkk",
  [`feature_${features[0]}`]:true,
  [`feature_${features[1]}`]:true,
  [`feature_${features[2]}`]:true,
  [`get${env}Config`](){
    return this[`api_${env}_${version}`]
  },
};