const mySelf = {
    name: 'Takbir',
    age: 23,
    isMarried: true,
    hobby: ['Cricket', 'Football']
}
// console.log(mySelf)
// console.log(mySelf.hobby[0])

//* get properties/key from an object
// console.log(Object.keys(mySelf))

//* get values from an object
// console.log(Object.values(mySelf))

//* three ways to get value from object
//? 1. dot notation
// console.log(mySelf.age)

//? 2. using property name inside third bracket
// console.log(mySelf['name']);

//? 3. if the property/key store in a variable
// const marriedStatus = 'isMarried';
// console.log(mySelf[marriedStatus])

//* three ways to set value in an object
//? 1. dot notation
mySelf.name = 'Mohammed Takbir';
// console.log(mySelf);

//? 2. using the object's property name inside the third bracket
mySelf['age'] = 22;
// console.log(mySelf) 

//? 3. if the object's property/keys stored in a variable
const hobby = 'hobby';
mySelf[hobby] = [...mySelf.hobby, 'Coding'];
console.log(mySelf)