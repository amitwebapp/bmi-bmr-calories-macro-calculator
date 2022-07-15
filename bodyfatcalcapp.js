"use strict";

const form = document.getElementById("clac__form");
form.addEventListener("submit", handleSubmit);

function handleSubmit() {
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const age = getInputNumberValue("age");
  const gender = getSelectedValue("gender");

  // BMI
  const bmi = weight / ((height * height) / 10000);

  // Body Fat Formula
  const bodyFatPercent = Math.round(
    gender === "male"
      ? -44.988 +
          0.503 * age +
          10.689 * 0 +
          3.172 * bmi -
          0.026 * bmi * bmi +
          0.181 * bmi * 0 -
          0.02 * bmi * age -
          0.005 * bmi * bmi * 0 +
          0.00021 * bmi * age
      : -44.988 +
          0.503 * age +
          10.689 * 1 +
          3.172 * bmi -
          0.026 * bmi * bmi +
          0.181 * bmi * 1 -
          0.02 * bmi * age -
          0.005 * bmi * bmi * 1 +
          0.00021 * bmi * age
  );

  // Result
  document.getElementById("outBodyFat");
  outBodyFat.innerHTML = `${bodyFatPercent}%`;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}
