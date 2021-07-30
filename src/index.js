const appleStore = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450,
      },
      price: 600,
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20,
      },
      price: 1000,
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0,
      },
      price: 1400,
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100,
      },
      price: 600,
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300,
      },
      price: 600,
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80,
      },
      price: 2400,
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200,
      },
      price: 1800,
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15,
      },
      price: 2300,
    },
  ],
};

const jeepStore = {
  location: "London",
  products: [
    {
      name: "Roof Rack",
      type: "accessory",
      stock: {
        incomingDelivery: false,
        stock: 350,
      },
      price: 3500,
    },
    {
      name: "Spare Tyre",
      type: "accessory",
      stock: {
        incomingDelivery: true,
        stock: 100,
      },
      price: 800,
    },
    {
      name: "Jeep Wrangler Unlimited Polar",
      type: "car",
      stock: {
        incomingDelivery: true,
        stock: 40,
      },
      price: 37500,
    },
    {
      name: "Jeep Wrangler Unlimited Dragon",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 120,
      },
      price: 69000,
    },
    {
      name: "Jeep Grand Cherokee",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 250,
      },
      price: 52000,
    },
  ],
};

// Each section needs an Array method
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// STORE EXERCISES

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

function filterExpensiveProducts(products) {
  const expensiveProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price >= 1000) {
      expensiveProducts.push(product);
    }
  }

  return expensiveProducts;
}

// Example of what it should look like:
const expensiveProducts = appleStore.products.filter(
  (product) => product.price >= 1000
);

console.log("expensiveProducts: ", expensiveProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000

const cheapProducts = appleStore.products.filter(
  (product) => product.price < 1000
);

console.log("cheapProducts: ", cheapProducts);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery

const productsThatNeedToBeReceived = appleStore.products.filter(
  (product) => product.stock.incomingDelivery === true
);

console.log("productsThatNeedToBeReceived: ", productsThatNeedToBeReceived);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock

const outOfStockProducts = appleStore.products.filter(
  (product) => product.stock.quantity === 0
);

console.log("outOfStockProducts: ", outOfStockProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

const productsThatNeedToBeOrdered = appleStore.products.filter(
  (product) =>
    product.stock.quantity < 100 && product.stock.incomingDelivery === false
);

console.log("productsThatNeedToBeOrdered: ", productsThatNeedToBeOrdered);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

const tablets = appleStore.products.filter(
  (product) => product.type === "tablet"
);

console.log("tablets: ", tablets);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

const computers = appleStore.products.filter(
  (product) => product.type === "computer"
);

console.log("computers: ", computers);
// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

const iMac = appleStore.products.find((product) => product.name === "iMac");
console.log("iMac: ", iMac);
// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

const iPhone12 = appleStore.products.find(
  (product) => product.name === "iPhone 12"
);

console.log("iPhone12: ", iPhone12);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

const iPadMini = appleStore.products.find(
  (product) => product.name === "iPad mini"
);

console.log("iPadMini: ", iPadMini);

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

const productTypes = appleStore.products.map((product) => product.type);
const productUniqueTypes = productTypes.filter(
  (type, i, types) => types.indexOf(type) === i
);

console.log(productUniqueTypes);

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400,
    },
    quantity: 4,
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600,
    },
    quantity: 2,
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800,
    },
    quantity: 2,
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300,
    },
    quantity: 2,
  },
];

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total price of the items in the cart

let totalPrice = 0;

cart.forEach((item) => (totalPrice += item.product.price * item.quantity));

console.log("totalPrice: ", totalPrice);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart

let quantityOfItemsInCart = 0;

cart.forEach((item) => (quantityOfItemsInCart += item.quantity));

console.log("quantityOfItemsInCart: ", quantityOfItemsInCart);
// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"

// TODO: how to get just one row instead of all four?
let recieptRow = cart
  .map(
    (item) =>
      `${item.product.name} | ${item.product.type} - ${item.product.price} x ${item.quantity} || ${totalPrice}\n`
  )
  .toString();

console.log(recieptRow);
// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the variosu rows on the reciept
// TIP: Re-use the above function for "receiptRow"

// const receiptMessage = function()

// console.log("receiptMessage: ", receiptMessage)
