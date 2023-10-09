let n = 6

function counter(n) {
    let current = 1

    if (n === 0)
        current = 1
    for (let i = 2; i <= n; i++)
        current = current * i
    console.log('current =', current)
    console.log('number =', n)
    return current
}
console.log(counter(n));
