const shoppingCart = {
    keyboard: 2,
    mouse: 3,
    pen: 5,
    monitor: 2,
    books: 0,
    notebook: 7
};

const keys = Object.keys(shoppingCart);
const values = Object.values(shoppingCart);

//* console keys and values together using while loop
let i = 0;
while (i < keys.length) {
    const properties = keys[i];
    // console.log(properties, shoppingCart[properties])
    i++;
}

//* using for---in loop
for(const keys in shoppingCart){
    // console.log(keys, shoppingCart[keys])
}

//* for--of
const arr = [10, 20, 30]
for(const test of arr){
    // console.log(test)
}

for(const test in shoppingCart){
    console.log(test)
}