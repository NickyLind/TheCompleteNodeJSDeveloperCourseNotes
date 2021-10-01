//! Object property shorthand

const name = 'Nicholas';
const userAge = 30;

const user = {
  name,
  age: userAge,
  location: 'Vancouver'
}

console.log(user);

//! Obhect Destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = produce.label
// const stock = product.stock

// const { label:productName, stock, rating = 5 } = product
// //?NOTE the equal operator is used to assign a default value
// console.log(productName, stock, rating);

const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
}

transaction('order', product)