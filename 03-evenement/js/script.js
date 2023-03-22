window.onload = function(){ //Attend le chargement du DOM

	//Récupération de la balise possédant l'id #id1
	// let div1 = document.getElementById('id1');
	// 	console.log( div1 );
	// 	console.log( typeof( div1 ) ); //object

	// //On ajoute un événement, ici le 'click' qui entrainera l'exécution de la fonction1
	// div1.addEventListener( 'click', fonction1 );

	// function fonction1(){

	// 	alert("Vous avez cliqué dans la div 1 !");
	// }

	//------------------
	//Autre syntaxe :
	document.getElementById('id1').addEventListener('click', function(){

		alert("On a cliqué dans la div numero une !");
	} );

	//---------------------------------------------------------------
	document.getElementById('id2').addEventListener('dblclick', function(){

		alert("Vous avez double cliqué dans la div 2 ");
	} );

	//---------------------------------------------------------------
	document.getElementById('id3').addEventListener('mouseover', function(){

		alert("Vous avez rentré la souris dans la div 3 ");
	} );

	//---------------------------------------------------------------
	document.getElementById('id4').addEventListener('mouseout', function(){

		alert('Vous avez sorti la souris de la div 4 ');
	} );

	//---------------------------------------------------------------
	document.getElementById('id55').addEventListener('blur', function(){

		alert("Vous avez quitté l'input de la div 5 !");
	} );

	//---------------------------------------------------------------
	// document.getElementById('id66').addEventListener('focus', function(){

	// 	alert("Vous avez focus l'input !");
	// } );

	//---------------------------------------------------------------
	//Ici, on agit sur la balise <form> avec l'evenement 'submit'
	let formu = document.getElementsByClassName('formulaire');
		console.log( formu );

	document.getElementsByClassName('formulaire')[0].addEventListener('submit', function(){

		alert("Vous avez validé le formulaire !");
	} );

	//liste des evenements javascript :
	//https://developer.mozilla.org/fr/docs/Web/Events
}
