// Array Reduce
// 

const number = [1, 2, 3, 4, 5, 6]

const arrMap = number.map((e) => 0)
const arrFilter = number.filter((e) => e != 3)
console.log('Map :', arrMap)
console.log('Filter :', arrFilter)


// array.reduce(()=>{}, initValue)

const reduce = number.reduce((initValue, element) => {
   // process 
   initValue += element
   return initValue // (2) ส่งกลับไปที่ initValue เพื่อวนรอบต่อไป ถ้าไม่ส่งอะไรออกไปจะได้ undefined ในรอบต่อ ๆ ไป
}, 0) // (1) กำหนดค่าเริ่มต้นไปลงที่ initValue ในครั้งแรก
console.log(reduce)


// Example use case
console.log('Example use case')
const cart = [
    { name: 'item 1', price: 50 },
    { name: 'item 2', price: 50 },
    { name: 'item 3', price: 50 },
]

const total = cart.reduce((initValue, element) => {
    initValue += element.price
    return initValue
}, 10)
console.log(total)