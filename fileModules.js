// 
const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','sub','text')
console.log(filePath);
const absolute = path.resolve(__dirname,'content','sub','text')
console.log(absolute);