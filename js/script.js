class Input {
  constructor() {
    this.height = document.querySelector("#height");
    this.weight = document.querySelector("#weight");
    this.display = document.querySelector("#sum");
  }

  validation(bool) {
    if (bool === true) {
      this.display.innerHTML = "Please provide a valid height";
    } else if (bool === false) {
      this.display.innerHTML = "Please provide a valid weight";
    }

    setTimeout(function() {
      document.querySelector("#sum").innerHTML = "";
    }, 2000);
  }

  calculation() {
    let heightValue = this.height.value;
    let weightValue = this.weight.value;
    let heightSum = parseInt(heightValue);
    let weightSum = parseInt(weightValue);

    let BMI = (weightSum / ((heightSum * heightSum)/10000)).toFixed(2);
    document.querySelector("#sum").innerHTML = BMI
  }
}
let input = new Input();
let form = document.querySelector("#form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let height = input.height.value;
  let weight = input.weight.value;

  if (height === "" || height.match(/\D/gi) || height < 0) {
    input.validation(true);
  } else if (weight === "" || weight.match(/\D/gi) || weight < 0) {
    input.validation(false);
  } else {
    alert("CLICK");
    input.calculation();
  }
});
