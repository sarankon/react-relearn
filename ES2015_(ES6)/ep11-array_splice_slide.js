// Splice, Slide

// Splice (ตำแหน่งที่จะลบ, จำนวนที่จะลบ) เปลี่ยนแปลงข้อมูลใน Array
// Splice (ตำแหน่งที่จะลบ, จำนวนที่จะลบ, สมาชิกที่ต้องการแทรก) เปลี่ยนแปลงข้อมูลใน Array
// Slide (ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย -1) ไม่เปลี่ยนแปลงข้อมูลใน Array

console.log('Array Splice')
const data1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(data1)

console.log(data1.splice(1, 1))
console.log(data1)

data1.splice(5, 1, 10) // ลบแล้วเพิ่มเข้าไป
console.log(data1)

console.log('Array Slide')
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const lastData = data2.slice(1, 3)

// Check Copy Value Not Reference Object
lastData[0] = 100
console.log(lastData)

console.log(data2)
