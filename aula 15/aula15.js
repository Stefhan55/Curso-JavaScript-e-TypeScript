//               0123456789
let umaString = " Um Texto ";
console.log(umaString.concat(' em ', ' um ', ' lindo dia.'));
console.log(umaString+ ' em um lindo dia');
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um','Outra'));
console.log(umaString.replace(/r/g ,'#'));
console.log(umaString.length);
console.log(umaString.slice(1,9));
console.log(umaString.slice(-6));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());