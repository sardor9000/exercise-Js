

// Regegx

// let str = 'WeBBraiN';

// let newStr = str.match(/[A-Z]/g).join('');
// console.log(newStr);


// let son = 'hello 435nim6aga65s9f0s0f'

// let newStr = son.match(/[0-9]/g).join('')
// console.log(+newStr);


// let str = '23njjk6Add56JDOM'

// let newStr = str.match(/[A-Za-z]/g).join('')
// console.log(newStr);


// let str = 'IT brain IT';

// console.log(str.replace(/IT/g, 'Web'));






// Object => non- primitive

// let car = {
//     name: 'Sonata',
//     'full-name': 'geuhrguejhg'

// }

// console.log('Name:'+car.name);
// let key = 'full-name'
// console.log(car);
// console.log(car['full-name']);
// console.log(car[key]);
// console.log(car['full-name']);


// let car = {
//     name: 'Sonata',
//     color: 'black',
//     price: 1000
// }

// Object.freeze(car)   => FREEZE
// delete car.color
// car.color = 'White'
// car.engine = 1.6

// console.log(car);




// let car = {
//     name: 'Sonata',
//     color: 'black',
//     price: 1000
// }

// Object.seal(car)
// delete car.price
// car.color = 'white'     => ONLY can update
// car.engine = 1.5

// console.log(car);


// let arr = [ [ 'name', 'Sonata' ], [ 'color', 'black' ], [ 'price', 1000 ] ]

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));
// console.log(Object.fromEntries(arr));


// car.color = 'White'
// car.engine = 1.5
// delete car.price




// let car = {
//     name: 'Sonata',
//     color: 'black',
//     price: 1000
// }

// for(let key in car){
//     console.log(car[key]);    => getting key of obj and value
// }




// 1.

// let user = {
//     name: 'John',
//     surname: 'Smith',
// }

// user.name = 'Pete'
// delete user.name

// console.log(user);




// 2.

// let schedule = {name: 'Sardor'}

// const isEmpty = (obj) =>{
//     for(let key in obj){
//         return false
//     }return true
// }

// console.log(isEmpty(schedule));






// 3.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }


// First way =>

// const salary = (obj) => {
//     let sum = 0;

//     for(let key in salaries){
//         sum += salaries[key]
//     }
//     return sum
// }

// console.log(salary(salaries));



// Second way =>

// // let sum = 0;

// // for(let key in salaries){
// //     sum += salaries[key]
// // }

// // console.log(sum);



// 4.

// let menu = {
//     with: 200,
//     height: 100,
//     title: 'My menu'
// }

// const multiply = (obj) =>{
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             obj[key] *= 2
//         }
//     }
// }

// multiply(menu)
// console.log(menu);

 


function hey(a, b){
    return a * b
}

const result = hey(10, 5)
console.log(result);