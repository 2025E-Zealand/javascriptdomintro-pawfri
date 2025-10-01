
console.log("Skriv dit Javascript her")

// TASK 1

// Get Element By Id Metode
let myElement = document.getElementById("one"); 
console.log(myElement)

// Get Element By Tag Name
let myList = document.getElementsByTagName("li")
console.log(myList)

// Get Element By Class Name
let myClass = document.getElementsByClassName("hot")
console.log(myClass)

// TASK 2

// Find a specific item, change the “class” attribute on this item
let changeAttribute = document.getElementById("one");
changeAttribute.setAttribute("class","cool");

// Find a specific item, add the attribute hidden= true” to hide the element I the browser
// Hidden id 'two': pine nuts
let hideAttribute = document.getElementById("two");
hideAttribute.hidden = true;

// Find a specific nodes, e.g. all items with class=” unhealty try to change the class attribute
let UnhealthyItem = Array.from(document.getElementsByClassName("unhealthy"));

UnhealthyItem[0].setAttribute("class", "hot");
UnhealthyItem[1].setAttribute("class", "hot");

console.log("slut på JavaScript")
