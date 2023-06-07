const isNumber = value => typeof value === 'number'

async function add (firstNumber, secondNumber) {
    if (!isNumber(firstNumber) ||  !isNumber(secondNumber)){
        throw 'firtsNumber e secondNumber devem ser números'
    }

    return firstNumber + secondNumber
}

add (4,8)   
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    })