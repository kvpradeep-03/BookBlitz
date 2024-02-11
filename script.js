//selecting popup-box & popup-overlay & button(add-popup)
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

// selecting cancel button
var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})

//selecting  container,add-book,book-title-input,book-author-input,book-description-input

var container = document.querySelector(".container")
var addbook = document.querySelector("#add-book")
var booktittleinput = document.querySelector("#book-title-input")
var bookauthorinput = document.querySelector("#book-author-input")
var bookdescriptioninput = document.querySelector("#book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    // template of input's
    div.innerHTML = `<h2>${booktittleinput.value}</h2>
    <h5><i>${bookauthorinput.value}</i></h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

    
})
//delete Action
function deletebook(event){
    event.target.parentElement.remove()
}
