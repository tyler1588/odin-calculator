//Display input
displayArray = []

//Handle user input
document.querySelectorAll('div.clickElement').forEach(item => {
  item.addEventListener('click', event => {
    itemClicked = item.children[0].innerHTML
    if (itemClicked === "AC"){
      array = []
    }
    else if (itemClicked === "DEL") {
      deleteLastItem();
    }
    else {
      displayArray.push(itemClicked)
    }
    document.querySelector("p.display-numbers").innerHTML = displayArray.join("");;
  })
})

function deleteLastItem (){
  displayArray.pop()
}





