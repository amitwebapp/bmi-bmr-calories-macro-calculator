"use strict";

window.onload = () => {
  var button = document.querySelector("#btn");

  // Function for calculating BMI👇
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  // Getting input from user into height variable. Input is string so typecasting is necessary.👇
  var height = parseInt(document.querySelector("#height").value);

  // Getting input from user into weight variable. Input is string so typecasting is necessary.👇
  var weight = parseInt(document.querySelector("#weight").value);

  var result = document.querySelector("#result");

  // Checking the user providing a proper value or nat👇
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  // If both input is valid, calculate the bmi👇
  else {
    // Fixing upto 2 decimal places👇
    var bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Dividing as per the bmi conditions👇
    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;

    // Adding 'classList' to has 'result' a backgroundcolor
    document.getElementById("result").className = "rsult-secondary";
  }
}

function calc() {
  var wt = document.bmi.wg.value;
  var ht = document.bmi.ht.value;

  var op = document.bmi.opt1.value;

  // SI value
  var h = ht / 100;
  var si = Math.round((wt / (h * h)) * 100) / 100;
  document.bmi.si.value = si;

  // US value
  var lb = wt * 2.2;
  var ic = ht * 0.39;
  var us = Math.round(703 * (lb / (ic * ic)) * 100) / 100;
  document.bmi.us.value = us;

  // UK value
  var uk = Math.round(6.35 * si * 100) / 100;
  document.bmi.uk.value = uk;

  // If value is not given for weight
  if (wt === "") {
    alert("Enter the value for weight!");
  }

  // If weight is less than 10
  else if (wt <= 10) {
    document.bmi.si.value = 0;
    document.bmi.us.value = 0;
    document.bmi.uk.value = 0;
    alert("Weight should be greater than 10kgs!");
  }

  // If weight is pounds and less than 22lbs
  else if (op === "pounds" && wt <= 22) {
    document.bmi.si.value = 0;
    document.bmi.us.value = 0;
    document.bmi.uk.value = 0;
    alert("Weight should be greater than 22lbs!");
  }

  // If given height is less than 33cms
  else if (ht < 33) {
    document.bmi.si.value = 0;
    document.bmi.us.value = 0;
    document.bmi.uk.value = 0;
    alert("Height should be taller than 33cms!");
  } else if (op === "pounds") {
    document.bmi.si.value = Math.round((si / 2.2) * 100) / 100;
    document.bmi.us.value = Math.round((us / 2.2) * 100) / 100;
    document.bmi.uk.value = Math.round((uk / 2.2) * 100) / 100;
  }

  var d = "Your BMI falls within the category of:👉 ";
  if (si < 15) {
    document.bmi.desc.value = d + "Starvation";
  } else if (si > 15 && si <= 18.5) {
    document.bmi.desc.value = d + "Underweight";
  } else if (si > 18.5 && si <= 25) {
    document.bmi.desc.value = d + "Normal";
  } else if (si > 25 && si <= 30) {
    document.bmi.desc.value = d + "Overweight";
  } else if (si > 30) {
    document.bmi.desc.value = d + "Obese";
  }
}

// Height conversion
function conv(aa) {
  var ft = 0,
    inc = 0,
    ht = 0;

  if (aa === 1 || aa === 2) {
    ft = document.bmi.opt2.value;
    inc = document.bmi.opt3.value;
    var ss = ft * 12;
    var tot = ss + parseInt(inc);
    var val = tot * 2.54;
    document.bmi.ht.value = Math.round(val);
  } else {
    ht = document.bmi.ht.value;
    if (ht !== "") {
      var cm = Math.round(ht / 2.54);
      var div = parseInt(cm / 12);
      var md = cm % 12;
      document.bmi.opt2.value = div;
      document.bmi.opt3.value = md;
    }
  }
}

// Weight conversion
function unit() {
  var pp = document.bmi.opt1.value;
  var ww = document.bmi.wg.value;

  // kilogram to pounds
  if (pp === "pounds") {
    document.bmi.wg.value = Math.round(ww * 2.2 * 100) / 100;
  }
  // Pounds to kilograms
  else {
    document.bmi.wg.value = Math.round(ww / 2.2);
  }
}

