// Rest Parameter
// ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function 
// โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...

function sumation1(a, b) {
    return a + b
}

function sumation2(...numberArr) {
    let sum = 0
    // numberArr will be Array
    for(let num of numberArr) {
        sum += num
    }
    return sum
}

console.log(sumation1(1, 2))
console.log(sumation2(1, 2, 3))
