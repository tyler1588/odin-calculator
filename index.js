//Display input
displayArray = []

//Handle user input
document.querySelectorAll('div.clickElement').forEach(item => {
  item.addEventListener('click', event => {
    itemClicked = item.children[0].innerHTML
    if (itemClicked === "AC"){
      displayArray = []
      updateDisplay();
    }
    else if (itemClicked === "DEL") {
      deleteLastItem();
      updateDisplay();
    }
    else if (itemClicked === "="){
      compute();
    }
    else{
      displayArray.push(itemClicked)
    }
    updateDisplay();
  })
})

function updateDisplay(){
  document.querySelector("p.display-numbers").innerHTML = displayArray.join("");
}

function deleteLastItem (){
  displayArray.pop()
}

function compute(){
  output = displayArray[0];
  for (var i = 0; i < displayArray.length; i++){
    if (displayArray[i] === "×"){
      output = output * displayArray[i+1]
    }
    if (displayArray[i] === "+"){
      output = Number(output) + Number(displayArray[i+1])
    }
    if (displayArray[i] === "-"){
      output = output - displayArray[i+1]
    }
    if (displayArray[i] === "÷"){
      output = output / displayArray[i+1]
    }
  }
  output = Math.round(output * 100) / 100;
  if (isNaN(output)){
    output = 0
  }
  displayArray = [output]
  updateDisplay();
}





