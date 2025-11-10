// bai 1
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let type;
    if (bmi < 18.5) {
        type = "Thiếu cân";
    } else if (bmi < 25) {
        type = "Bình thường";
    } else if (bmi < 30) {
        type = "Thừa cân";
    } else {
        type = "Béo phì";
    }
    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${type}`;
}
console.log(calculateBMI(70, 1.75)); 

// bai 2
function createBook(title, author, year, price){
    let book = {
        title: title,
        author: author,
        year: year,
        price: price,

        getBookInfo: function(){
            return `${this.title} - ${this.author} (${this.year}) - Giá: ${this.price}đ`
        },

        calculateDiscount: function(discount){
            let newPrice = this.price - (this.price * discount / 100)
            return `Giá sau giảm ${discount}%: ${newPrice}đ`
        }
    }

    return book
}

const book = createBook("JavaScript ES6","John Doe",2023,200000)
console.log(book.getBookInfo())
console.log(book.calculateDiscount(10))



