// Destructuring (การสลายโครงสร้าง)
// คือ การกำหนดค่าที่อยู่ใน Array หรือ Object ให้กับตัวแปร
// โดยใช้วิธีการตับคู่ตัวแปรกับค่าใน Array หรือ Object เช่น

// const color = ["ขาว", "ดำ"]
// const a = color[0] // a = ขาว
// const b = color[1] // b = ดำ

// ใช้งาน Destructuring
// const color = ["ขาว", "ดำ"]
// const [a, b] = colors

// Array
const colors = ['White', 'Black', 'Other']
console.log('Normal')
const w1 = colors[0]
const b1 = colors[1]
console.log(colors)
console.log(w1)
console.log(b1)

console.log('Destructuring Array')
const [w2, b2] = colors
const [,,o2] = colors // position at 3 of array
console.log(w2)
console.log(b2)
console.log(o2)

// Object
console.log('Destructuring Object')
const colorObject = {
    white: 'White',
    black: 'Black'
}

// Use same object variable name
const {white, black} = colorObject
console.log(white)
console.log(black)

// Object variable : new Variable
let {white:white2, black:black2} = colorObject
console.log(white2)
console.log(black2)

// **เป็นการ Copy Value ไม่ใช้ Reference Object
black2 = 'Black2'
console.log(colorObject)
