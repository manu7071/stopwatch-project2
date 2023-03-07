// creating variable
var hr=0;
var min=0;
var sec=0;

// creating a new variablr for deciding stopwatch running or stop
var timer=false;
function start(){
timer= true;
stopwatch();
}
function stop(){
timer=false;
}
function reset(){
timer=false;
hr=0;
min=0;
sec=0;
// creting the string for fix the reset value
document.getElementById("hr").innerHTML="00";
document.getElementById("min").innerHTML="00";
document.getElementById("sec").innerHTML="00";
}

// actual me work krne wala function
function stopwatch(){
if(timer==true){
   sec=sec+1;

   if(sec==60){
    min=min+1;
    sec=0;
   }
   if(min==60){
    hr=hr+1;
    min=0;
    sec=0;
   }
// creting the string variable for converting in the string
   var hrString=hr;
   var minString=min;
   var secString=sec;

   if(hr<10){
    hrString="0"+hrString;
   }
   if(min<10){
    minString="0"+minString;
   }
   if(sec<10){
    secString="0"+secString;
   }
//    update the all value in the string 
   document.getElementById("hr").innerHTML=hrString;
   document.getElementById("min").innerHTML=minString;
   document.getElementById("sec").innerHTML=secString;
  
    setTimeout("stopwatch()",1000);
}
}