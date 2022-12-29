// grab the save-el paragraph and store it in a variable saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //passing an argument
let count = 0 //initialize count as 0

//camelCase Naming convention in javascript
console.log(countEl)

function increment(){ // listen for clicks on increment button
    count += 1 //increment count when button is clicked
    countEl.textContent = count //count-el in html reflects new count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
}
save()

