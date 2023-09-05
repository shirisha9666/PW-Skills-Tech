// function abc() {
//     console.log("Hello World My name is Node.js")
// }
// module.exports.abc = abc

// if we have multiple function then we will use this METHODS;

// module.exports = {
//     node_teacher: function node_teacher() {
//         console.log("Hello My name is Node Teacher")
//     },
//     expressTeacher: function expressTeacher() {
//         console.log("Hello My name is Express Teacher")
//     }
// }

var arroy = (a, b) => {
    return a + b
}
var multi = (a, b) => {
    return a * b
}
// module.exports = arroy;

module.exports = {
    arroy: arroy,
    multi: multi
}

// another way to exports the things

exports.xyz = (a, b) => {
    return a + b
}

// how to read the file using fs