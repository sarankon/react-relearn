// ค้นหาข้อมูลใน Array
// indexOf(value) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// find(value) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex(value) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ['red', 'green', 'blue', 'white']
console.log(colors)

console.log('indexOf()')
console.log(colors.indexOf('green'))
console.log(colors.indexOf('black'))

// predicate
console.log('find()')
console.log(colors.find((element) => element === 'green'))
console.log(colors.find((element) => element === 'black'))

console.log('findIndex()')
console.log(colors.findIndex((element) => element === 'green'))
console.log(colors.findIndex((element) => element === 'black'))

