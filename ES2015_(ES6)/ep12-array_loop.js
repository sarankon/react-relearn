// Array Loop
// For Loop, For Each, For Of

const data = [1, 2, 3, 4, 5]

// For Loop
console.log('For Loop')
for(let index = 0; index < data.length; index++) {
    console.log(data[index])
    // break;
    // continue;
}

// For Each
console.log('For Each')
data.forEach(element => {
    console.log(element)
})
console.log(data)

// For Of
console.log('For Of')
for(let element of data) {
    element = 10
    // break;
    // continue;
}
console.log(data)

// Copy Value Not Reference Object