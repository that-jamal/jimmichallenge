import readline from 'read-console-input'

const a = Number(readline('number: '))
let n = a
function counter(n) {
    let a = 0, b = 1, c, i;
    let all = [a];
    for (i = 1; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        all.push(a);
        //console.log(a + "a", b + "b", c + "c");
    }
    console.log(a, b, c, "e");
    //console.log("out", all);
    return all;
}
console.log("🙌", counter(n), "🙌");
