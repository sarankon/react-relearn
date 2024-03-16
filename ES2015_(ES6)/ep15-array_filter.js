// Array Filter 
// ส่งผลการ Filter ออกไปเป็น Array

const data = [1, 2, 3, 4, 5, 6]

// short form
const filterData1 = data.filter((element) => element != 3)
console.log(filterData1)

// long form
const filterData2 = data.filter((element) => {
    if(element == 3) {
        return false
    } else {
        return true
    }
})
console.log(filterData2)