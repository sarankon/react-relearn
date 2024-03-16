// Push, Pop, Shift, Unshift

// Push, Pop ใช้จากท้าย
console.log('Array Push') // เพิ่มสมาชิกต่อท้าย
const data1 = [1, 2, 3]

data1.push(4)
console.log(data1)

data1.push(...[5, 6])
console.log(data1)

console.log('Array Pop') // เอาสมาชิกตัวท้ายออก
const data2 = [1, 2, 3]
data2.pop()
console.log(data2)

// Shift, Unshift
console.log('Array Shift') 
const data3 = [1, 2, 3]
data3.shift() // เอาสมาชิกตัวหน้าออก
console.log(data3)

console.log('Array Unshift') 
data3.unshift(0)
console.log(data3)

