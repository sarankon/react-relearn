// Array Map
// วน Array เพื่อทำบ้างอย่างแล้วส่งค่ากลับออกไปเป็น Array

console.log('Array')
const number = [1, 2, 3, 4, 5]

const newNumber = number.map((element) => {
    element = 'Do some: ' + element
    return element
})

console.log(number)
console.log(newNumber)
// [ 1, 2, 3, 4, 5 ]
// [
//  'Do some: 1',
//  'Do some: 2',
//  'Do some: 3',
//  'Do some: 4',
//  'Do some: 5'
// ]

console.log('Array Object')
const data = [
    { name: 'a'},
    { name: 'b'}
]

const newData = data.map((element) => {
    let newValue = 'Name: ' + element.name
    return newValue
})
console.log(newData)
// [ 'Name: a', 'Name: b' ]