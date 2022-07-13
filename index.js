// Footer Date
const footerDate = new Date().getFullYear();
document.querySelector('span.current-year').innerHTML = footerDate;

// Display input
let displayArray = [];

function updateDisplay() {
  document.querySelector('p.display-numbers').innerHTML = displayArray.join('');
}

function deleteLastItem() {
  displayArray.pop();
}

function compute(computeArray) {
  let output = computeArray[0];
  for (let i = 0; i < computeArray.length; i += 1) {
    if (computeArray[i] === '×') {
      output *= computeArray[i + 1];
    }
    if (computeArray[i] === '+') {
      output = Number(output) + Number(computeArray[i + 1]);
    }
    if (computeArray[i] === '-') {
      output -= computeArray[i + 1];
    }
    if (computeArray[i] === '÷') {
      output /= computeArray[i + 1];
    }
  }
  output = Math.round(output * 100) / 100;
  if (Number.isNaN(output)) {
    output = 0;
  }
  displayArray = [output];
  updateDisplay();
}

function preCompute() {
  const computeArray = [];
  let tempValue = '';
  for (let i = 0; i < displayArray.length; i += 1) {
    if (!Number.isNaN(Number(displayArray[i])) || displayArray[i] === '.') {
      tempValue += displayArray[i];
    } else {
      computeArray.push(Number(tempValue));
      tempValue = '';
      computeArray.push(displayArray[i]);
    }
  }
  computeArray.push(Number(tempValue));
  compute(computeArray);
}

// Handle user input
document.querySelectorAll('div.clickElement').forEach((item) => {
  item.addEventListener('click', () => {
    const itemClicked = item.children[0].innerHTML;
    if (itemClicked === 'AC') {
      displayArray = [];
      updateDisplay();
    } else if (itemClicked === 'DEL') {
      deleteLastItem();
      updateDisplay();
    } else if (itemClicked === '=') {
      preCompute();
    } else {
      displayArray.push(itemClicked);
    }
    updateDisplay();
  });
});
