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
      preCompute();
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

function preCompute(){
  computeArray = []
  tempValue = ""
  for (var i = 0; i < displayArray.length; i++){
    if (!isNaN(Number(displayArray[i])) || displayArray[i] === "."){
      tempValue = tempValue + displayArray[i]
    }
    else {
      computeArray.push(Number(tempValue))
      tempValue = ""
      computeArray.push(displayArray[i])
    }
  }
  computeArray.push(Number(tempValue))
  compute();
}

function compute(){
  output = computeArray[0];
  for (var i = 0; i < computeArray.length; i++){
    if (computeArray[i] === "×"){
      output = output * computeArray[i+1]
    }
    if (computeArray[i] === "+"){
      output = Number(output) + Number(computeArray[i+1])
    }
    if (computeArray[i] === "-"){
      output = output - computeArray[i+1]
    }
    if (computeArray[i] === "÷"){
      output = output / computeArray[i+1]
    }
  }
  output = Math.round(output * 100) / 100;
  if (isNaN(output)){
    output = 0
  }
  displayArray = [output]
  updateDisplay();
}





