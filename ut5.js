import readline from 'read-console-input'
let answer = (Math.round(Math.random() * 100))
//console.log(answer)
let trys = 0

function numGuess() {
    console.log("===============~The guess game~===============")
    const guess = Number(readline('guess between 0 and 100: '));
    trys++

    if (guess == answer) {

        console.log("!!!!wow ur answer", answer, "is right!!!!")
        if (trys == 0) trys = 1
        console.log("you got this in", trys, "try's")

    } else {
        if (guess <= answer) {
            console.log("the answer is more then", guess)
        }
        if (guess >= answer) {
            console.log("the answer is less then", guess)
        }
        console.log("this is your", trys, "try")
        numGuess()
    }

}
numGuess()