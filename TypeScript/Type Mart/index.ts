import products from './products';

const productName = 'fanny pack'

const product = products.find(product => product.name === productName);

if (product && product.preOrder === 'true') {
    console.log('Preorder now - product will be sent.')
}

let shipping: number
let taxPercent: number
let taxTotal: number
let total: number
let shippingAddress: string = '8 Veryard Lane'
let regrex: string = '/New York/m'

if (!product) {
    console.log('Product not found')
} else {
    const price = Number(product.price)

    if (price >= 25) {
        shipping = 0
        console.log('Free shipping for order over $25')
    }
    else {
        shipping = 5
        console.log('Shipping fee of $5 will be charged')
    }

    if (shippingAddress.match(regrex)) {
        taxPercent = 0.1
    }
    else {
        taxPercent = 0.05
    }
    console.log(`Tax of ${taxPercent}% will be charged`)

    taxTotal = price * taxPercent
    total = price + taxTotal + shipping

    console.log(`Your order of ${productName} will be shipped to ${shippingAddress}, price is ${price}, total cost is ${total}`)
}