// String
// - Multiline String สามารถทำงานกับข้อความยาว ๆ ได้ 
//   โดยกาารขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ `
// - Interpolation สามารถแทรงตัวแปรลงในพื้นที่ String ได้โดยใช้ ${ชื่อตัวแปร} ร่วมกับ `

const address = 'ชื่อลูกค้า ..... ที่อยู่ ..... เบอร์ .....'
console.log(address)

// Multiline String
const addressMltiline = `
ชื่อลูกค้า ..... 
ที่อยู่ .....
เบอร์ .....`
console.log(addressMltiline)

// Interpolation
let customerName = '..Interpolation..'
const addressInterpolation = `ชื่อลูกค่า ${customerName}`
console.log(addressInterpolation)