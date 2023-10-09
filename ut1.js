
let array = ["a0", "b1", "c2",]
console.log("first =", array)
function switchArray() {
    let oldAarry = array[0]
    array[0] = array[1]
    array[1] = oldAarry
    console.log("after =", array)
}

switchArray()