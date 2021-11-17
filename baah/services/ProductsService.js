const PRODUCTS = [
    {
        id: 1,
        name: 'Mercedes',
        price: 200000,
        image: require('../assets/products/vv.jpg'),
        description: 'it comes in 4 colours and it has luxurious interior'
    },
    {
        id: 2,
        name: 'Escalade',
        price: 600000,
        image: require('../assets/products/da.webp'),
        description: 'it can contain 8 passengers and also comfortable on rough roads'
    },
    {
        id: 3,
        name: 'Jaquar',
        price: 200000,
        image: require('../assets/products/er.jpg'),
        description: 'runs on V8 engine and is super fast with comfortability due to its length'
    },
    {
        id: 4,
        name: 'Mustang GT',
        price: 450000,
        image: require('../assets/products/hm.webp'),
        description: 'it is a vey fast sport car which is supported by turbo '
    },
    {
        id: 5,
        name: 'Rolls royce   ',
        price: 950000,
        image: require('../assets/products/hc.jpg'),
        description: 'it runs on V12 engine and also comes with luxurious interior '
    },
    {
        id: 6,
        name: 'Range rover ',
        price: 500000,
        image: require('../assets/products/sd.jpg'),
        description: 'it runs on v12 and uses both electronic and fuel'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}