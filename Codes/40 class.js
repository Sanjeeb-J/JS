// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

// Construction Method

function Product(name, price){
    
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    };

    this.calcualtedTotal = function(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();

const totalPrice = product1.calcualtedTotal(salesTax);

console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);





// By using class

class Product{
    
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calcualtedTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();

const totalPrice = product1.calcualtedTotal(salesTax);
console.log(`Total Price (with tax): $${totalPrice.toFixed(2)}`);