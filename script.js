$(document).ready(function () {
  allRun();
});

// This all combined the functions for the program
let allRun = () => {
  leftInput();
  rightInput();
  const temp1 = $("#temperature-list1");
  const temp2 = $("#temperature-list2");
  const cel1 = $(".celsius1");
  const cel2 = $(".celsius2");
  const fah1 = $(".fahrenheit1");
  const fah2 = $(".fahrenheit2");
  let state1, state2;
  console.log("state1: " + state1);
  console.log("state2: " + state2);
  temp1.change(function (e) {
    const select1 = e.target;
    if (select1.value === "fahrenheit" && state2 === "celsius") {
      cel2.prop("selected", true);
      state1 = "fahrenheit";
      // state2 = "celsius";
    } else if (select1.value === "celsius" && state2 === "fahrenheit") {
      fah2.prop("selected", true);
      state1 = "celsius";
      // state2 = "fahrenheit";
    } else if (select1.value === "kelvin" && state2 === "kelvin") {
      state1 = "same";
    } else if (select1.value === "kelvin" && state2 === "celsius") {
      console.log("000");
      state1 = "kelvin";
      // state2 = "celsius";
    } else if (select1.value === "kelvin" && state2 === "fahrenheit") {
      state1 = "kelvin";
      // state2 = "fahrenheit";
    }
    console.log("state1: " + state1);
    console.log("state2: " + state2);
  });

  temp2.change(function (e) {
    const select2 = e.target;
    if (select2.value === "fahrenheit" && state1 !== "kelvin") {
      cel1.prop("selected", true);
      // state1 = "celsius";
      state2 = "fahrenheit";
    } else if (select2.value === "celsius" && state1 !== "kelvin") {
      fah1.prop("selected", true);
      // state1 = "fahrenheit";
      state2 = "celsius";
    } else if (select2.value === "kelvin" && state1 === "kelvin") {
      state2 = "same";
      cel1.prop("selected", true);
    } else if (select2.value === "kelvin") {
      console.log("000");
      state2 = "kelvin";
    }
    console.log("state1: " + state1);
    console.log("state2: " + state2);
    // optionSelecting(select2, state1, state2);
  });
};

let optionSelecting = (select, state1, state2) => {
  if (select.value === "fahrenheit" && state1 !== "kelvin") {
    cel1.prop("selected", true);
    state1 = "celsius";
    state2 = "fahrenheit";
  } else if (select.value === "celsius" && state1 !== "kelvin") {
    fah1.prop("selected", true);
    state1 = "fahrenheit";
    state2 = "celsius";
  } else if (select.value === "kelvin" && state1 === "kelvin") {
    console.log("same");
    state2 = "same";
  }
  if (select.value === "kelvin") {
    console.log("000");
    state2 = "kelvin";
  }
  console.log("state1: " + state1);
  console.log("state2: " + state2);
};

const temperature1 = $(".name-temperature1");
const temperature2 = $(".name-temperature2");
const showCalculation = $(".calculation-define");

// This all the data for the left input field
let leftInput = () => {
  inputCalculation(
    $("#left-input"),
    $("#right-input"),
    "celsius",
    "fahrenheit",
    "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>C</span> × 9/5) + 32 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
    2,
    "kelvin",
    1
  );
};

// This all the data for the right input field
let rightInput = () => {
  inputCalculation(
    $("#right-input"),
    $("#left-input"),
    "fahrenheit",
    "celsius",
    "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>F</span> - 32) x 5/9 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
    1,
    "kelvin",
    2
  );
};

// This where the function takes place
let inputCalculation = (
  inputDirection1,
  inputDirection2,
  temperatureName1,
  temperatureName2,
  calculationDefined,
  chooseCalculation
) => {
  const direction = $(inputDirection1);
  direction.click(function (e) {
    direction.focus();
    direction.select();
    temperature1.text(temperatureName1);
    temperature2.text(temperatureName2);
  });

  direction.keyup(function () {
    showCalculation.html(calculationDefined);
    let inputShow = $(inputDirection2);
    let getValue = direction.val();
    $(".inputValue").text(getValue);
    getValue = temperatureCalculation(parseInt(getValue), chooseCalculation);
    const showValue = getValue.toFixed(2);
    if (isNaN(showValue)) {
      inputShow.val("");
      $(".inputValue").text("");
      $(".resultValue").text("");
    } else {
      inputShow.val(showValue);
      $(".resultValue").text(showValue);
    }
  });
};

// It choose what calculation it need
let temperatureCalculation = (setValue, number) => {
  if (number === 1) {
    return ((setValue - 32) * 5) / 9;
  } else {
    return (setValue * 9) / 5 + 32;
  }
};
