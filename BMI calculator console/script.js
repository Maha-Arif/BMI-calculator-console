var pounds=prompt("Enter Pounds") ;
var weight=pounds * 0.45 ;
console.log(pounds + " " + "pounds"+ " "+"are =" + " " +weight + " " + "Kilos");
var inches=prompt("Enter Inches") ;
var hight=inches * 2.54 ;
console.log( inches + " " + "Inches" + " "+"are ="+" "+hight + " " + "Centimeters");
var bmi= (weight /((hight * hight)/10000));
if(!isNaN(bmi))
{console.log(bmi);
if(bmi < 18.5){
    console.log("Underweight");
 }
 else if(bmi < 25){
     console.log("Healthy");
 }
 else if(bmi < 30){
    console.log("Overweight");
 }
 else{
    console.log("Obesity");
 }
}
