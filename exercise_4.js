

// methods in obj 
// this

// const obj ={
//     name: 'WBA',
//     title: 'Academy',

//     test: function(){
        // console.log('hello');
        // console.log(this.name + ' ' + this.title);
//         console.log(this);
//     }
// }

// console.log(obj.name);
// obj.test()





// Getting clone from obj

// const obj1 = {
//     name: 'WBA',
// }

// const obj2 = {
//     name: 'WBA',
// }

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);


// const obj1 = {
//     name: 'WBA',
//     title: 'Academy'
// }
// let clone = Object.assign({}, obj1)
// clone.status = 'Student';

// console.log(clone);
// console.log(obj1);





//  Arrayy => Container
// Object => like a car

// let arr1 = [100,'hello'];
// let arr2 = arr1

// arr2[2] = 'WBA'

// console.log(arr1 == arr2);
// console.log(arr1 === arr2);

// console.log(arr1);


// methods of Array

// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['d', 'e', 'f'];

// console.log(arr1.concat(arr2));


// let arr = ['Valisher', 'Sardorbek', 'Zuhriddin'];
// arr.slice(0,2)
// arr.splice(0,2)


// let str = 'WEBBRAIN';
// let toArray = str.split('')
// let toRev = toArray.reverse()
// let toJoin = toRev.join('')

// console.log(str.split('').reverse().join(''));


// let num = 123456789;
// console.log(num.toString().split('').reverse().join(''));



// let arr = ['a', 'b', 'c', 'A', 'B', 'C'];
// let arr = ['Sardor', 'Zuhriddin', 'Shaxboz', 'Diora'];

// arr.map( (value, index, array)=> {
    // console.log(value);
    // console.log(index);
//     console.log(array);
// })

// let str = 'Webbrain'

// str[i] => value
// i => index
// str => array


// let arr = ['Sardor', 'Zuhriddin', 'Shaxboz', 'Diora'];

// let newArr = arr.map( (value, index, array) => {
//     return 'Webbrain' + index
// })
// console.log(newArr);

// let newArr = arr.forEach((value, index, array)=>{
    
//     console.log(value);
// })



// let arr = [2,4,5,3,8,5,6,8,0,3,100,12]

// first way =>   

// let filtered = arr.filter((value, index) =>value   !== 3) 

// console.log(filtered);

// second way =>  

// let newArr = []
// arr.map((value)=> {
//     if(value > 10){
//         // console.log(value);
//         newArr.push(value)
//     }
// })
// console.log(newArr)


// let arr = [1,[2],[2,[2],[1,[3]]]];

// let found = arr.find((value, index)=> value == 'Sardor')
// let found = arr.findIndex((value, index)=> value ==='Diyora' )


// let arr = [2, 13, 4, 6, 7, 43,]
// let checking = arr.fill('Students')

// console.log(checking);


// let str = 5555
// let arr = [5,5,5,5]

// let toArray = str.split('');
// let sum = toArray.reduce((initial, total) => initial + +total, 0)


// console.log(num.toString().split('').reduce((inital, total) => inital + +total, 0));
// console.log(arr.reduce((init, total)=> init + total, 100));
// let sum = 0;


// for(let i = 0; i < str.length; i++){
//     // console.log(str[i]);
//     sum += +str[i]
// }

// console.log(sum);










// let checking = arr.some((n) => n < 1)
// let checking = arr.every( (n) => n < 67)
// console.log(arr.flat(Infinity));

// console.log(arr1.concat(arr2)); => arrayga malumot qoshish
// console.log(arr.join(' ')); => arrayni stringa ogirish
// slice() => arraydan malumot kesib olish, 2ta qiymat oladi, 1- index, 2- length, splice dan farqi asosiy arrayga tasir qilmaydi ctrl+c
// splice() => arraydan malumot kesib olish, 2ta qiymat oladi 1- index, 2- length, slice dan farqi asosiy arrayga tasir qiladi, ctrl+x
// console.log(str.split('')); => stringi arrayga ogiradi
// reverse() => arrayni teskari qilib beradi
// split('') => stringni arrayga ogiradi

// arr.push('Hamidjon') => array oxiridan mlumot qoshish
// arr.pop() => array oxiridan bitta malumot qoshish
// arr.unshift('Yasharjon') => array boidan malumot qoshish
// arr.shift() => array boshidan bitta malumot uchirish

// console.log(arr.sort((a, b) => a.localeCompare(b))
// sort(() =>) => 