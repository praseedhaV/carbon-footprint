var testbutton1 = $('.meatbutton1');
var placeholder1= $('#placehold1')

testbutton1.on('click',buttn1);

function buttn1(e){
  e.preventDefault();
  var inputed1= $('.input1').val();
  placeholder1.text(`${inputed1*780}lbs of CO2 per year`);
}


var testbutton2 = $('.meatbutton2');
var placeholder2= $('#placehold2');

testbutton2.on('click',buttn2);

function buttn2(e){
  e.preventDefault();
  var inputed2= $('.input2').val();
  placeholder2.text(`${inputed2*1144} lbs of CO2 per year`);
}

var testbutton3 = $('.meatbutton3');
var placeholder3= $('#placehold3')

testbutton3.on('click',buttn3);

function buttn3(e){
  e.preventDefault();
  var inputed3= $('.input3').val();
  placeholder3.text(`${inputed3*195} lbs of CO2 per year`);
}


var testbutton4 = $('.meatbutton4');
var placeholder4= $('#placehold4')

testbutton4.on('click',buttn4);

function buttn4(e){
  e.preventDefault();
  var inputed4= $('.input4').val();
  placeholder4.text(`${inputed4*344.5} lbs of CO2 per year`);
}



var testbutton5 = $('.meatbutton5');
var placeholder5= $('#placehold5');

testbutton5.on('click',buttn5);

function buttn5(e){
  e.preventDefault();
  var inputed5= $('.input5').val();
  placeholder5.text(`${inputed5*390} lbs of CO2 per year`);
}

 var total = $('.totalbutton');
 var totalnum= $('.totalnum');

total.on('click',buttn6)
function buttn6(e){
  e.preventDefault();
  var inputed5= $('.input5').val()*390;
  var inputed4= $('.input4').val()*344.5;
  var inputed3= $('.input3').val()*195;
  var inputed2= $('.input2').val()*1144;
  var inputed1= $('.input1').val()*780;
  totalnum.text(`${inputed5 + inputed4 + inputed3+inputed2+inputed1} lbs CO2 released per year`);
}
