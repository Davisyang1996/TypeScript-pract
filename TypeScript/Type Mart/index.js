"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const productName = 'fanny pack';
const product = products_1.default.find(product => product.name === productName);
if (product && product.preOrder === 'true') {
    console.log('Preorder now - product will be sent.');
}
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = '8 Veryard Lane';
let regrex = '/New York/m';
if (!product) {
    console.log('Product not found');
}
else {
    const price = Number(product.price);
    if (price >= 25) {
        shipping = 0;
        console.log('Free shipping for order over $25');
    }
    else {
        shipping = 5;
        console.log('Shipping fee of $5 will be charged');
    }
    if (shippingAddress.match(regrex)) {
        taxPercent = 0.1;
    }
    else {
        taxPercent = 0.05;
    }
    console.log(`Tax of ${taxPercent}% will be charged`);
    taxTotal = price * taxPercent;
    total = price + taxTotal + shipping;
    console.log(`Your order of ${productName} will be shipped to ${shippingAddress}, price is ${price}, total cost is ${total}`);
}
