// use local storge to manage cart data

const addTodb = id => {
    let shoppingcart = {};

    //get the shopping cart from the local storage

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingcart = JSON.parse(storedCart);
    } else {
        shoppingcart = {};
    }
    //add quantity
    const quantity = shoppingcart[id];
    if (quantity) {
        console.log('alrady exist')
        const newQuantity = quantity + 1;
        shoppingcart[id] = newQuantity;
        
    } else{ 
        shoppingcart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingcart));
}

const removeFormDb = id => {
    console.log('inside fake db', id)
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingcart = JSON.parse(storedCart);
    if (id in shoppingcart) {
        console.log('exist in the cart')
        delete shoppingcart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingcart));
    }
}

export {
    addTodb,
    removeFormDb
};