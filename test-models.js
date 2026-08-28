require('dotenv').config();

const db = require('./models');

console.log('User:', Object.keys(db.User.associations));
console.log('Address:', Object.keys(db.Address.associations));
console.log('Order:', Object.keys(db.Order.associations));
console.log('Product:', Object.keys(db.Product.associations));
console.log('Category:', Object.keys(db.Category.associations));