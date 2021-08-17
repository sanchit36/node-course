// Object propert shorthand

const name = "Sanchit";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "India",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.3,
};

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;

// console.log(productLabel);
// console.log(price);
// console.log(stock);
// console.log(salePrice);
// console.log(rating);

const transaction = (type, { label }) => {
  console.log(label);
};

transaction("order", product);
