// Arrow Function
// เป็นรูปแบบการเขียน Function ให้มีความกระชับมากยิ่งขึ้น

// normal
function fooBar1(foo, bar) {
    return foo + bar
}
console.log('fooBar1: ', fooBar1('Hello', 'World'))

// arrow function
fooBar2 = (foo, bar) => foo + bar
console.log('fooBar2: ',fooBar2('Hello', 'World'))

fooBar3 = (foo, bar) => {
    return foo + bar
}
console.log('fooBar3: ',fooBar3('Hello', 'World'))