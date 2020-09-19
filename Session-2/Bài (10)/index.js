console.log("bài 10");
let mass = prompt("Your weigh in kg?"); mass=Number(mass);
let heigh = prompt("You heigh in cm?"); heigh=Number(heigh);
let c = Number (heigh/100);
let BMI = Number(mass/(c*c));
alert(`Your BMI is ${BMI}`);
if (BMI<16) {alert("You are Severely underweight")}
else if ( BMI<18.5) {alert("You are Underweight")}
else if ( BMI<25) {alert("You are Normal")}
else if (BMI<30) {alert("You are Overweight")}
else {alert("You are Obese")}