// CALORIES CALCULATOR
/*
var cneed;
var fneed;
var crneed;
var pneed;
var aneed;
var fd;

function cc() {
  var age = parseInt(document.getElementById("age").value);

  var wtype = document.getElementById("wtype").value;

  var foot = parseInt(document.getElementById("foot").value);

  var inch = parseInt(document.getElementById("inch").value);

  var cm = document.getElementById("cen").value;

  var weight = document.getElementById("weight").value;

  if (age !== "" && weight !== "") {
    if (wtype === "pounds") {
      weight = parseInt(weight);
      weight = Math.round(weight / 2.2046);
    }

    var loa = document.getElementById("loa").value;
    if (document.getElementById("gen").checked) {
      fd = 10 * weight + 6.25 * cm - 5 * age + 5;
    } else {
      fd = 10 * weight + 6.25 * cm - 5 * age - 161;
    }
    switch (loa) {
      case "1":
        cneed = fd * 1.2;
        break;
      case "2":
        cneed = fd * 1.375;
        break;
      case "3":
        cneed = fd * 1.53;
        break;
      case "4":
        cneed = fd * 1.725;
        break;
      case "5":
        cneed = fd * 1.9;
        break;
    }

    cneed = Math.floor(cneed);
    // cneed1 = Math.floor(cneed * 0.0353);

    fneed = Math.floor((cneed * 0.25) / 9);
    if (wtype === "pounds") {
      fneed = Math.floor(fneed * 0.0353);
      // fneed = fneed * 0.0353;
    }

    pneed = Math.floor((cneed * 0.25) / 4);
    if (wtype === "pounds") {
      pneed = Math.floor(pneed * 0.0353);
    }

    aneed = Math.floor((cneed * 0.25) / 7);
    if (wtype === "pounds") {
      aneed = Math.floor(aneed * 0.0353);
    }

    document.getElementById("rc").value = "" + cneed;

    document.getElementById("rf").value = "" + fneed;

    document.getElementById("rp").value = "" + pneed;

    document.getElementById("rh").value = "" + crneed;

    document.getElementById("ra").value = "" + aneed;

    document.getElementById("l1").innerHTML = "grams";

    document.getElementById("l2").innerHTML = "grams";

    document.getElementById("l3").innerHTML = "grams";

    document.getElementById("l4").innerHTML = "grams";

    var caltype = document.getElementById("caltype").value;
    if (caltype === "g") {
      document.getElementById("l1").innerHTML = "grams";
      document.getElementById("l2").innerHTML = "grams";
      document.getElementById("l3").innerHTML = "grams";
      document.getElementById("l4").innerHTML = "grams";
    }

    if (wtype === "pounds") {
      fat1 = fneed * 0.0022;
      pro1 = pneed * 0.0022;
      car1 = crneed * 0.0022;
      alh1 = aneed * 0.0022;

      fat1 = fat1.toFixed(3);
      pro1 = pro1.toFixed(3);
      car1 = car1.toFixed(3);
      alh1 = alh1.toFixed(3);

      document.getElementById("rf").value = "" + fat1;
      document.getElementById("rp").value = "" + pro1;
      document.getElementById("rh").value = "" + car1;
      document.getElementById("ra").value = "" + alh1;

      document.getElementById("l1").innerHTML = "lbs";
      document.getElementById("l2").innerHTML = "lbs";
      document.getElementById("l3").innerHTML = "lbs";
      document.getElementById("l4").innerHTML = "lbs";
    }

    if (caltype === "pounds") {
      fat1 = fneed * 0.0022;
      pro1 = pneed * 0.0022;
      car1 = crneed * 0.0022;
      alh1 = aneed * 0.0022;

      fat1 = fat1.toFixed(3);
      pro1 = pro1.toFixed(3);
      car1 = car1.toFixed(3);
      alh1 = alh1.toFixed(3);

      document.getElementById("rf").value = "" + fat1;
      document.getElementById("rp").value = "" + pro1;
      document.getElementById("rh").value = "" + car1;
      document.getElementById("ra").value = "" + alh1;

      document.getElementById("l1").innerHTML = "lbs";
      document.getElementById("l2").innerHTML = "lbs";
      document.getElementById("l3").innerHTML = "lbs";
      document.getElementById("l4").innerHTML = "lbs";
    }

    if (caltype === "kg") {
      fat2 = fneed / 1000;
      pro2 = pneed / 1000;
      car2 = crneed / 1000;
      alh2 = aneed / 1000;

      fat2 = fat2.toFixed(3);
      pro2 = pro2.toFixed(3);
      car2 = car2.toFixed(3);
      alh2 = alh2.toFixed(3);

      document.getElementById("rf").value = "" + fat2;
      document.getElementById("rp").value = "" + pro2;
      document.getElementById("rh").value = "" + car2;
      document.getElementById("ra").value = "" + alh2;

      document.getElementById("l1").innerHTML = "kilograms";
      document.getElementById("l2").innerHTML = "kilograms";
      document.getElementById("l3").innerHTML = "kilograms";
      document.getElementById("l4").innerHTML = "kilograms";
    } else {
      alert("Please fill your details properly!");
    }
  }

  function con(num) {
    var hc = parseInt(num.value);
    var hi = hc / 2.54;
    var hf = Math.floor(hi / 12);
    var ri = Math.round(hi % 12);

    if (hc > 40 && hc <= 210) {
      document.getElementById("foot").value = hf;
    }
    document.getElementById("inch").value = ri;
  }

  function hcon() {
    var hf = parseInt(document.getElementById("foot").value);
    var hi = parseInt(document.getElementById("inch").value);
    var hc;

    hc = Math.round(hf * 30.48 + hi * 2.54);
    document.getElementById("cen").value = hc;
  }

  function cknum(event, num) {
    var kc;

    if (window.event) {
      kc = event.keyCode;
    } else {
      kc = event.which;
    }

    var a = num.value;

    if (a === 48) {
      if (a === "") {
        return false;
      } else {
        return true;
      }
    }

    if (kc !== 8 && kc !== 0) {
      if (kc < 49 || kc > 57) {
        return false;
      }
    }
  }

  function isNumberKey(id) {
    var no = eval("" + id + "");
    var number = document.getElementById(no).value;
    if (!number.match(/^[0-9\.]+$/) && number !== "") {
      number = number.substring(0, number.length - 1);
      document.getElementById(id).value = number;
    }
  }

  function convert() {
    var age = parseInt(document.getElementById("age").value);

    var cm = document.getElementById("cen").value;

    var weight = document.getElementById("weight").value;

    if (age !== "" && weight !== "") {
      var caltype = document.getElementById("caltype").value;
      var fat = document.getElementById("rf").value;
      var pro = document.getElementById("rp").value;
      var car = document.getElementById("rh").value;
      var alh = document.getElementById("ra").value;

      if (caltype === "g") {
        document.getElementById("rc").value = "" + cneed;
        document.getElementById("rf").value = "" + fneed;
        document.getElementById("rp").value = "" + pneed;
        document.getElementById("rh").value = "" + crneed;
        document.getElementById("ra").value = "" + aneed;

        document.getElementById("l1").innerHTML = "grams";
        document.getElementById("l2").innerHTML = "grams";
        document.getElementById("l3").innerHTML = "grams";
        document.getElementById("l4").innerHTML = "grams";
      }

      if (caltype === "pounds") {
        fat1 = fneed * 0.0022;
        pro1 = pneed * 0.00022;
        car1 = crneed * 0.0022;
        alh1 = aneed * 0.0022;

        fat1 = fat1.toFixed(3);
        pro1 = pro1.toFixed(3);
        car1 = car1.toFixed(3);
        alh1 = alh1.toFixed(3);

        document.getElementById("rf").value = "" + fat1;
        document.getElementById("rp").value = "" + pro1;
        document.getElementById("rh").value = "" + car1;
        document.getElementById("ra").value = "" + alh1;

        document.getElementById("l1").innerHTML = "lbs";
        document.getElementById("l2").innerHTML = "lbs";
        document.getElementById("l3").innerHTML = "lbs";
        document.getElementById("l4").innerHTML = "lbs";
      }

      if (caltype === "kg") {
        fat2 = fneed / 1000;
        pro2 = pneed / 1000;
        car2 = crneed / 1000;
        alh2 = aneed / 1000;

        fat2 = fat2.toFixed(3);
        pro2 = pro2.toFixed(3);
        car2 = car2.toFixed(3);
        alh2 = alh2.toFixed(3);

        document.getElementById("rf").value = "" + fat2;
        document.getElementById("rp").value = "" + pro2;
        document.getElementById("rh").value = "" + car2;
        document.getElementById("ra").value = "" + alh2;

        document.getElementById("l1").innerHTML = "kilogram";
        document.getElementById("l2").innerHTML = "kilogram";
        document.getElementById("l3").innerHTML = "kilogram";
        document.getElementById("l4").innerHTML = "kilogram";
      }
    } else {
      alert("Please fill your details properly!");
    }
  }
}
*/

