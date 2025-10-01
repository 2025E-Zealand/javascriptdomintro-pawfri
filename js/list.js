
console.log("Skriv dit Javascript her")

// TASK 1
console.log("------ TASK 1 ------");

// Get Element By Id Metode
let myElement = document.getElementById("one"); 
console.log(myElement.textContent)

// Get Element By Tag Name
let myList = document.getElementsByTagName("li")
console.log(myList)

// Get Element By Class Name
let myClass = document.getElementsByClassName("hot")
console.log(myClass)

// TASK 2
console.log("------ TASK 2 ------");
console.log("Nothing to log, only visual changes to page");

// Find a specific item, change the “class” attribute on this item
let changeAttribute = document.getElementById("one");
changeAttribute.setAttribute("class","cool");

// Find a specific item, add the attribute hidden= true” to hide the element I the browser
// Hidden id 'two': pine nuts
let hideAttribute = document.getElementById("two");
hideAttribute.setAttribute("hidden", "true");

// Find a specific nodes, e.g. all items with class=” unhealty try to change the class attribute
let UnhealthyItem = Array.from(document.getElementsByClassName("unhealthy"));

UnhealthyItem[0].setAttribute("class", "hot");
UnhealthyItem[1].setAttribute("class", "hot");

// TASK 3
console.log("------ TASK 3 ------");

// Find an item in the list. Use the ParentNode to get the parent node
let honeyItem = document.getElementById("three");
let honeyParent = honeyItem.parentNode;
console.log(honeyParent);

// Find the FirstChild and LastChild in the list, try to change the class attribute to change the 
// style so you can see that you have found the right node.
let honeyParentFirstChild = honeyParent.firstElementChild;
let honeyParentLastChild = honeyParent.lastElementChild;
console.log(honeyParentFirstChild)
console.log(honeyParentLastChild)

honeyParentFirstChild.setAttribute("class", "hot")
honeyParentLastChild.setAttribute("class", "cool")

// TASK 4
console.log("------ TASK 4 ------");

console.log("slut på JavaScript")
