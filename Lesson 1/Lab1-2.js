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
