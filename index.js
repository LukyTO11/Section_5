/* lesson 5 */

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener")
// })


/* lesson 6 */

// let box = document.getElementById("box")

// box.addEventListener("click", function() {
//     console.log("I want to open the box!")
// })


/* lesson 7 & 8 */

// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked!")
// })


/* lesson 9 */

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

// shippingCost = 15
// shippingTime = "7-14 days"

// const fullPrice = basePrice - discount + shippingCost

// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)


/* lesson 10, 11, 13, 14 & 15 */

/* let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>"
} */


/* lesson 16 & 17 */


// const containerEl = document.getElementById("container")

// containerEl.innerHTML += "<button onclick='buy()'>Buy!</button>"

// function buy() {
//     containerEl.innerHTML += "<p>Thank you for buying!</p>"
// }


/* lesson 18, 19, 20, 21, 22, 23, 24 */

/* let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
                `
    }
    ulEl.innerHTML = listItems
} */


/* lesson 25, 26 & 27*/

// const recipient = "James"
// const sender = "Luky TO"

// const email = `
// Hey, ${recipient}!

// How is it going?

// Cheers ${sender}`

// console.log(email)


/* lesson 28-36 */

/* let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify (myLeads))
    renderLeads()

    console.log( localStorage.getItem("myLeads"))
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
                <li>
                    <a target='_blank' href='${myLeads[i]}'>
                        ${myLeads[i]}
                    </a>
                </li>
                `
    }
    ulEl.innerHTML = listItems
} */


/* lesson 37 */

// const credits = 0

// if (credits) {
//     console.log("Let's play🎰")
// } else {
//     console.log("Sorry, you have no credits😭")
// }

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN


/* lesson 38 */

// let trueOfFalse = Boolean("")
// console.log(trueOfFalse)

// console.log(Boolean(""))     // false
// console.log(Boolean("0"))    // true
// console.log(Boolean("100"))  // true
// console.log(Boolean(null))   // false
// console.log(Boolean([0]))    // true
// console.log(Boolean(-0))     // false



/* lesson 39-42 */


/* let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
                <li>
                    <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
                </li>
                `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
    console.log("double click!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify (myLeads))
    render(myLeads)
})
 */


/* lesson 43 & 44 */

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     welcomeEl.textContent =`${greeting}, ${name} 👋`
// }

// greetUser("Howdy", "Luky TO")


/* lesson 45 */

// function add(num1, num2) {
//     return num1 + num2
// }

// console.log( add(4, 9) )
// console.log( add(254, 46) )


/* lesson 46 */

// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments

// //.             parameters
// function greetUser(greeting, name) {
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// //.             arguments
// greetUser("Howdy", "Luky TO")

// function add(num1, num2){
//     return num1 + num2
// }

// add(3, 4)


/* lesson 47 */

// function getFirst(arr){
//     return arr[1]
// }

// let firstCard = getFirst([10, 2, 5])

// console.log(firstCard)


/* lesson 48-53 */

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })

})


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                       ${leads[i]}
                </a>
            </li> 
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    console.log("double click!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
