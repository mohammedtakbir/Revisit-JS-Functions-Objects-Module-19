// function add(num1, num2){
//     const sum = num1 + num2;
//     console.log(sum)
//     return sum;
// }

// const result = add(20, 285);
// console.log(result)

function singaraQuantity(money) {
    const singaraPrice = 10;
    const quantity = money / singaraPrice
    return quantity;
}
const taka = 170;
const totalQuantity = singaraQuantity(taka);
console.log(totalQuantity)