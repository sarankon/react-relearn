// Default Parameter

function getDataCustomer(name, address) {
    console.log('Name: ' + name + ', Address: ' + address)
}

getDataCustomer()
getDataCustomer('CName', 'CAddress')


function getDataCustomerDefault(name = '', address = '') {
    console.log('Name: ' + name + ', Address: ' + address)
}

getDataCustomerDefault()
getDataCustomerDefault('CName')