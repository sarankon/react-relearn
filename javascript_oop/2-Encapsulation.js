class Customer {
    name
    _age
    #password
    static default = 'Static Variable'

    constructor(name, age, password) {
        this.name = name
        this._age = age
        this.#password = password
    }

    getName() {
        return this.name
    }

    setName(value) {
        this.name = value
    }

    get Age() {
        return this._age
    }

    set Age(value) {
        this._age = value
    }

    static getDefault() {
        return this.default
    }

}

const customer = new Customer()
customer.setName('Jumbo')
console.log(customer.getName())

customer.Age = 10
console.log(customer.Age)

console.log(Customer.default)
console.log(Customer.getDefault())