$(document).ready(function () {
  allRun();
});

// This all combined the functions for the program
let allRun = () => {
  const temp1 = $("#temperature-list1");
  const temp2 = $("#temperature-list2");
  const cel1 = $(".celsius1");
  const cel2 = $(".celsius2");
  const fah1 = $(".fahrenheit1");
  const fah2 = $(".fahrenheit2");
  let state1 = "celsius",
    state2 = "fahrenheit",
    state3 = "celsius",
    state4 = "fahrenheit";
  (number1 = 0), (number2 = 0);
  let newInput1 = state1 + number1;
  let newInput2 = state2 + number2;
  console.log("state1: " + newInput1);
  console.log("state2: " + newInput2);
  // Celsius to fahrenheit
  changing(
    $("#left-input"),
    $("#right-input"),
    "Celsius",
    "Fahrenheit",
    "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>C</span> × 9/5) + 32 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
    2,
    1
  );
  temp1.change(function (e) {
    const select1 = e.target;
    number1++;
    if (select1.value === "fahrenheit") {
      state1 = "fahrenheit";
      state3 = "fahrenheit";
      state4 = "celsius";
    } else if (select1.value === "celsius") {
      state1 = "celsius";
      state3 = "celsius";
    } else if (select1.value === "kelvin") {
      state1 = "kelvin";
    }
    if (state1 === "fahrenheit" && state2 === "fahrenheit") {
      cel2.prop("selected", true);
      state2 = "celsius";
      // fahrenheit to celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Fahrenheit",
        "Celsius",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>F</span> - 32) x 5/9 = <span class='resultValue'>17.78</span>°<span class='letter-bold'>C</span></p>",
        1,
        2
      );
    } else if (state1 === "celsius" && state2 === "celsius") {
      fah2.prop("selected", true);
      state2 = "fahrenheit";
      // Celsius to fahrenheit check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Celsius",
        "Fahrenheit",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>C</span> × 9/5) + 32 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
        2,
        1
      );
    } else if (state1 === "kelvin" && state2 === "celsius") {
      // Kelvin to Celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Kelvin",
        "Celsius",
        "<p class='calculation-define'><span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15 = <span class='resultValue'>-273.15</span>°<span class='letter-bold'>C</span></p>",
        5,
        6
      );
    } else if (state1 === "fahrenheit" && state2 === "celsius") {
      // Fahrenheit to Celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Fahrenheit",
        "Celsius",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>F</span> - 32) x 5/9 = <span class='resultValue'>-17.78</span>°<span class='letter-bold'>C</span></p>",
        1,
        2
      );
    } else if (state1 === "celsius" && state2 === "kelvin") {
      // Celsius to Celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Kelvin",
        "Celsius",
        "<p class='calculation-define'><span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15 = <span class='resultValue'>-273.10</span>°<span class='letter-bold'>C</span></p>",
        5,
        6
      );
    } else if (state1 === "fahrenheit" && state2 === "kelvin") {
      // Kelvin to Fahrenheit check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Fahrenheit",
        "Kelvin",
        "<p class='calculation-define'>(<span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15) x 9/5 + 32 = <span class='resultValue'>255.37</span><span class='letter-bold'>°F</span></p>",
        4,
        3
      );
    } else if (state1 === "celsius" && state2 === "fahrenheit") {
      // Celsius to fahrenheit
      changing(
        $("#left-input"),
        $("#right-input"),
        "Celsius",
        "Fahrenheit",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>C</span> × 9/5) + 32 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
        2,
        1
      );
    } else if (state1 === "kelvin" && state2 === "fahrenheit") {
      // Kelvin to fahrenheit check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Kelvin",
        "Fahrenheit",
        "<p class='calculation-define'>(<span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15) x 9/5 + 32 = <span class='resultValue'>-459.7</span>°<span class='letter-bold'>F</span></p>",
        3,
        4
      );
    } else if (state1 === state2) {
      number1--;
      if (state3 === "fahrenheit") {
        state2 = "fahrenheit";
      } else {
        state2 = "celsius";
      }
      if (state2 === "fahrenheit") {
        if (newInput1 === "fahrenheit" + number1) {
          fah2.prop("selected", true);
          state4 = "fahrenheit";
          // Kelvin to Fahrenheit check
          changing(
            $("#left-input"),
            $("#right-input"),
            "Kelvin",
            "Fahrenheit",
            "<p class='calculation-define'>(<span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15) x 9/5 + 32 = <span class='resultValue'>255.37</span><span class='letter-bold'>°F</span></p>",
            3,
            4
          );
        }
      } else if (state2 === "celsius") {
        if (newInput1 === "celsius" + number1) {
          cel2.prop("selected", true);
          state4 = "celsius";
          // Kelvin to Celsius check
          changing(
            $("#left-input"),
            $("#right-input"),
            "Celsius",
            "Kelvin",
            "<p class='calculation-define'><span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15 = <span class='resultValue'>273.15</span><span class='letter-bold'>°C</span></p>",
            5,
            6
          );
        }
      }
    }
    console.log("TEMP1");
    newInput1 = state1 + number1;
    newInput2 = state2 + number2;
    console.log("state1: " + newInput1);
    console.log("state2: " + newInput2);
  });

  temp2.change(function (e) {
    const select2 = e.target;
    number2++;
    if (select2.value === "fahrenheit") {
      state2 = "fahrenheit";
      state4 = "fahrenheit";
    } else if (select2.value === "celsius") {
      state2 = "celsius";
      state3 = "fahrenheit";
      state4 = "celsius";
    } else if (select2.value === "kelvin") {
      state2 = "kelvin";
    }
    if (state1 === "fahrenheit" && state2 === "fahrenheit") {
      cel1.prop("selected", true);
      state1 = "celsius";
      // Celsius to fahrenheit check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Celsius",
        "Fahrenheit",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>C</span> × 9/5) + 32 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
        2,
        1
      );
    } else if (state1 === "celsius" && state2 === "celsius") {
      fah1.prop("selected", true);
      state1 = "fahrenheit";
      // fahrenheit to celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Fahrenheit",
        "Celsius",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>F</span> - 32) x 5/9 = <span class='resultValue'>32</span>°<span class='letter-bold'>C</span></p>",
        1,
        2
      );
    } else if (state1 === "celsius" && state2 === "kelvin") {
      // Kelvin to Celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Celsius",
        "Kelvin",
        "<p class='calculation-define'><span class='inputValue'>0</span><span class='letter-bold'>°C</span> + 273.15 = <span class='resultValue'>273.15</span><span class='letter-bold'>K</span></p>",
        6,
        5
      );
    } else if (state1 === "fahrenheit" && state2 === "kelvin") {
      // Kelvin to Fahrenheit check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Fahrenheit",
        "Kelvin",
        "<p class='calculation-define'>(<span class='inputValue'>0</span><span class='letter-bold'>°F</span> - 32) x 5/9 + 273.15 = <span class='resultValue'>255.37</span><span class='letter-bold'>K</span></p>",
        4,
        3
      );
    } else if (state1 === "kelvin" && state2 === "fahrenheit") {
      // Kelvin to Fahrenheit check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Kelvin",
        "Fahrenheit",
        "<p class='calculation-define'>(<span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15) x 9/5 + 32 = <span class='resultValue'>255.37</span><span class='letter-bold'>°F</span></p>",
        3,
        4
      );
    } else if (state1 === "kelvin" && state2 === "celsius") {
      // Kelvin to Celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Kelvin",
        "Celsius",
        "<p class='calculation-define'><span class='inputValue'>0</span><span class='letter-bold'>K</span> - 273.15 = <span class='resultValue'>-273.10</span>°<span class='letter-bold'>C</span></p>",
        5,
        6
      );
    } else if (state1 === "fahrenheit" && state2 === "celsius") {
      // fahrenheit to celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Fahrenheit",
        "Celsius",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>F</span> - 32) x 5/9 = <span class='resultValue'>-17.78</span>°<span class='letter-bold'>C</span></p>",
        1,
        2
      );
    } else if (state1 === "celsius" && state2 === "fahrenheit") {
      // fahrenheit to celsius check
      changing(
        $("#left-input"),
        $("#right-input"),
        "Celsius",
        "Fahrenheit",
        "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>C</span> x 5/9) + 32 = <span class='resultValue'>32</span>°<span class='letter-bold'>F</span></p>",
        2,
        1
      );
    } else if (state1 === state2) {
      number2--;
      if (state4 === "fahrenheit") {
        state1 = "fahrenheit";
      } else {
        state1 = "celsius";
      }
      if (state1 === "fahrenheit") {
        if (newInput2 === "fahrenheit" + number2) {
          fah1.prop("selected", true);
          state3 = "fahrenheit";
          // Kelvin to Fahrenheit check
          changing(
            $("#left-input"),
            $("#right-input"),
            "Fahrenheit",
            "Kelvin",
            "<p class='calculation-define'>(<span class='inputValue'>0</span>°<span class='letter-bold'>F</span> - 273.15) x 9/5 + 32 = <span class='resultValue'>-459.67</span>°<span class='letter-bold'>F</span></p>",
            4,
            3
          );
        }
      } else if (state1 === "celsius") {
        if (newInput2 === "celsius" + number2) {
          cel1.prop("selected", true);
          state3 = "celsius";
          // Kelvin to Celsius check
          changing(
            $("#left-input"),
            $("#right-input"),
            "Celsius",
            "Kelvin",
            "<p class='calculation-define'><span class='inputValue'>0</span><span class='letter-bold'>°C</span> - 273.15 = <span class='resultValue'>-273.10</span><span class='letter-bold'>K</span></p>",
            6,
            5
          );
        }
      }
    }
    console.log("TEMP2");
    newInput1 = state1 + number1;
    newInput2 = state2 + number2;
    console.log("state1: " + newInput1);
    console.log("state2: " + newInput2);
  });
};

