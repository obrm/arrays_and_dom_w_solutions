// Exercise 1: Get the element with the ID of "header"
let header = document.getElementById("header");
console.log(header);

// Exercise 2: Get all elements with the class name of "list-item"
let listItems = document.getElementsByClassName("list-item");
console.log(listItems);

// Exercise 3: Get the first element that matches the CSS selector of ".list-item"
let firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

// Exercise 4: Get all elements that match the CSS selector of ".list-item"
let allListItems = document.querySelectorAll(".list-item");
console.log(allListItems);

// Exercise 5: Get all child elements of the element with the ID of "main-content"
let mainContentChildren = document.getElementById("main-content").children;
console.log(mainContentChildren);

// Exercise 6: Get all descendant elements of the element with the ID of "main-content"
let mainContentDescendants = document.getElementById("main-content").getElementsByTagName("*");
console.log(mainContentDescendants);

// Exercise 7: Get the parent element of the first list item
let firstListItemParent = firstListItem.parentElement;
console.log(firstListItemParent);

// Exercise 8: Get the next element sibling of the first list item
let firstListItemNextSibling = firstListItem.nextElementSibling;
console.log(firstListItemNextSibling);

// Exercise 9: Create a new list item and add it to the end of the list
let newListItem = document.createElement("li");
newListItem.classList.add("list-item");
newListItem.innerText = "List item 5";
firstListItemParent.appendChild(newListItem);
console.log(firstListItemParent);

// Exercise 10: Modify the text of the first list item to "Modified list item 1"
firstListItem.innerText = "Modified list item 1";
console.log(firstListItem);

// Exercise 11: Modify the HTML of the first extra content to "<h2>Modified extra content</h2>"
let extraContent = document.querySelectorAll("#extra-content p")[0];
extraContent.innerHTML = "<h2>Modified extra content</h2>";
console.log(extraContent);

// Exercise 12: Remove the second extra content element
let secondExtraContent = document.querySelectorAll("#extra-content p")[1];
secondExtraContent.parentNode.removeChild(secondExtraContent);
console.log(document.querySelector("#extra-content"));

// Exercise 13: Modify the "src" attribute of an image with the ID of "my-image"
let myImage = document.getElementById("my-image");
myImage.setAttribute("src", "https://via.placeholder.com/150");
console.log(myImage);

// Exercise 14: Modify the "data-info" attribute of an element with the ID of "my-element"
let myElement = document.getElementById("my-element");
myElement.setAttribute("data-info", "new data");
console.log(myElement);

// Exercise 15: Add a new class "highlight" to an element with the ID of "main-content"
document.getElementById("main-content").classList.add("highlight");
console.log(document.getElementById("main-content"));

// Exercise 16: Remove the class "highlight" from an element with the ID of "main-content"
document.getElementById("main-content").classList.remove("highlight");
console.log(document.getElementById("main-content"));

// Exercise 17: Modify the background color of an element with the ID of "header" to "blue"
document.getElementById("header").style.backgroundColor = "blue";
console.log(document.getElementById("header"));
