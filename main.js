// let list = [
//     'milk',
//     'Sugar',
//     'Bread',
//     'Butter',
//     'salt'
// ]

// let [first,second,...other] = list
// console.log(frist, second, other);



// let arr = [
//     [1,2,3,4, [9, 0]],
//     [5,6,7,8]
// ]

// let [[a, b, c, d, [nine, zero]],[ newArr, ...other]] = arr;
// console.log(a,b,c,d, newArr, other);
// console.log(nine, zero)


// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'

// };

// let name = person.name;
// let age = person.age;
// let lastName = person.lastName;

// let{age, name, lastName} = person

// console.log(name, age, lastName);


// let obj1 = {
//     subOb: {
//         name: 'Jack'
//     }
// }

// let {subOb: {name}} = obj1 
// console.log(name);


// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// }

// let {arr: [{name}]} = obj
// console.log(name);


// function foo(obj){
//     console.log(obj.name);
// }

// let person = {
//     name: 'Makers',
//     lastName: ' Bootcamp',
//     age: 2
// }
// foo(person)


// let arr = [1, 2, 3, 4, 5]
// let [,,,four,five] = arr
// console.log(four,five);


//spread

// function foo(a, b, c){
//     console.log(a, b, c);
// }

// let arr = [1, 2, 3, 4, 5]
// foo(...arr)


// let a = {
//     age: 20
// }

// let b = {
//     age:20
// }

// console.log(a === b);



// let obj1 = {
//     name: 'Kani',
//     color: 'yellow'
// };

// let obj2 = {
//     lastName: 'East',
   
// }

// let {color} = obj1
// let newObj = {color, name,...obj2}
// console.log(newObj)