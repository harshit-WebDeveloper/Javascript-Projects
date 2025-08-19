const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const calBtn = document.querySelector("#calcBtn");
const resBtn = document.querySelector("#resetBtn");
const bmiV = document.querySelector(".bmiValue");
const bmiS = document.querySelector(".bmiStatus");

calBtn.addEventListener("click", () => {
  let weightValue = parseFloat(weight.value);
  let heightValue = parseFloat(height.value);
  if (!weightValue || !heightValue) {
    alert("Please enter valid weight and height");
    return;
  }
  let result = (weightValue / (heightValue ** 2 / 10000)).toFixed(2);
  let status;
  if (result < 18.5) {
    status = "Underweight";
    bmiS.style.color = "blue";
  } else if (result < 24.9) {
    status = "Normal";
    bmiS.style.color = "green";
  } else if (result < 29.9) {
    status = "Overweight";
    bmiS.style.color = "orange";
  } else if (result < 34.9) {
    status = "Obese (Class I)";
    bmiS.style.color = "orangered";
  } else if (result < 39.9) {
    status = "Obese (Class II)";
    bmiS.style.color = "red";
  } else {
    status = "Obese (Class III)";
    bmiS.style.color = "darkred";
  }
  bmiV.innerText = result;
  bmiS.innerText = status;
  weight.value = "";
  height.value = "";
});
resBtn.addEventListener("click", () => {
  bmiV.innerText = "";
  bmiS.innerText = "";
  weight.value = "";
  height.value = "";
});
