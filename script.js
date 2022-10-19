// console.log("hello world")

document.write("<h1> this is the conditionals demo</h1>")

// if(10>5){
//     alert("Correct, 10 is greater than 5!")
// }
// else{
//     alert("you are wrong, dumbass")
// }

// var mynum = prompt('choose a number between 1 and 10 (make sure your answer is a number not words.)')

// if(mynum < 5){
//     alert("your number is less than 5")
// }
// else if(mynum > 5){
//     alert("your number is greater than 5")
// }
// else{
//     alert("your number is 5")
// }

alert("I am magic, I can guess the number you are thinking of in 2 guesses")

var num = prompt("try me, pick a number between 1 and 20, dont cheat, make sure it is a numeral entry not words")

if(num > 5 && num < 15){
    alert("you chose a number somewhere in the middle didnt you?")
}
else if(num < 5){
    alert("I know you piced a number that is small")
}
else if(num = 5){
    alert("you are trying to be tricky aren't you?")
}
else if(num > 15){
    alert("you chose a high number huh?")
}
else if(num = 15){
    alert("you are trying to be tricky aren't you")
}
else{
    alert("cheater cheater bum bum eater")
}
document.write("<h2> your number is</h2>")

document.write(num)