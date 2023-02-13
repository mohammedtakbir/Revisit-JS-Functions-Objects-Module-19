//* problem-01
// function foo() {
//     const test = 'test';
//     console.log('foooooooooooo');
//     function bar() {
//         console.log(test);
//         console.log('baaaaaaaaaaaaaaar');
//     }
//     bar();
// }
// foo()



//* problem-02
// function make_avg(num1, num2, num3){
//     const average = (num1 + num2 + num3) / 3
//     return average
// }
// const result = make_avg(10, 10, 10);
// console.log(result)

//* problem-03
// let sum = 0;
// function make_avg(arr){
//     let i = 0;
//     while(i < arr.length){
//         sum += arr[i];
//         i++;
//     };
//     const average = sum / arr.length;
//     return average;
// }
// const arr = [90, 80, 70, 60];
// const result = make_avg(arr);
// console.log(result)


//* problem-04
// const odd_even = (integer) => {
//     if (integer % 2 === 0) {
//         return console.log('This is Even number')
//     } else {
//         return console.log('This is Odd Number')
//     }
// };
// const result = odd_even(63);
// console.log(result)

//* problem-05
const trafficSignal = (signal) => {
    // if(signal === 'red'){
    //     console.log('You may in Danger')
    // }else if(signal === 'Yellow'){
    //     console.log('You should stop')
    // }else if(signal === 'green'){
    //     console.log('You can go!')
    // }
    switch (signal) {
        case 'red':
            console.log('You may in danger');
            break;
        case 'green':
            console.log('You should stop');
            break;
        case 'green':
            console.log('You can go')
            break;
        default:
            console.log('something went wrong')
    }
}
const signal = 'green';
const res = trafficSignal(signal);