/*
var cneed;
var fneed;
var crneed;
var pneed;
var aneed;
var fd;

function cc() {
  var age = parseInt(document.getElementById("age").value);
  var wtype = document.getElementById("wtype").value;
  var foot = parseInt(document.getElementById("foot").value);
  var inch = parseInt(document.getElementById("inch").value);
  var cm = document.getElementById("cen").value;
  var weight = document.getElementById("weight").value;

  if (age !== "" && cm !== "" && weight !== "") {
    if (wtype === "pounds") {
      weight = parseInt(weight);
      weight = Math.round(weight / 2.2046);
    }

    var loa = document.getElementById("loa").value;

    if (document.getElementById("gen").checked) {
      fd = 10 * weight + 6.25 * cm - 5 * age + 5;
    } else {
      fd = 10 * weight + 6.25 * cm - 5 * age - 161;
    }

    switch (loa) {
      case "1":
        cneed = fd * 1.2;
        break;
      case "2":
        cneed = fd * 1.375;
        break;
      case "3":
        cneed = fd * 1.53;
        break;
      case "4":
        cneed = fd * 1.725;
        break;
      case "5":
        cneed = fd * 1.9;
        break;
    }

    cneed = Math.floor(cneed);
    //cneed1=Math.floor(cneed*0.0353);
    fneed = Math.floor((cneed * 0.25) / 9);

    if (wtype === "pounds") {
      fneed = Math.floor(fneed * 0.0353);
      //fneed=fneed*0.0022 ;
    }

    pneed = Math.floor((cneed * 0.25) / 4);

    if (wtype === "pounds") {
      pneed = Math.floor(pneed * 0.0353);
    }

    crneed = Math.floor((cneed * 0.25) / 4);

    if (wtype === "pounds") {
      crneed = Math.floor(crneed * 0.0353);
    }

    aneed = Math.floor((cneed * 0.25) / 7);

    if (wtype === "pounds") {
      aneed = Math.floor(aneed * 0.0353);
    }

    document.getElementById("rc").value = " " + cneed;
    document.getElementById("rf").value = " " + fneed;
    document.getElementById("rp").value = " " + pneed;
    document.getElementById("rh").value = " " + crneed;
    document.getElementById("ra").value = " " + aneed;

    document.getElementById("l1").innerHTML = "grams";
    document.getElementById("l2").innerHTML = "grams";
    document.getElementById("l3").innerHTML = "grams";
    document.getElementById("l4").innerHTML = "grams";

    var caltype = document.getElementById("caltype").value;

    if (caltype === "g") {
      document.getElementById("l1").innerHTML = "grams";
      document.getElementById("l2").innerHTML = "grams";
      document.getElementById("l3").innerHTML = "grams";
      document.getElementById("l4").innerHTML = "grams";
    }

    if (wtype === "pounds") {
      fat1 = fneed * 0.0022;
      pro1 = pneed * 0.0022;
      car1 = crneed * 0.0022;
      alh1 = aneed * 0.0022;

      fat1 = fat1.toFixed(3);
      pro1 = pro1.toFixed(3);
      car1 = car1.toFixed(3);
      alh1 = alh1.toFixed(3);

      document.getElementById("rf").value = " " + fat1;
      document.getElementById("rp").value = " " + pro1;
      document.getElementById("rh").value = " " + car1;
      document.getElementById("ra").value = " " + alh1;

      document.getElementById("l1").innerHTML = "lbs";
      document.getElementById("l2").innerHTML = "lbs";
      document.getElementById("l3").innerHTML = "lbs";
      document.getElementById("l4").innerHTML = "lbs";
    }

    if (caltype === "pounds") {
      fat1 = fneed * 0.0022;
      pro1 = pneed * 0.0022;
      car1 = crneed * 0.0022;
      alh1 = aneed * 0.0022;

      fat1 = fat1.toFixed(3);
      pro1 = pro1.toFixed(3);
      car1 = car1.toFixed(3);
      alh1 = alh1.toFixed(3);

      document.getElementById("rf").value = " " + fat1;
      document.getElementById("rp").value = " " + pro1;
      document.getElementById("rh").value = " " + car1;
      document.getElementById("ra").value = " " + alh1;

      document.getElementById("l1").innerHTML = "lbs";
      document.getElementById("l2").innerHTML = "lbs";
      document.getElementById("l3").innerHTML = "lbs";
      document.getElementById("l4").innerHTML = "lbs";
    }

    if (caltype === "kg") {
      fat2 = fneed / 1000;
      pro2 = pneed / 1000;
      car2 = crneed / 1000;
      alh2 = aneed / 1000;

      fat2 = fat2.toFixed(3);
      pro2 = pro2.toFixed(3);
      car2 = car2.toFixed(3);
      alh2 = alh2.toFixed(3);

      document.getElementById("rf").value = " " + fat2;
      document.getElementById("rp").value = " " + pro2;
      document.getElementById("rh").value = " " + car2;
      document.getElementById("ra").value = " " + alh2;

      document.getElementById("l1").innerHTML = "kilogram";
      document.getElementById("l2").innerHTML = "kilogram";
      document.getElementById("l3").innerHTML = "kilogram";
      document.getElementById("l4").innerHTML = "kilogram";
    }
  } else {
    alert("Please fill your details properly!");
  }
}

function con(num) {
  var hc = parseInt(num.value);
  var hi = hc / 2.54;
  var hf = Math.floor(hi / 12);
  var ri = Math.round(hi % 12);

  if (hc > 40 && hc <= 210) {
    document.getElementById("foot").value = hf;
  }

  document.getElementById("inch").value = ri;
}

function hcon() {
  var hf = parseInt(document.getElementById("foot").value);
  var hi = parseInt(document.getElementById("inch").value);
  var hc;
  hc = Math.round(hf * 30.48 + hi * 2.54);
  document.getElementById("cen").value = hc;
}

function cknum(event, num) {
  var kc;
  if (window.event) {
    kc = event.keyCode;
  } else {
    kc = event.which;
  }
  var a = num.value;
  if (kc === 48) {
    if (a === "") {
      return false;
    } else {
      return true;
    }
  }
  if (kc !== 8 && kc !== 0) {
    if (kc < 49 || kc > 57) {
      return false;
    }
  }
}

function isNumberKey(id) {
  var no = eval('"' + id + '"');
  var number = document.getElementById(no).value;

  if (!number.match(/^[0-9\.]+$/) && number !== "") {
    number = number.substring(0, number.length - 1);
    document.getElementById(id).value = number;
  }
}

function convert() {
  var age = parseInt(document.getElementById("age").value);
  var cm = document.getElementById("cen").value;
  var weight = document.getElementById("weight").value;

  if (age !== "" && cm !== "" && weight !== "") {
    var caltype = document.getElementById("caltype").value;
    var fat = document.getElementById("rf").value;
    var pro = document.getElementById("rp").value;
    var car = document.getElementById("rh").value;
    var alh = document.getElementById("ra").value;

    if (caltype === "g") {
      document.getElementById("rc").value = " " + cneed;
      document.getElementById("rf").value = " " + fneed;
      document.getElementById("rp").value = " " + pneed;
      document.getElementById("rh").value = " " + crneed;
      document.getElementById("ra").value = " " + aneed;

      document.getElementById("l1").innerHTML = "grams";
      document.getElementById("l2").innerHTML = "grams";
      document.getElementById("l3").innerHTML = "grams";
      document.getElementById("l4").innerHTML = "grams";
    }

    if (caltype === "pounds") {
      fat1 = fneed * 0.0022;
      pro1 = pneed * 0.0022;
      car1 = crneed * 0.0022;
      alh1 = aneed * 0.0022;

      fat1 = fat1.toFixed(3);
      pro1 = pro1.toFixed(3);
      car1 = car1.toFixed(3);
      alh1 = alh1.toFixed(3);

      document.getElementById("rf").value = " " + fat1;
      document.getElementById("rp").value = " " + pro1;
      document.getElementById("rh").value = " " + car1;
      document.getElementById("ra").value = " " + alh1;

      document.getElementById("l1").innerHTML = "lbs";
      document.getElementById("l2").innerHTML = "lbs";
      document.getElementById("l3").innerHTML = "lbs";
      document.getElementById("l4").innerHTML = "lbs";
    }

    if (caltype === "kg") {
      fat2 = fneed / 1000;
      pro2 = pneed / 1000;
      car2 = crneed / 1000;
      alh2 = aneed / 1000;

      fat2 = fat2.toFixed(3);
      pro2 = pro2.toFixed(3);
      car2 = car2.toFixed(3);
      alh2 = alh2.toFixed(3);

      document.getElementById("rf").value = " " + fat2;
      document.getElementById("rp").value = " " + pro2;
      document.getElementById("rh").value = " " + car2;
      document.getElementById("ra").value = " " + alh2;

      document.getElementById("l1").innerHTML = "kilogram";
      document.getElementById("l2").innerHTML = "kilogram";
      document.getElementById("l3").innerHTML = "kilogram";
      document.getElementById("l4").innerHTML = "kilogram";
    }
  } else {
    alert("Please fill your details properly!");
  }
}
*/
