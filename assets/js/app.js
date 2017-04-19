window.addEventListener( 'load', function (e){
	e.preventDefault();

	var contenedor = document.getElementById("contenedor");

	var divFather = document.createElement('div');
	var divChild = document.createElement('div');
	var divGrandChild = document.createElement('div');
	var divFather2 = document.createElement('div');
	var divChild2 = document.createElement('div');
	var divGrandChild2 = document.createElement('div');

	divGrandChild.setAttribute('class','divGrandChild');
	divChild.appendChild(divGrandChild);

	divChild.setAttribute('class','divChild');
	divFather.appendChild(divChild);

	divFather.setAttribute('class','divFather');
	contenedor.appendChild(divFather);
	
	divGrandChild2.setAttribute('class','divGrandChild2');
	divChild2.appendChild(divGrandChild2);

	divChild2.setAttribute('class','divChild2');
	divFather2.appendChild(divChild2);

	divFather2.setAttribute('class','divFather2');
	contenedor.appendChild(divFather2);
})