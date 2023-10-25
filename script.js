const weight = document.querySelector(".weight");
const heightFt = document.querySelector(".height-ft");
const heightIn = document.querySelector(".height-in");
const outCome = document.querySelector(".outcome");
const _status = document.querySelector(".status");

// FUNCTION TO CALCULATE BMI-------
function Calculate() {
  if (weight.value == "") {
    alert("All Input Fields need to be filled!");
    alert.classList.add("alert.js");
  } else {
    const hFt = heightFt.value * 0.3048;
    const hIn = heightIn.value * 0.0254;
    const tHeightsq = (hFt + hIn) * (hFt + hIn);
    const bmi = (weight.value / tHeightsq).toFixed(2);
    outCome.classList.add("outcome1");
    outCome.textContent = bmi;
    checkBMIStatus(bmi);
  }
}

// FUNCTION TO CHECK STATUS-------
function checkBMIStatus(bmi) {
  let status = "";
  if (bmi < 18.4) status = "Underweight";
  else if (bmi > 18.4 && bmi <= 24.9) status = "Normal";
  else if (bmi > 24.9 && bmi <= 39.9) status = "Overweight";
  else if (bmi >= 40.0) status = "Obese";
  _status.classList.add("stts");
  _status.textContent = `This is considered ${status}`;
}
