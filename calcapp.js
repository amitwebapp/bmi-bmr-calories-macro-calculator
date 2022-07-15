"use strict";

const form = document.getElementById("clac__form");
form.addEventListener("submit", handleSubmit);

function handleSubmit() {
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const age = getInputNumberValue("age");
  const gender = getSeletedValue("gender");
  const formula = getSeletedValue("formula");
  const activityLevel = getSeletedValue("activity__level");

  // BMR by Mifflin St. Jeor Formula
  const mifflinBasal = Math.round(
    gender === "male"
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161
  );

  // BMR by Harris-Benedict Formula
  const harrisBasal = Math.round(
    gender === "male"
      ? 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age
      : 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age
  );

  // Goals
  const maintenance = Math.round(
    formula === "mifflin__st_jeor"
      ? mifflinBasal * Number(activityLevel)
      : harrisBasal * Number(activityLevel)
  );

  const gainWeight = maintenance + 450;
  const gainWeightFast = maintenance + 500;
  const loseWeight = maintenance - 450;
  const loseModerateWeight = maintenance - 750;
  const loseLargeWeight = maintenance - 1000;

  // Macros (cont.)
  // for maintenance weight
  const maintenancePro = Math.round((maintenance * (30 / 100)) / 4);
  const maintenanceCarb = Math.round((maintenance * (40 / 100)) / 4);
  const maintenanceFat = Math.round((maintenance * (30 / 100)) / 9);

  // for gain weight
  const gainWeightPro = Math.round((gainWeight * (30 / 100)) / 4);
  const gainWeightCarb = Math.round((gainWeight * (40 / 100)) / 4);
  const gainWeightFat = Math.round((gainWeight * (30 / 100)) / 9);

  // for gain weight fast
  const gainWeightFastPro = Math.round((gainWeight * (25 / 100)) / 4);
  const gainWeightFastCarb = Math.round((gainWeight * (50 / 100)) / 4);
  const gainWeightFastFat = Math.round((gainWeight * (25 / 100)) / 9);

  // for lose weight weight
  const loseWeightPro = Math.round((loseWeight * (40 / 100)) / 4);
  const loseWeightCarb = Math.round((loseWeight * (40 / 100)) / 4);
  const loseWeightFat = Math.round((loseWeight * (20 / 100)) / 9);

  // for lose moderate weight weight
  const loseModerateWeightPro = Math.round(
    (loseModerateWeight * (45 / 100)) / 4
  );
  const loseModerateWeightCarb = Math.round(
    (loseModerateWeight * (30 / 100)) / 4
  );
  const loseModerateWeightFat = Math.round(
    (loseModerateWeight * (25 / 100)) / 9
  );

  // for lose large weight weight
  const loseLargeWeightPro = Math.round((loseLargeWeight * (50 / 100)) / 4);
  const loseLargeWeightCarb = Math.round((loseLargeWeight * (20 / 100)) / 4);
  const loseLargeWeightFat = Math.round((loseLargeWeight * (30 / 100)) / 9);

  // BMR
  const basal = document.getElementById("outBasal");
  basal.innerHTML =
    formula === "mifflin__st_jeor"
      ? `<strong>${mifflinBasal}</strong>.`
      : `<strong>${harrisBasal}</strong>.`;

  // Maintenance Weigth
  document.getElementById("outMaintenance");
  outMaintenance.innerHTML = `<strong>${maintenance}</strong>`;

  // Maintenance Weigth Macros
  document.getElementById("outMaintenanceMacros");
  outMaintenanceMacros.innerHTML = `Proteins: <strong>${maintenancePro}</strong> grams/day | Carbs: <strong>${maintenanceCarb}</strong> grams/day | Fats: <strong>${maintenanceFat}</strong> grams/day`;

  // Gain Weight
  document.getElementById("outGainWeight");
  outGainWeight.innerHTML = `<strong>${gainWeight}</strong>`;

  // Gain Weigth Macros
  document.getElementById("outGainWeightMacros");
  outGainWeightMacros.innerHTML = `Proteins: <strong>${gainWeightPro}</strong> grams/day | Carbs: <strong>${gainWeightCarb}</strong> grams/day | Fats: <strong>${gainWeightFat}</strong> grams/day`;

  // Gain Weight Fast
  document.getElementById("outGainWeightFast");
  outGainWeightFast.innerHTML = `<strong>${gainWeightFast}</strong>`;

  // Fast Weigth Gain Macros
  document.getElementById("outGainWeightFastMacros");
  outGainWeightFastMacros.innerHTML = `Proteins: <strong>${gainWeightFastPro}</strong> grams/day | Carbs: <strong>${gainWeightFastCarb}</strong> grams/day | Fats: <strong>${gainWeightFastFat}</strong> grams/day`;

  // Lose Small Weight
  document.getElementById("outLossWeight");
  outLossWeight.innerHTML = `<strong>${loseWeight}</strong>`;

  // Lose Small Weigth Macros
  document.getElementById("outLossWeightMacros");
  outLossWeightMacros.innerHTML = `Proteins: <strong>${loseWeightPro}</strong> grams/day | Carbs: <strong>${loseWeightCarb}</strong> grams/day | Fats: <strong>${loseWeightFat}</strong> grams/day`;

  // Lose Moderate Weight
  document.getElementById("outLossModerateWeight");
  outLossModerateWeight.innerHTML = `<strong>${loseModerateWeight}</strong>`;

  // Lose Moderate Weigth Macros
  document.getElementById("outLossModerateWeightMacros");
  outLossModerateWeightMacros.innerHTML = `Proteins: <strong>${loseModerateWeightPro}</strong> grams/day | Carbs: <strong>${loseModerateWeightCarb}</strong> grams/day | Fats: <strong>${loseModerateWeightFat}</strong> grams/day`;

  // Lose Large Weight
  document.getElementById("outLossLargeWeight");
  outLossLargeWeight.innerHTML = `<strong>${loseLargeWeight}</strong>`;

  // Lose Large Weigth Macros
  document.getElementById("outLossLargeWeightMacros");
  outLossLargeWeightMacros.innerHTML = `Proteins: <strong>${loseLargeWeightPro}</strong> grams/day | Carbs: <strong>${loseLargeWeightCarb}</strong> grams/day | Fats: <strong>${loseLargeWeightFat}</strong> grams/day`;

  // BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // BMI conditions👇
  if (bmi < 18.6) {
    result.innerHTML = `<strong>${bmi}</strong>`;
    resultSecondary.innerHTML = `Under Weight`;
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `<strong>${bmi}</strong>`;
    resultSecondary.innerHTML = `Normal`;
  } else {
    result.innerHTML = `<strong>${bmi}</strong>`;
    resultSecondary.innerHTML = `Over Weight`;
  }
}

function getSeletedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
