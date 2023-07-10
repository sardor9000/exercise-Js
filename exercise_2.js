// string => '', "", ``


// let str = 'hello';

// console.log(str[str.length -1]);


// let name = 'John' 
// let status = 'Developer'
// let age = 25
// let str = `My name is ${name} ${status} ${age}`

// console.log(str);


// String methods 

// let str = 'Webbrain';

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.startsWith('W'));
// console.log(str.endsWith('n'));
// console.log(str.padStart(12,'a'));
// console.log(str.padEnd(15, '..............'));
// console.log(str.replace('Web', 'IT'));
// console.log(str.repeat(10));
// console.log(str.concat(str2, 'IT school'));
// console.log(str.includes('bra'));
// console.log(str.indexOf('i'));
// console.log(str.lastIndexOf('b'));
// console.log(str.charAt(4));
// console.log(str.substring(2,5));
// console.log(str.slice(1,5));
// console.log(str.substr(0,3));





// 1.

// let str = '       FoziL          ';

// let trimedStr = str.trim();
// let lastLetter = trimedStr.slice(-1);
// let isLastLetterL = lastLetter.toLowerCase() === 'l';

// console.log(isLastLetterL);


// 2.

// let str1 = 'Web'
// let str2 = 'Brain'

// let hey = str1;
// str1 = str2;
// str2 = hey;

// console.log(str1);
// console.log(str2);

// let name = 'Ahmadullaev';
// let surname = 'Sardor';

// let temp = name;
// name = surname;
// surname = temp;

// console.log(name);
// console.log(surname);

// let status = 25;
// let age = 'Developer'

// let foo = status;
// status = age;
// age = foo

// console.log(status);
// console.log(age);




// 3. 


// let year = 2012;

// year % 4 === 0 ? console.log('kabisa year') : console.log('not kabisa year');;



// let yil = 2001;

// if(yil % 4 === 0){
//     console.log('kabisa yili');
// }else {
//     console.log('kabisa yili emas');
// }


// 4.

// let son = '23425436';

// let raqam = +son;
// let hey = Math.max(...son)

// console.log('max-', hey);


// 5.


// let son = '4366547621';

// let num = +son;
// let foo = Math.min(...son)

// console.log('min-', foo);


// 6.


// let str = '#fozil#web#brain#'
// let newStr = '';

// for(let i = 0; i <str.length; i++){
//     if(str[i] === '#'){
//        newStr += '('
//     }else{
//       newStr =+ str[i]
//     }
// }

// console.log(newStr);



// 7.


// let str = 'WeBbraIN';
// let newStr = '';
// for(let i = 0; i < str.length; i++){
//     let foo = str[i];
//     if(foo === foo.toUpperCase() && foo !== foo.toLowerCase() ){
//         newStr += foo
//     }
// }

// console.log(newStr);