const temperature1 = $(".name-temperature1");
const temperature2 = $(".name-temperature2");
const showCalculation = $(".calculation-define");

let changing = (
  leftInput,
  rightInput,
  nameLeft,
  nameRight,
  calculationDefined,
  chooseCalculation1,
  chooseCalculation2
) => {
  $("#left-input").attr("placeholder", nameLeft);
  $("#right-input").attr("placeholder", nameRight);
  nameLeft = nameLeft.toLowerCase();
  nameRight = nameRight.toLowerCase();
  temperature1.text(nameLeft);
  temperature2.text(nameRight);
  showCalculation.html(calculationDefined);
  const leftDirection = $(leftInput);
  const rightDirection = $(rightInput);
  // To activate the left input
  leftDirection.click(function () {
    leftDirection.focus();
    leftDirection.select();
    temperature1.text(nameLeft);
    temperature2.text(nameRight);
  });
  leftDirection.keyup(function () {
    showCalculation.html(calculationDefined);
    let inputShow = $(rightInput);
    let getValue = leftDirection.val();
    $(".inputValue").text(getValue);
    getValue = temperatureCalculation(parseInt(getValue), chooseCalculation1);
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
  // To activate the left input
  rightDirection.click(function () {
    rightDirection.focus();
    rightDirection.select();
    temperature1.text(nameRight);
    temperature2.text(nameLeft);
  });
  rightDirection.keyup(function () {
    showCalculation.html(calculationDefined);
    let inputShow = $(leftInput);
    let getValue = rightDirection.val();
    $(".resultValue").text(getValue);
    getValue = temperatureCalculation(parseInt(getValue), chooseCalculation2);
    const showValue = getValue.toFixed(2);
    if (isNaN(showValue)) {
      inputShow.val("");
      $(".inputValue").text("");
      $(".resultValue").text("");
    } else {
      $(".inputValue").text(showValue);
      inputShow.val(showValue);
    }
  });
};

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

// It choose what calculation it need (1K − 273.15) × 9/5 + 32 = -457.9°F
let temperatureCalculation = (setValue, number) => {
  if (number === 1) {
    // Fahrenheit to celsius
    return ((setValue - 32) * 5) / 9;
  } else if (number === 3) {
    // Kelvin to fahrenheit
    return ((setValue - 273.15) * 9) / 5 + 32;
  } else if (number === 4) {
    // Fahrenheit to Kelvin
    return ((setValue - 32) * 5) / 9 + 273.15;
  } else if (number === 5) {
    // Kelvin to celsius
    return setValue - 273.15;
  } else if (number === 6) {
    // Celsius to kelvin
    return setValue + 273.15;
  } else {
    // Celsius to fahrenheit
    return (setValue * 9) / 5 + 32;
  }
};
