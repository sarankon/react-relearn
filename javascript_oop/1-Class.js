// การสร้าง Class และ Property
console.log('Class')
class User {
   name = 'User1'
   password = '1234'
}

const user1 = new User()
console.log(user1.name)
console.log(user1.password)

// การสร้าง Constructor, Method และ Keyword this.
console.log('Constructor')
class Customer {
    name
    password

    constructor(name, password) {
        this.name = name
        this.password = password
    }

    showPassword() {
        console.log('Password: ' + this.password)
        return this.password
    }

    showName() {
        // ใช้ ` ` จัดการ Text กับ ${ } เพื่ออ้างถึงค่าในตัวแปรได้
        console.log(`Name: ${this.name}`)
    }
}

const customer1 = new Customer()
const customer2 = new Customer('Customer2', '1234')

console.log(customer1.name)
console.log(customer2.name)

customer2.showName()
customer2.showPassword()
