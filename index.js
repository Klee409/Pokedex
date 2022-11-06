// document.getElementById("count-el").innerText = 5
//Scrimba "Write your first JavaScript variable"
// var count = 0

//store variables in 'let' 

/* console.log(count)


// 1. Create a variable, myAge, and set its value to your age
// 2. Log the myAge variable to the console


// let myAge = 26
// console.log(myAge)


// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

/* let myAge = 26 //variable one = myAge created and intialized 
let humanDogRatio = 7 //Variable two = humanDogRatio created and intialized
let myDogAge = humanDogRatio * myAge //these two are multiplied and the result is stored in myDogAge, remember javascript problems are read from right to left. 
console.log(myDogAge) //lastly you console.log it 

let count = 5
count = 3
console.log(count) */

//7. Reassigning and Incrementing 


// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
//
/* let bonusPoints = 50 // set to 50 
console.log(bonusPoints)

bonusPoints = bonusPoints + 50 // increased by 50 so now it's 100
console.log(bonusPoints)

bonusPoints = bonusPoints - 75 // subtracted by 75 so now it's 25
console.log(bonusPoints)

bonusPoints = bonusPoints +  45 // increased by 45 and it's at 70
console.log(bonusPoints)

 8. Adding a button 
<!-- Create a INCREMENT button with the id="increment-btn" to HTML--> */

// 9. The onclick event listener

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

/* function increment() { //the piece of code in the body will be executed everytime this function is called.
console.log("The button was clicked")}

// 10. Using functions to write less code */


// Setting up the the race 🏎 🏎 🏎
/*
function countdown() {
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown() //calls the function 

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()

//This is much better than typing out all of the console.log(5) to console.log(1) each time as it makes the code cleaner and the actual less of a pain by storing it in a function. It compresses a code a lot. */

// 11. Write your first function 

// took a function and named it "callFor42" then in the body I ask it to console.log the number 42 then I call it by the name outside the body "callFor42 which spits out 42 in the console.log - done"
/* function callFor42() {
    console.log(42)
}

callFor42() */

// 12. Write a function that logs the sum 
/*
let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

//My solution involves taking a function and naming it sum then in the body console.logging all the laps togther and summing them up for the total.
/*
function sum() {
    console.log(lap1 + lap2 + lap3)
}

sum() 

//his way: */

/* function logLapTime() {
    let totalTime = lap1 + lap2 + lap3 //create a variable and assign it all three lap times summed up 
    console.log(totalTime) // console log the new variable totalTime 
}

logLapTime() // invoke the whole function */
/*13. Write a function that increments
let lapsCompleted = 0

function increments()
{lapsCompleted = lapsCompleted + 1
}

increments()
increments()
increments()

console.log(lapsCompleted) */

//14. Increment on Clicks



// my example: 
/*
let count = 0

function clickcount() {
    count = count + 1
    console.log(count)
} 


// 
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// his solution: */

//camelCase - capitalize second let of second word but not first of first word

// let countEl = document.getElementById("count-el") //pass in arguments, adding something into the parenthesis of the argument when we call it. we give the function some data to work with we're specifying the id of the element want to grab. The function is the chef that cooks the meal for you and the argument are the ingredients. 
/*
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count 
    console.log(count)
} 

// 15. Display the count above
 
//*16. The Document Object Model (The DOM aka how you use JS to modify a website)  Document - Because you're working with an HTML Document. It's of the datatype object. Model is a representation or modelation.  */

//*17. Display the count with innerText 

// grab the count-el element, store it in a countEl variable
/*
let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count 
}

// 18. Create the save button - 
// 1. Create a function, save(), which logs out the count when it's called

function save(){
    console.log(count)
}

save()

// 19. What is a string? Datatypes, like numbers. 

// 20. Write your first string variable 

let username = " per" //You can use single or double quotes, can't mix them. 
let message = "You have tree new notifications"
let messageToUser = message + ", " + username + "!"


console.log(messageToUser)


//21. Log a greeting to the console

/* let name = "Kevin" 
let greeting = "Hi, my name is " // could also add space via ""- as well 
let myGreeting = greeting + name 

console.log(myGreeting) */

// 22. Strings vs number In a wrestling game between a string and number the string always wins. So numbers are strings and concanate into "Hi, my name is 42"
/*
let name = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + name
// console.log(myGreeting)


let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints) //410 as these are strings not 14 (not numbers~strings)


console.log(4 + 5) // 9 - number
console.log("2" + "4") // "24" - string
console.log("5" + 1) // "51" - string
console.log(100 + "100") // "100100" - string 

// 23. Render a welcome message */

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
/*
let welcomeEl = document.getElementById("welcome-el") // <p id="welcome-el"></p> this is incorrect, remember the syntax to grab element by id
let name = "Kevin Lee"
let greeting = "Welcome back,"

welcomeEl.innerText = greeting + " " + name
 
// 24. Improve the message with string concatenation

welcomeEl.innerText = welcomeEl.innerText + "👋" //remember an emoji is just a string. 


// welcomeEl.innerText += "👋" alternative and faster way, takes the current value you have an adds this to it. Less clunky "+="
*/ 
// 25. Use plus equal for count (this saves time and is faster)
/*
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
let saveCount = count + " - "
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
saveEl.textContent += saveCount
}

// 26. Create the save feature 
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// 27. Debugging online 

// Google:
// innerText alternative mdn. We changed out that for textContent gave: textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements. Hence fixing the spacing error. 

// 28. Set the count to 0  */

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 // This resets the count to zero, it happens within the save function button we need and just take countEl.textContent from  the above increment function and set it zero. 
    countEl.textContent = 0
}


    
countReset()
countReset("save-el")

//29. Personalize and Download Your App 