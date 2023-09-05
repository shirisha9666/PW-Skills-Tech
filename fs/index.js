const fs = require("fs")


/**this read the file async way
console.log("Hello My name is Javascript")

fs.readFile("./text.txt", (err, content) => {
    if (err) {
        console.error(err)
    }
    console.log("Read the file" + content)
})

console.log("Hello my name is Express.js")*/


/**this read the file sync way

console.log(" hello i am the first class student")

const content1 = fs.readFileSync("./text.txt")
console.log("hello world" + content1)

console.log("I am the third class student")*/

// write the file async way
/**console.log("person1")
fs.writeFile("hello.txt", "Hai I am the New File", (err) => {
    if (err) {
        console.error(err)
    }
    console.log("sucefully created the file")
})
console.log("person2")**/

// write the file sync way

console.log("person1")
fs.writeFileSync("sync.txt", "write the file sync way")
console.log("sucefull updeaded sync file")
console.log("person3")