// Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// Create a variable, count, that starts at 0
let count = 0
// Create a function, increment(), that increments the count variable when the increment button is clicked
function increment() {
    count += 1
    // Render the count variable in the countEl using textContent
    // innerText is also an option but textContent is preferred
    // innerText vs textContent: textContent is faster and more secure. innerText is aware of styling and will not return the text of hidden elements, while textContent will return all text regardless of styling.
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
