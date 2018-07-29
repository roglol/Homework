// function aclean(arr){
//   let map = new Map();
//     for(let word of arr){
//       let sort = word.toLowerCase().split('').sort().join('')
//       map.set(sort, word)
//     }
//     return Array.from(map.values())
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr))

// function countWords(sentence) {
//   let str = sentence.replace(/[,.]/g, '')
//   let map = new Map();
//   let words = str.split(' ')
//   for(let word of words){
//     if(map.has(word)){
//       map.set(word, map.get(word) + 1)
//     }
//     else {
//       map.set(word, 1)
//     }
//   }
//   for(let entry of map){
//     console.log(entry[0] + ' ' + entry[1])
//   }
//   }
//   let sentence = "John the second is the son of John the first, while the second son of John the second is William the second.";
//   countWords(sentence);
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
//   };
//   // { sourceProperty: targetVariable }
//   let { width, height, title } = options;
//   // width -> w
//   // height -> h
//   // title -> title
//   alert(title); // Menu
//   alert(width); // 100
//   alert(height); // 200


  


// function printNumbers(from, to) {
//   let current = from

//   let timerId = setInterval(() => {
//       alert( current);
//       if( current == to){
//         clearInterval(timerId)
//       }
//       current++
//   }, 1000);
// 

// class Product{
//     constructor(id, name, price){
//         this.price = price;
//         this.name = name;
//         this._id =9;
//     }
//    makeDiscount(discount){
//        return this.price -this.price * discount /100
//    }
//    print(){
//        return  this._id + ' ' + this.name + ' ' + this.price
//    }
//     static compare(articleA, articleB) {
//     return articleA.price - articleB.price;
//     }
// }
// let products = [
//     new Product(1, 'xox', 100),
//     new Product(10, 'xiu', 50),
//     new Product(10, 'hui', 80),
//     ];



// class Book extends Product{
//     constructor(id, name, price, authors, pubDate){
//        super(id, name, price)
//        this.authors = authors,
//        this.pubDate = pubDate
//     }
//        print(){
//             console.log(super.print())
//            return this.authors + ' ' + this.pubDate
    
// }
// }
// let products = [
//     new Book(1, 'xox', 10, 'gulnazi', 1980),
//     new Book(10, 'xiu', 5, 'gubazi', 1988),
//     new Book(10, 'hui', 80, 'ruxadzis', 1977),
//     ];
// console.log(products.sort(Product.compare))
// console.log(products[0].print())  
// console.log(products[0].makeDiscount(10))

// Error: Invalid property descriptor.
// function f() {
//     alert("Hello!");
//   }
//   Function.prototype.defer = function(ms){
//     setTimeout(this, ms)
//   }
//   f.defer(1000)
// function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype.name = 'John'
//   Rabbit.prototype.sayHi = function() {
//     alert( this.name );
//   }
  
  
//   let rabbit = new Rabbit("Rabbit");
  
//   rabbit.sayHi();                        // Rabbit
//   Rabbit.prototype.sayHi();              // undefined
//   Object.getPrototypeOf(rabbit).sayHi(); // undefined
//   rabbit.__proto__.sayHi();              // undefined

// class FormatError extends SyntaxError{
//   constructor(message, name){
//     super(message, name)
//     this.message = message,
//     this.name = 'FormatError'

//   }
// }
// let err = new FormatError("formatting error");

// alert( err.message ); // formatting error
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)

function delay(ms) {
  return new Promise(resolve=>{
      setTimeout(() => resolve(), ms)
  })
  }
  let ase = delay(3000)
  ase.then(() => alert('runs after 3 seconds'));
  