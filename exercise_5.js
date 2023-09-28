
// let nested = [1, [2, [3, [4]]]]

// console.log(nested.flat(Infinity).reduce((a, b)=> a+b));


// 1. onDelete 


// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.4, name: 'Damas'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Nexia'},
//     { id: 4, year: 1993, engine: 1.2, name: 'Gentra'},
//     { id: 5, year: 2012, engine: 1.5, name: 'Malibu'},
//     { id: 6, year: 2019, engine: 2.4, name: 'Cobalt'},
//     { id: 7, year: 2002, engine: 2.7, name: 'Cherry'}
// ]


// let sorted = cars.sort((a, b) => a.engine - b.engine)
// let sorted = cars.sort((a, b) => b.year - a.year)
// let sorted = cars.sort((a, b) => a.name.localeCompare(b.name))

// let filtered = cars.filter(value => value.year < 2000);
// let mapped = filtered.map((value) => {
//     return {...value, status: 'old'}      
// })
// console.log(mapped);

// const onDelete =(id) => {
//     return cars.filter((value)=> value.id !== id);
// }
// console.log(onDelete(5));



// 2.

// let arr = [20, 30, 17, 34, 66, 100]

//  console.log(arr.sort((a, b) => a-b).slice(-1));
// console.log(arr.sort((a, b) => a - b)[0]);





// 3. 

// let arr1 = [20, 30, 17, 34, 66, 100]

// const onDelete = (input) => {
//     return arr1.filter((value)=> value !== input)
// }
// console.log(onDelete(100));



// Callback function

console.log("Jack ma maslahatlar");
const list = [
    'yaxshi talaba boling',
    'togri boshliq tanlang va koproq xato qiling',
    'uzingiz ishlashni boshlang',
    'siz kuchli bolgan narsalarni qiling',
    'yoshlarga ivestitsiya qiling',
    'endi dam oling endi foydasi yoq'
];

function maslahatBering(a, callback){
    if(typeof a !== 'number') callback('insert a number', null)
    else if(a<= 20) callback(null, list[0])
else if(a > 20 && a <= 30) callback(null, list[1])
else if(a > 30 && a <= 40) callback(null, list[2])
else if(a > 40 && a <= 50) callback(null, list[3])
else if(a > 50 && a <= 60) callback(null, list[4])
else{
    callback(null,list[5])
}
}

maslahatBering(10,(err, data) =>{
    if(err) console.log("ERROR:", err)
    console.log("javob:",data);
})