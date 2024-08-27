// Write your JavaScipt code below this line. 

const mainTitle = document.querySelector("#main-title")
mainTitle.textContent = "Welcome to Our Cat Adoption Center"

const description = document.querySelector("#description")
description.textContent = "Find your purrfect companion!"

const cat1Button = document.querySelector("#cat-1-button")
cat1Button.addEventListener("click", () => {
    const cat = document.querySelector("#cat-1")
    alert("Congrats on adopting your new friend!")
    cat.remove()
    console.log("clicked the first cat")
})

const cat2Button = document.querySelector("#cat-2-button")
cat2Button.addEventListener("click", () => {
    const cat = document.querySelector("#cat-2")
    alert("Congrats on adopting your new friend!")
    cat.remove()
    console.log("clicked the second cat")
})

const cat3Button = document.querySelector("#cat-3-button")
cat3Button.addEventListener("click", () => {
    const cat = document.querySelector("#cat-3")
    alert("Congrats on adopting your new friend!")
    cat.remove()
    console.log("clicked the third cat")
})


function areaRectangle (length, width) {
    return length * width
}

console.log(areaRectangle(5, 10))

function divide (twelve, two) {
    return twelve / two
}

console.log(divide(12, 2))

