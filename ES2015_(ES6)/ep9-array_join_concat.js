// Join, Concat

// Join จะแปรสมาชิกให้กลายเป็น String แล้วคันแต่ละค่าด้วย ,
const data1 = [1, 2, 3]
console.log(data1.join()) // Default ,
// 1,2,3
console.log(data1.join('*')) // เปลี่ยนตัวคันเป็น *
// 1*2*3 

// Concat เป็นการเอา Array 2 ตัวมาต่อกัน
const data2 = [4, 5, 6]
console.log(data2.concat(data1))