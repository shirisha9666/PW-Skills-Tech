// Take an example of Synchronous execution


function greed() {
    return function () {
        console.log("Hello Node.js Tutorials")
    }

}
const result = greed()
result()


// Take an example of asynchones function

// function asy() {
//     setTimeout(() => {
//         console.log("My name is shirisha")
//     }, 1000)
// }
// asy()

function asy() {
    console.log("I have been learing Node.js since 1 month")

}
setTimeout(asy, 1000)
console.log(" I am aslo learing javascript")