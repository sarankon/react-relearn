// Spread Operator
// ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งาน
// โดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร

const data1 = [1, 2, 3]
const data2 = [4, 5, data1]

console.log(data1)
console.log(data2)

// use Spread Operator (*Copy Data)
console.log('use Spread Operator')
const data3 = [4, 5, ...data1]
console.log(data3)

// check copy or reference same object
data1[0] = 0
console.log(data1)
console.log(data3)

// use Push
console.log('use Push')

const data4 = []
data4.push(...data1)
console.log(data4)

// check copy or reference same object
data1[0] = 1
console.log(data4)