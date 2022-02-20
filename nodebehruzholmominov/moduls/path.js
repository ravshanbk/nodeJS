const path = require("path")

//Base name

console.log(path.basename(__filename))
console.log(path.dirname(__filename))

console.log(path.extname(__filename))
console.log(path.isAbsolute(__filename))
console.log("joiin" + path.join(__filename))
console.log("normalize" + path.normalize(__filename))

console.log("resolve" + path.resolve(__filename))
console.log("toNamespce Path" + path.toNamespacedPath(__filename))
console.log("??????????????????????????");
// Object
const pathObjectjo = path.parse(__filename);
console.log(pathObjectjo.dir);

//Stringkontektsiya
console.log(path.join(__dirname, "something", "bllablaa", "anotherSomething.js"))