import readline from 'read-console-input'

const a = Number(readline('number: '))
let n = a

function counter(n) {
    let current = n
    for (let i = current - 1; i >= 1; i--) {
        current *= i
        console.log('current =', current)
        console.log('number =', i)
    }
    return current
}

console.log(counter(n));
