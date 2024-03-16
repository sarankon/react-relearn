// Object

// create object
const customerObject = {
    name: 'Name',
    age: 0,
    address: 'Address'
}
console.log(customerObject)

// put variable to object
const user = 'User'
const age = 0
const address = 'Address'

const userObject = {
    name: user,
    age: age,
    address: address
}
console.log(userObject)

// use same variable name
const nameSameVariable = {
    user,
    age,
    address
}
console.log(nameSameVariable)

// with function
const objectWithFunction = {
    age,
    address,
    showData() {
        console.log('show data: ', age)
    }
}
objectWithFunction.showData()
