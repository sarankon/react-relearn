// Block Scope (let/constant)
// - การประการใช้งาน let แทน var 
//   เนื่องจาก var เป็นตัวแปรที่ถูกมองเป็น global variable 
//   สามารถทำงานทะลุขอบเขต (block scope) ได้
// - การใช้ const ในการประกาศตัวแปรที่เก็บค่าคงที่

// var 
var x = 10 // global
if(true) {
    var y = 50 // global
    console.log('y = ' + y)

    let z = 10 // block scope
    const c = 10 // block scope
}
console.log('y = ' + y)

// error because out of scope
// console.log('z = ' + z) 
// console.log('c = ' + c) 

// let (const is mean value not change)
let l1 = 5
console.log('l1 :' + l1)
if(true) {
    let l1 = 10
    console.log('l1 :' + l1)
}
console.log('l1: ' + l1)

let l2 = 5
console.log('l2 :' + l2)
if(true) {
    l2 = 10
    console.log('l2 :' + l2)
}
console.log('l2: ' + l2)

const c1 = 5
// assigment to constant variable error
// c1 = 10 