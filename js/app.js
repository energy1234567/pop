// function addTextToInput(anElement) {
//     var text = document.getElementById('jaloby').value;
//     if (text != "")
//       text += ",";
//     text += anElement.innerText;
//     document.getElementById('jaloby').value = text;
//   }

//Сразу говорю - ужас, но я попытался ;)

// function button_1() {

//     document.getElementById('panelPrompt').value="5";
    

// }

// function button_2() {

//         document.getElementById('panelPrompt').value="5";
 
// }
// function button_3() {

//     document.getElementById('panelPrompt').value="7";
    
// }
// function button_4() {

//     document.getElementById('panelPrompt').value="10";
    
// }











// dfdfef
// const button = document.querySelector('input');
// const paragraph = document.querySelector('p');

// button.addEventListener('click', updateButton);

// function updateButton() {
//   if (button.value === '0') {
//     button.value = 'Выключить ПК';
//     paragraph.textContent = '5';
//   } else {
//     button.value = 'Запустить ПК';
//     paragraph.textContent = 'ПК выключен.';
//   }
// }

// function func(event) {
//   if(event.keyCode==13) {
//     alert(document.getElementById("txt").value);
//   }
// }




var coffee = [];
	document.getElementById("animals").innerHTML = coffee; 
	var newCoffee;

	function myFunc() {
	  newCoffee = document.getElementsByTagName( "input" )[0].value; 
	  coffee.unshift( newCoffee ); 
	  document.getElementById("coffee").innerHTML = coffee; 
	}
	function myFunc2() {    

	  newCoffee = document.getElementsByTagName( "input" )[0].value; 
	  coffee.push( newCoffee ); 
	  document.getElementById("coffee").innerHTML = coffee; 
	}		
	function myFunc3() {
	  newCoffee = document.getElementsByTagName( "input" )[0].value; 
	  coffee.pop( newCoffee ); 
	  document.getElementById("coffee").innerHTML = coffee; 
	}		
	
	function myFunc3() {
	  newCoffee = document.getElementsByTagName( "input" )[0].value;
	  coffee.shift( newCoffee ); 
	  document.getElementById("coffee").innerHTML = coffee; 
	}		
	

 