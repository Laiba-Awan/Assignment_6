const weight = document.querySelector(".weight");
const heightFt = document.querySelector(".height-ft");
const heightIn = document.querySelector(".height-in");
const outCome = document.querySelector(".outcome");
const _status = document.querySelector(".status");

// FUNCTION TO CALCULATE BMI-------
function Calculate() {
  if (weight.value == "") {
    alert("All Input Fields need to be filled!");
  } else {
    const hFt = heightFt.value * 0.3048;
    const hIn = heightIn.value * 0.0254;
    const tHeightsq = (hFt + hIn) * (hFt + hIn);
    const bmi = (weight.value / tHeightsq).toFixed(2);
    outCome.classList.add("outcome1");
    outCome.textContent = `Your Body Mass Index = ${bmi}`;
    checkBMIStatus(bmi);
  }
}

// FUNCTION TO CHECK STATUS-------
function checkBMIStatus(bmi) {
  let status = "";
  if (bmi < 18.4) {
    status = "Underweight";
    outCome.style.backgroundColor = "yellow";
    _status.style.backgroundColor = "yellow";
  } else if (bmi > 18.4 && bmi <= 24.9) {
    status = "Normal";
    outCome.style.backgroundColor = "lightgreen";
    _status.style.backgroundColor = "lightgreen";
  } else if (bmi > 24.9 && bmi <= 39.9) {
    status = "Overweight";
    outCome.style.backgroundColor = "Orange";
    _status.style.backgroundColor = "Orange";
  } else if (bmi >= 40.0) {
    status = "Obese";
    outCome.style.backgroundColor = "red";
    _status.style.backgroundColor = "red";
  }
  _status.classList.add("stts");
  _status.textContent = `This is considered ${status}`;
}
