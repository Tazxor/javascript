// 1 - commentaires (raccourci : Ctrl+/)
/*
	Commentaire 
	sur plusieurs lignes

	slash+ etoile  .... etoile+ slash

	Dans l'ideal, mettre toujours un point virgule après chaque instructions (a savoir que ce n'est pas obligatoire en JS)
*/
//--------------------------------------------------------------
// 2 - Affichage
document.write('<h2> Affichage </h2>'); //affichage dans le document avec des balises html

// alert('Salut'); //boite de dialogue
// confirm('En etes vous certain ?'); //boite de dialogue avec un bouton de confirmation
// prompt("Quel temps fait-il ?"); //boite de dialogue avec un champ à remplir

console.log("ATTENTION AUX ERREURS DE SYNTAXE"); //message ecrit dnas la console de débugage

//--------------------------------------------------------------
// 3 - Les variables (declaration/affectation)
document.write('<h2> Les variables </h2>');
//Une variable c'est un espace nommé qui va contenir une/plusieurs

let exemple = "<p>information</p>"; // Ici, nous avons déclaré une variable nommée 'exemple' et qui contient la valeur "Une information"

document.write( exemple ); //affichage du contenu de la variable

//---------------------
var maBoite; //Le mot clé "var" permet de déclarer une variable, ici nommée 'maBoite'
	//Caractères acceptés : 0-9, a-z, A-Z, '_'
		// Par convention : le underscore ne s'utilisera jamais en premier ou dernier caractère du nom de votre variable ET ON NE COMMENCERA JAMAIS APR UN CHIFFRE

maBoite = 10; //Ici, on affecte la valeur (10) à la variable 'maBoite'

	// ATTENTION : le JAVASCRIPT est sensible à la casse (sensible à l'écriture au nommage) DONC ici, il faut bien écrire "maBoite" avec un 'B' majuscule comme définir lors de la déclaration de la variable.

	//Le JS recommande l'écriture en camelCase (Une majuscule pour chaque mot)

document.write( maBoite ); //affichage du contenu de la variable (10) sur le navigateur
console.log( maBoite ); //affichage le contenu de la variable dans la console de débugage du navigateur

var boite = 15; //déclaration + affectation
	console.log( boite ); //affiche 15 dans la console

	//----------------------------------
	//PAS CONVENTIONNEL : autre syntaxe possible pour déclaré (sans le mot clé "var") et affecté une valeur
	monAutreBoite = 'Bonjour'; 
		console.log( monAutreBoite ); //Affiche 'bonjour' dans la console

//------------------------------------------
var prenom = "Jean",
	nom = 'Jacques',
	genre = "masculin";
//Par convention, retour à la ligne pour chaque variable et indentation. On peut déclarer et affecter plusieurs variables sans avoir à réécrire le mot clé "var" en les séparant par une virgule et on terminera par un point virgule

console.log( nom ); //affiche le contenu de la variable 'jacques' SANS GUILLEMETS (ou SANS QUOTES) sinon, elle serait interprétée comme une chaine de caractère.
console.log( "nom" ); //affiche 'nom' (la chaine de caractères)

nom = 'Pierre'; //REAFFECTATION, ici, on change la valeur de la variable 'nom', on ecrase et remplace 'Jacques' par 'Pierre'
console.log( nom ); //Affiche 'Pierre'

nom = prenom; //REAFFECTATION : on peut affecter la valeur d'une autre variable dans une variable
console.log( nom ); //affiche 'Jean'

//-------------------------------------------------------
var fruit = 'pomme';
console.log( fruit ); //affiche 'pomme'

fruit += '-fraise'; //le symbole  '+=' permet d'AJOUTER une valeur (ici, 'fraise') à la variable 'fruit' SANS ECRASER le contenu initial de la variable (ici, 'pomme')
console.log( fruit ); //affiche 'pomme-fraise'

//-------------------------------------------------------
//Erreurs fréquentes sur les variables :

//document.write( quelqueChose ); //Affichera une erreur 'is not defined' dans la console, car nous n'avons pas déclaré la variable 'quelqueChose'

var chose; //déclaration d'une variable SANS LUI AFFECTER de valeurs
console.log( chose ); //Affichera une erreur "undefined" car nous avons déclaré la variable MAIS on NE lui a PAS AFFECTE de valeur

//-------------------------------------------------------
// var myName = prompt( "Quel est ton nom ?" ); //Ici, on stocke dans la variable nommée "myName" la valeur que l'utilisateur va saisir dans la boite de dialogue (le prompt)
// console.log( myName );

//--------------------------------------------------------------
// 4 - Concaténation 
document.write('<h2> Concaténation </h2>');
//La concaténation consiste à associer des chaines de caractères (string) avec des variables (ou des fonctions/methodes) grâce au symbole +

prenom = "Marco"; //reaffectation des variables (déclarées plus haut dans le script)
nom = "Polo";

document.write( prenom + ' - ' + nom + "<br>"); //affiche Marco-Polo dans le navigateur
console.log( prenom + ' - ' + nom ); //affiche Marco-Polo dans la console

document.write("<p> <strong>"+ prenom +'</strong> '+ nom +" est un grand voyageur</p>");

//--------------------------------------------------------------
// 5 - Types de données 
document.write('<h2> Types de données </h2>');

//les types numériques (number) : affectation SANS QUOTES( ou GUILLEMETS)
var chiffre = 20,
	negatif = -6,
	virgule = 2.3; //Ici, pour un chiffre à virgule, la virgule sera remplacée par le symbole point

console.log( typeof( chiffre ) ); //number
// typeof( arg ) : fonction interne de JS qui permet de déterminer le type d'une variable
console.log( typeof( negatif ) ); //number
console.log( typeof( virgule ) ); //number

//les types chaine de caractères (string) : affectation AVEC QUOTES/ GUILLEMETS
var texte = "Voici du texte entre guillemets";

var apostrophe = "Pour l'utilisation d'une apostrophe dans des quillemets, pas de soucis c'est  interprété normalement";

apostrophe = 'Pour l\'utilisation d\'une apostrophe dans des quotes simples, il faut utiliser le symbole backslash pour ne pas l\'interpréter';

console.log( typeof( texte ) ); //string
console.log( typeof( apostrophe ) ); //string

var numero = '123'; //Si on écrit un nombre entre quotes (ou guillemets) le navigateur l'interprètera comme une chaine de caractères
console.log( typeof( numero ) ); //string

//Les types boolean : TRUE (vrai) or FALSE (faux) qui s'écriront sans quotes (ou guillemets)
var choix = true;
console.log( typeof( choix ) ); //boolean

//--------------------------------------------------------------
// 6 - Constantes 
document.write('<h2> Constantes </h2>');
//Une constante est un espace nommé qui permet de conserver une/des valeurs qui seront constantes !

const BOUGE_PAS = "Ma cosntante impossible à modifier";
document.write( BOUGE_PAS );

//Par CONVENTION, on nomme les constantes en MAJUSCULE et UNDERSCORE (c'est aussi un moyen de faire comprendre aux développeurs que c'est une constante)

//const TEST; //affichera une erreur : "Missing initializer in const declaration", IL FAUT ABSOLUMENT renseigner une valeur lors de la déclaration de la constante 

// const BOUGE_PAS = "Nouvelle valeur"; //affichera une erreur dans la console : "has already been declared" car la constante a déjà été déclarée

// var BOUGE_PAS = "Autre valeur ?"; //affichera également une erreur dans la console : "has already been declared" car la constante a déjà été déclarée

// BOUGE_PAS = "Autre valeur ?"; //Affichera dans la console 

//--------------------------------------------------------------
// 7 - Opérations arithmétiques 
document.write('<h2> Opérations arithmétiques </h2>');

var resultat = 10 + 5; //addition
console.log( resultat ); // 15

resultat = 10 - 5; //soustraction
console.log( resultat ); // 5

resultat = 10 / 5; //division
console.log( resultat ); // 2

resultat = 10 * 5; //multiplication
console.log( resultat ); // 50

resultat = 10 % 3; // modulo (le reste d'une division)
console.log( resultat ); // 1
//Exemple : J'ai 10 bonbons, nous sommes 3 personnes, je veux répartir equitablement les bonbons entre chaque personne. Je donne donc 3 bonbons à chacun et il me reste 1 bonbon !

var chiffre1 = 20,
	chiffre2 = 5;

resultat = chiffre1 + chiffre2;
document.write( resultat + "<br>"); //25

resultat = chiffre1 + 23;
document.write( resultat + "<hr>"); //43

	//----------------------------------------------------
	numero = 10;
	document.write( numero + "<br>"); // 10

	numero = numero + 43; // numero = 10 + 43
	document.write( numero + "<br>"); //53

	numero += 12;   //Equivaut à : numero = numero + 12
	//ATTENTION: PAS de mot clé 'var'
	document.write( numero + "<br>"); //65

//----------------------------------------------------
//Exercice : Vous avez acheté 0.8kg de pommes et 0.7kg de poires.

//Déclarer une variable pour chaque fruit et chaque poids
//Puis afficher une phrase : 

	//"Nous avons acheté des pommes et des poires pour un total de 1.5kg"

		//Où bien sur, les fruits, les poids et le total sont remplacés par des variables

var fruit1 = 'pommes',
	fruit2 = 'poires',
	poids1 = 0.7,
	poids2 = 0.8;

var poidsTotal = poids1 + poids2;
	//console.log( poidsTotal );

document.write("Nous avons acheté des "+ fruit1 +" et des "+ fruit2 +" pour un total de "+ poidsTotal +" kg");

//--------------------------------------------------------------
// 8 - Structures conditionnelles
document.write('<h2> Structures conditionnelles</h2>');

var a = 10,
	b = 5,
	c = 2;

//Conditions IF/ELSE :

if( a > b ){ //SI a(10) est supérieur à b(5), SI la condition est vraie, renvoie TRUE, alors on exécute le code entre les accolades

	document.write("A est supérieur à B <br>");
}
else{ //SINON.... cas par défaut (c'est que la condition if a renvoyé 'false') et on exécute le code entre les

	document.write("Cas par défaut : A N'EST PAS supérieur à B <br>");
}

//---------------------------
//IF avec ET (&&) :
if( a > b && b > c ){ //SI  a(10) est supérieur à b (5) - ET - SI b (5) est supérieur c(2)

	document.write("Les deux conditions sont vraies <br>");
}

//---------------------------
//IF avec OU (||) =pipes / windows : AltGr+6 / Mac : Option+Shift+L
if( a == 9 || b > c ){

	document.write("Au moins une des deux conditions est vraie<br>");
}

//-------------------------------------------------------------
//CONDITION IF / ELSE IF / ELSE :
if( a == 8 ){ //SI a est égal à 8

	document.write("A est égal à 8<br>");
}
else if( a != 10 ){ //SINON SI a est diférent de 10

	// != signifie 'différent de'.
	//Le symbole '!' est égal à 'NOT', l'inverse de quelque chose

	document.write("A est différent de 10<br>");
}
else{ //SINON (cas par défaut )

	document.write("Tout est faux<br>");
}

//----------------------------------------------
//Comparaison avec le triple egal (===)
var vara = 1, //type number
	varb = "1"; //type string

	console.log( "Type de vara : " + typeof( vara ) );
	console.log( "Type de varb : " + typeof( varb ) );

if( vara == varb ){ //true

	document.write('Egalite en valeur uniquement<br>');
}
else{

	document.write('Différence en type<br>');
}

//Avec le triple egal : on compare la valeur ET le type des variables
if( vara === varb ){ //false

	document.write('Egalite en valeur ET en type<br>');
}
else{

	document.write('Différence en type ou en valeur<br>');
}

//----------------------------------------------
//Condition ternaire (forme contractée): C'est une autre manière d'écrire une condition if/else
var voiture = "citroen";

if( voiture == 'bmw' ){ //false

	document.write("C'est une voiture allemande<br>");
}
else{

	document.write("C'est une voiture étrangère<br>");
}

	//version ternaire
	( voiture == 'bmw' ) ? document.write("C'est une voiture ALLEMANDE<br>") : document.write("C'est une voiture ETRANGERE<br>");

	document.write( ( voiture == 'bmw' ) ? "C'est une voiture ALLEMANDE<br>" : "C'est une voiture ETRANGERE<br>" );

	//Condition ternaire :
		//la condition entre parenthèse
		//le '?' qui equivaut au 'if'
		//les ':' qui equivalent au 'else'

//----------------------------------------------
//isNaN() = 'is Not A Number' : fonction interne de JS qui permet de déterminer si la valeur N'EST PAS un nombre et la fonction renverra soit true soit false
var varc = "101"; //string
	console.log( "Varc est de type : " + typeof( varc ) ); // string

if( isNaN( varc ) ){ //SI la variable varc N'EST PAS un nombre, ici renvoie false

	document.write("Ce n'est pas un number APRES conversion<br>");
}
else{ //SINON... (cela signifie que c'est un nombre !)

	document.write("C'est un number APRES conversion<br>");
}

//Autre exemple :
varc = "douze"; //string
	console.log( "Varc est de type : " + typeof( varc ) ); // string

if( isNaN( varc ) ){ //SI la variable varc N'EST PAS un nombre, ici renvoie true

	document.write("Ce n'est pas un number APRES conversion<br>");
}
else{ //SINON... (cela signifie que c'est un nombre !)

	document.write("C'est un number APRES conversion<br>");
}

//------------------------------------------------------------------------------------
//Nous pouvons utiliser TOUS les opérateurs de comparaison pour comparer les variables :
/* exemple :
var var1 = 3,
	var2 = 4;

Egal ( == ) : Renvoi TRUE si les opérandes sont EGALES
	3 == var1
	"3" == var1
	3 == '3'

Différent de ( != ) : Renvoi TRUE si les opérandes NE SONT PAS EGALES :
	var1 != 4
	var2 != '3'

Strictement égal ( === ) : Renvoi TRUE si les opérandes SONT EGALES ET DU MEME TYPE :
	3 === var1
	4 === var2

Strictement différent ( !== ) : Renvoi TRUE si les opérandes NE SONT PAS EGALE ET/OU PAS DU MEME TYPE :
	var1 !== '3'
	3 !== '3'

Plus grand ( > ) : Renvoi TRUE si l'opérande de Gauche est plus grande que celle de Droite :
	var2 > var1
	"12" > 3

Plus grand ou égal ( >= ) : Renvoi TRUE si l'opérande de gauche est plus grande OU égale à l'opérande de droite :
	var2 >= var1
	var1 >= 3

Conclusion : Une condition renvoie toujours TRUE ou FALSE, et les instructions de la conditions ne seront exécutées QUE si la valeur de retour est TRUE !!
	if( condition ){

		instructions;
	}
Le type Boolean (true ou false) est donc à la fois un type mais aussi une valeur qui est retournée lorqu'on effectue des tests sur des données.

>> Javascipt compte 3 opérateurs logiques :
	AND = && 
	OR = ||
	NOT = !

	>> AND : s'écrit && et évalue le résultat en TRUE si les 2 expressions sont vraies. Si l'une des deux expressions testées est fausse, alors le résultat sera FALSE !
		true && true => true
		true && false => false
		false && true => false
		false && false => false

	>> OR : s'écrit || et évalue le résultat en TRUE si une ou l'autre ou les deux expressions sont vraies. Si les deux expressions sont fausses, alors le resultat sera FALSE !
		true || true => true
		true || false => true
		false || true => true
		false || false => false

	>> NOT : s'écrit ! et il transforme ce qui est TRUE en FALSE et vice versa.
		!true => false
		!false => true

*/
document.write('<hr>');
//------------------------------------------------------------------------------------
//EXERCIE : if/else => bonus version ternaire 
/*
	Demander l'age à l'internaute dans une boite de dialogue
		Si la réponse est vide, on affiche : "Vous n'avez pas répondu"
		Si la réponse N'EST PAS (isNaN) un chiffre, on affiche : "Vous avez répondu n'importe quoi"
		Si la réponse est un chiffre, on affiche : "Vous avez répondu avoir .. ans"
*/

// var reponse = prompt("Quel age as-tu ?");
// 	//console.log( reponse );

// if( reponse == '' ){ //SI la variable reponse est vide

// 	document.write( 'Vous n\'avez pas répondu<br>' );
// }
// else if( isNaN(reponse) ){ //SINON SI la reponse N'EST PAS un nombre

// 	document.write( "Vous avez répondu n'importe quoi<br>" );
// }
// else{ //SINON, c'est que l'utilisateur à renseigné un nombre

// 	document.write( "Vous avez répondu avoir " + reponse + ' ans !<br>');
// }

// //Version ternaire :
// ( reponse == '' ) ? document.write( 'Vous n\'avez pas répondu<br>' ) : ( ( isNaN(reponse) ) ? document.write( "Vous avez répondu n'importe quoi<br>" ) : document.write( "Vous avez répondu avoir " + reponse + ' ans !<br>') );

//---------------------------------------------
//CONDITION SWITCH : autre syntaxe pour une condition if/else
var couleur = 'jaune';

switch( couleur ){

	case 'bleu' :
		document.write("J'aime le bleu<br>");
	break;

	case 'rouge' :
		document.write("J'aime le rouge<br>");
	break;

	case 'vert' :
		document.write("J'aime le vert<br>");
	break;

	default : 
		document.write("J'aime pas la couleur<br>");
}

//EXERCICE : retranscrire le switch en if/else
if( couleur == 'bleu' ){

	document.write("J'aime le bleu<br>");
}
else if( couleur == 'rouge' ){

	document.write("J'aime le rouge<br>");
}
else if( couleur == 'vert' ){

	document.write("J'aime le vert<br>");
}
else{

	document.write("J'aime pas la couleur<br>");
}

//Autre syntaxe :
if( couleur == 'bleu' || couleur == 'rouge' || couleur == 'vert'){

	document.write("J'aime le "+ couleur +"<br>");
}
else{

	document.write("J'aime pas la couleur<br>");
}

//--------------------------------------------------------------
// 9 - Les boucles 
document.write('<h2> Les boucles </h2>');
//une boucle: sert à répéter une portion de code automatiquement

//boucle while : va répéter une portion de code indéfiniment TANT QUE la condition n'est pas réalisée 
var i = 1; 

//console.log( "Valeur initiale de i : " + i );

while( i <= 5 ){ //TANT QUE i est inférieur ou égal à 10, on exécute le code entre les accolades

	document.write( i + " => ");

	//document.write( "<img src='bonnet_rouge.jpg' width='30px'><br>" );

	i++; //Ici, on incrémente i de +1 à haque tour de boucle 
			// "i++"  equivaut à  "i = i + 1"
	//console.log("Valeur de i après incrémentation : "+ i );
}

document.write( '<hr>');
//------------------------------------------------------------------
//Exercice : Supprimer la flèche APRES le 5 via une boucle while
	// résultat attendu : 1 => 2 => 3 => 4 => 5

console.log("Valeur de i après la première boucle : "+ i );
i = 1; //Ici, on réinitialise i à ZERO car avec la boucle du dessus, la valeur de i est égale à 6 !

while( i <= 5 ){ //TANT QUE i est inférieur ou égal à 5, on exécute le code entre les accolades

	if( i == 5 ){ //SI i est égal à 5

		document.write( i ); //On affiche la valeur de i (donc 5)
	}
	else{ //SINON... c'est que la valeur est différente de 5

		document.write( i + ' => ' ); //On affiche la valeur de i concaténer avec une petite flèche
	}

	i++; //Incrémentation ( qui permet d'éviter une boucle infinie et de déclencher le tour de boucle suivant)
}

document.write( '<hr>');
//------------------------------------------------------------------
//BOUCLE FOR :
for( i = 0; i <= 10; i++ ){ //11 tours de boucle
//argument de la boucle for :  
	/*
		for( initialisation; condition; incrémentation ){ instruction }

	*/
	document.write( i + ' / ');
}

//EXERCICE : Afficher un select avec des options allant de 2022 a 1900 via une boucle for et dans le sens inverse 

document.write('<br><select name="annee">');

	for( var annee = 2022; annee >= 1900; annee-- ){ //122 tours de boucle

		document.write('<option value="'+ annee + '">'+ annee +'</option>');
	}

document.write('</select>');

//EXERCICE: Affichez les numéros de 1 à 10 dans un tableau sur UNE SEULE ligne

document.write('<table border="2">');
	document.write('<tr>');
		
		for( var cellule = 1; cellule <= 10; cellule++ ){

			document.write("<td> "+ cellule +" </td>");
		}

	document.write('</tr>');
document.write('</table>');

//EXERCICE: Boucles imbriquées
//Créer un tableau de 10 lignes et 10 colonnes (cellules) avec les chiffres allant de 1 à 100 !

var compteur = 1; //initialisation a UN ! 

document.write('<table border="3">');

	for( var ligne = 1; ligne <= 10; ligne++ ){ //10 tours de boucle pour créer nos 10 lignes

		document.write('<tr>');

			for( var cellule = 1; cellule <= 10; cellule++  ){ //10 tours de boucle pour créer nos 10 cellules PAR ligne

				document.write("<td>"+ compteur +"</td>"); //Nous passons ici 100 fois !

				compteur++; //Ici, on rajoute +1, à notre variable 'compteur'
					// compteur = compteur + 1
			}

		document.write('</tr>');
	}

document.write('</table><hr>');

//-----------------------------------
//version : Daniel
document.write("<table border='2'>");
  for(let i = 1; i <= 100; i+=10){ // valeur de i :  1 => 11 => 21 => etc...
    document.write('<tr>')
	    for(let j = i; j < i + 10; j++){
	    	document.write('<td>' + j + '</td>')
	    }
    document.write('</tr>')
  }
document.write("</table>");

//-----------------------------------
//version : Francois
document.write("<table border='2'>");
    for(var line = 0; line < 10; line++){ //10 tours de boucle ( de 0 à 9 )
        document.write("<tr>");
            for(var numero = 1; numero <= 10; numero++){ //10 tours de boucle ( de 1 à 10)

                document.write("<td>"+ (line * 10 + numero)  +"</td>");
            }
        document.write("</tr>");
    }
document.write("</table><br>");

//-----------------------------------
//version : valentin
document.write('<table border="2">');
	document.write('<tr>');

	for (var i = 1; i <= 100; i++) { //100 tours de boucle

	    if ( i % 10 == 0) { //SI le restant de la division par 10 est gale à ZERO

	    	if( i == 100 ){
	        	document.write("<td>" + i + "</td></tr> ");
	    	}
	    	else{
	        document.write("<td>" + i + "</td></tr> <tr> ");
	    	}
	    }
	    else {
	        document.write("<td>" + i + "</td>");
	    }
	}
document.write("</table>");

document.write( '<hr>');
//------------------------------------------------------------------
//BOUCLE DO WHILE :

i = 5;

do{ //FAIT (exécute) le code entre les accolades

	document.write("<p> ce code s'exécutera UNE SEULE FOIS</p>");

	document.write("<p>Valeur de i : "+ i +"</p>");

	i++; //incrémentation +1
}
while( i > 10 ); //TANT QUE la condtion N'est pas réalisée

//exemple :
// do{ //Exécute le code suivant

// 	var response = prompt("Quelle est la capitale de la France ?"); //Ici, je stocke la valeur  saisie par l'internaute dans la variable 'response'
// 		console.log( response );

// 	response = response.toLowerCase(); //méthode permettant de passer une chaine en minuscule
// 		console.log( response );
// } 
// while( response != 'paris' ); //TANT que la réponse est différente de 'Paris'

//--------------------------------------------------------------
// 10 - Les fonctions prédéfinies 
document.write('<h2> Les fonctions prédéfinies </h2>');

var phrase = "Salut je m'appelle Jeremie<br>";
//la variable 'phrase' qui contient du texte (string) est en réalité un objet string qui possède plusieurs méthodes et 1 propriété

document.write( phrase );

document.write( "Le mot Jeremie se trouve à la position : " +  phrase.indexOf('Jeremie')  + "<br>" );
//indexOf( arg ) : retourne la position de la première lettre 'Jeremie' dans la phrase OU retourne la position d'un élément en particulier dans un tableau (Array)
	//ATTENTION , on commence à compter à partir de ZERO

phrase = "Bonjour Pierre comment vas-tu?";

var decoupe = phrase.substring( 8, 14 );
//substring( arg1, arg2 ) : permet de récupérer un morceau d'une chaine
	//arg1 : Où on veut commencer la découpe (on commence à compter à partir de ZERO !)
	//arg2 : où on temrine la découpe

document.write( decoupe + '<br>');

document.write( phrase.toLowerCase() + "<br>");
//toLowerCase() : permet de passer la chaine en minuscule

document.write( phrase.toUpperCase() + "<br>");
//toUpperCase() : permet de passer la chaine en MAJUSCULE

//-----------------------------
//propriété 'length' d'un objet string :
document.write( phrase.length + "<br>" );
//La propriété "length" retourne la longueur (le nombre de caractères) de la chaine
	// PAS DE PARENTHSES, c'est une propriété et non pas une méthode (fonction)

//--------------------------------------------------------------
// 11 - Les fonctions utilisateur 
document.write('<h2> Les fonctions utilisateur </h2>');

//Creation d'une fonction (sans paramètre)
//FUNCTION STATEMENT (méthode conventionnelle) : 

	//PAR CONVENTION, on déclare une fonction de la manière suivante: 		function name() { instructions } 	où les parenthèses sont collées au 'name' (=nom de la focntion)

function maFonction(){

	document.write("<h3> On est mercredi </h3>");
}

maFonction(); //Appel de la fonction pour l'exécuter !

	//TOUJOURS mettre les PARENTHESES pour une fonction

//----------------------------------------
//FUNCTION OPERATOR :
//PAR CONVENTION : function (){}, il y a un espace entre le mot clé 'function' et les parenthèses 

var autreFonction = function (){

	document.write("<h3> il est 11H15 </h3>");
}

autreFonction(); //appel de la fonction pour l'exécuter

//----------------------------------------
//Fonction AVEC UN PARAMETRE :
function direBonjour( prenom = 'Bob' ){ //Ici, 'prenom' est un paramètre de la fonction et DONC, lors de l'appel de la fonction, il faudra OBLIGATOIREMENT lui passer un argument en paramètre (entre parenthèses)

	//SI on en renseigne pas de paramètre lors de l'appel de la fonction, la valeur par défaut sera 'Bob'

	document.write("<p>Bonjour "+ prenom +", comment ca va ?</p>");
}

direBonjour( 'Manon' ); //affichera Bonjour Manon 
direBonjour(); //affichera Bonjour Bob (car pas de paramètre)

//----------------------------------------
//Fonction pour faire un affichage dans le navigateurs
function d( arg ){

	document.write( arg + "<br>");
}

d("On affiche sur la page");
d("<hr>");
//--------------------------------------
//EXERCICE: 
//création meteo, avec deux arguments (saison, temperature) pour afficher la phrase :
	//"Nous sommes en ... et il fait ... degrés !"
function meteo( saison, temperature ){

	d("Nous sommes en "+ saison +" et il fait "+ temperature+" degrés !");
}

meteo( "été", 34 ); //appel et exécution de la condition avec les paramètres attendus
meteo( "printemps", 15 );
meteo( "automne", 0.2 );
meteo( "hiver", -1 );

d('<hr>');
d('<hr>');
//SUITE EXERCICE:
//Faire en sorte de modifier l'article de la saison pour printemps ( "au" printemps)
//ET de modifier le mot 'degré' qui doit s'écrire avec un "s" au pluriel et SANS "s" au singulier donc entre -2° et 2°
function meteo( saison, temperature ){

	if( saison == 'printemps' ){ //SI le paramètre 'saison' passé en argument de la fonction est égal à 'printemps', alors je crée une variable avec la valeur 'au'

		var article = ' au ';
	}
	else{ //SINON, c'est que c'est forcément : été, automne ou hiver et donc je crée une variable avec la valeur 'en'

		var article = ' en ';
	}

	//version ternaire :
	//var article = ( saison == 'printemps' ) ? ' au ' : ' en ';

	if( temperature > 1 || temperature < -1 ){ //SI le paramètre passé en argument lors de l'appel de la fonction est supérieur à 1 - OU - qu'il est inférieur à -1, alors on crée un variable avec la valeur degrés AVEC un 's'

		var deg = ' degrés';
	}
	else{ //SINON, c'est que l'on est dans l'interval [1:-1] et donc on crée une variable avec degré SANS 's'

		var deg = ' degré';
	}

	//version ternaire : 
	//var deg = ( temperature > 1 || temperature < -1 ) ? ' degrés' : ' degré';

	d("Nous sommes "+ article + " " + saison +" et il fait "+ temperature +" "+ deg +" !");
}

meteo( "été", 34 ); //appel et exécution de la condition avec les paramètres attendus
meteo( "printemps", 15 );
meteo( "automne", 0.2 );
meteo( "hiver", -1 );

//ALEX
function meteo( saison, temperature ){

    if (saison == "printemps"){
		d("Nous sommes au "+ saison +" et il fait "+ temperature +" degré !");
	}
	else if (saison == "printemps" && temperature > 1){
		d("Nous sommes au "+ saison +" et il fait "+ temperature+" degréS !");
	}
	else if (saison !== "printemps" && temperature <= 1){  
		d("Nous sommes en "+ saison +" et il fait "+ temperature+" degré !");
	}
	else{
		d("Nous sommes en "+ saison +" et il fait "+ temperature+" degrés !");	
	}	
}
meteo( "été", 30); 
meteo( "printemps", 15 );
meteo( "automne", 0.2 );
meteo( "hiver", -1 );

d('<hr>');
//----------------------------------------------------------------------
//fonction auto appelante : qui s'exécute toute seule 

( function(){

	d("Je m'affiche car la fonction s'appelle toute seule");

} )();

//----------------------------------------------------------------------
//Le mot clé "return" : permet de sortir une valeur de la fonction

	//une fonction s'arrêtera immédiatement au moment où l'instruction sera traitée

	// return (expression)
		// => l'expression dont on souhaite renvoyer la valeur. Si il n'y a pas d'expression, la valeur renvoyée sera "undefined"

function somme( valeur1, valeur2 ){

	console.log("Premier affichage dans la console via ma fonction");

	var resultat = valeur1 + valeur2;
		console.log( resultat );

	return resultat;

	console.log("DEUXIEME affichage dans la console via ma fonction"); //Ce console.log() ne fonctionne pas car elle se trouve APRES le mot clé "return" et de ce fait nous avons déjà quitté la fonction
}

d( "La somme demandée est égale à : " + somme( 3, 4 ) ); //Ici, nous faisons un affichage de la fonction pour voir ce que retourne la fonction

//--------------------------------------------------------------
// 12 - La portée des variables 
document.write('<h2> La portée des variables </h2>');

//selon l'endroit où une variable est déclarée, celle-ci pourra être accessible (visible) PARTOUT dans le script, ou bien uniquement dans une portion confinée de code (scope).

//VARIABLES GLOBALES :
	//Une variable déclarée SANS le mot clé 'var' (de façon implicite), sera accessible PARTOUT dans le script.

//VARIABLES LOCALES : 
	//Une variable déclarée AVEC le mot clé 'var' (de façon explicite), sera soit :
		// GLOBALE à l'EXTERIEUR d'une fonction
		// LOCALE à l'intérieur d'une fonction

//---------------------------------------------
var animal = 'loup'; //variable externe (d'une fonction), dans le script courant déclarée AVEC le mot clé VAR => GLOBALE

function jungle(){

	var animal = 'tigre'; //variable interne (d'une fonction), dans le scope d'une fonction déclarée AVEC le mot clé VAR  => LOCALE

	return animal;
}

d( animal ); // affiche : loup 
d( jungle() ); //Affichage de l'appel de la fonction jungle() qui retourne la variable animal (dans la fonction) : tigre
d( animal + '<hr>'); //affiche : loup

//----------------------------------------------
function ocean(){

	poisson = 'requin'; //variable SANS le mot clé VAR => GLOBALE
	return poisson;
}

//d( poisson ); //ERROR : "undefined" car la variable n'est pas encore déclarée, elle sera une fois que la fonction sera appelée

d( ocean() ); //requin
d( poisson + "<hr>"); //requin => la variable existe desormais dans le script courant dès lors que la fonction a été appelée AVANT 

//----------------------------------------------
 //variable externe => GLOBALE
var oiseau = "aigle";

function ciel(){

	oiseau = 'faucon'; //variable (SANS 'var') => GLOBALE
	return oiseau;
}

d( oiseau ); //aigle
d( ciel() ); //faucon
d( oiseau ); // faucon => en exécutant la fonction ciel() AVANT, on a changé le contenu de la variable oiseau car elle devenue globale

d('<hr>');
//----------------------------------------------
//l'instruction LET : permet de déclarer une variable dont la portée sera celle de son bloc (scope) courant

let vehicule = 'renault'; //création d'une variable noméee 'vehicule'

d( vehicule ); // affiche Renault

if( vehicule == 'renault' ){

	let vehicule = "mercedes";
	d( vehicule); // mercedes
}

d( vehicule ); //renault

vehicule = 'jaguar'; //reaffectation de la variable
d( vehicule );

//let vehicule = "ford"; //Entrainera une erreur : 'vehicule' a déja été déclarée

//--------------------------------------------------------------
// 13 - Les arrays : Les tableaux 
document.write('<h2> Les arrays : Les tableaux </h2>');

//Déclaration d'un array nommée 'fruits' :

let fruits = ['banane', 'pomme', 'framboise', 'peche', 'poire' ];
	console.log( fruits );

let tableau = ['Fakir', 234, "Une phrase", true];
	console.log( tableau );

d( tableau ); //affiche la totalité des informations du tableau séparées par des virgules

//On veut afficher "Une phrase" donc ici, la 3ème valeur du tableau 
d( tableau[2] ); 
//Pour aller récupérer un élément dans un tableau, il faut appeler le tableau et préciser entre crochets l'index correspondant !

	//Le premier indice d'un tableau commence a ZERO !!

//On veut afficher "poire" du tableau 'fruits'
d( fruits[4] );

//On souhaite remplacer la valeur "une phrase" par "chocolat" dans notre tableau :
tableau[2] = "chocolat";
d( tableau[2] );

//Pour retrouver l'indice d'un élément d'un  tableau :
	// indexOf( 'votreRecherche' )

let indicePeche = fruits.indexOf('peche');

	d( indicePeche ); //affiche l'indice du tableau de la valeur peche : 3

	d( fruits[ indicePeche ] ); //affiche l'élément dans le tableau : peche

//--------------------------------------------------------
//Les Arrays bénéficie de la propriété 'length' qui eretourne la taille du tableau (le nombre d'élément dans le tableau)
d( "Nombre d'élément dans le tableau fruit : " +  fruits.length );

//--------------------------------------------------------
//Autre manière de déclarer un tableau :
let tabNombre = Array('un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept');
	
	//Attention de bien mettre une MAJUSCULE a Array() !
		console.log( tabNombre );

//affiche du mot 'trois': 
d( tabNombre[2] );

//Récupération de du nombre d'élément du tableau :
let taille = tabNombre.length; //propriété length : retourne la longueur du tableau
	console.log("Nombre élément du tableau :" + taille );

//Parcourir un array avec une boucle 'for' :
for( index = 0; index < taille; index++ ){

	d('Indice : ' + index + ' correspond à la valeur : '+ tabNombre[ index ] );
}

d('<hr>');
//--------------------------------------------------------
//Parcourir un Array avec les boucles FOR IN et FOR OF :
//Comme les types 'arrays' sont en réalité des objets et donc chaque index est en réalité une propriété, nous avons la possibilité d'utiliser la syntaxe objet pour afficher le contenu du tableau ou le parcourir grace aux boucles FOR IN et FOR OF :

//BOUCLE FOR IN :
for( var k in tabNombre ){ //Ici, la variable 'k' correspond aux indices du tableau 'tabNombre'

	d('Indice : ' + k + ' / valeur : '+ tabNombre[ k ] );
}

//---------------------------------------
//EXERCICE : Créer un tableau avec les tailles : S, M, L, XL, XXL.
//A l'aide d'une boucle FOR IN afficher dans une select/option les tailles provenant du tableau 

let tailles = ['S', 'M', 'L', 'XL', 'XXL'];
	console.log( tailles );

d('<select>');

	for( var t in tailles ){

		d("<option value='" + tailles[ t ] +"' > "+ tailles[ t ] +" </option>");
	}

d('</select>');

//---------------------------------------
//BOUCLE FOR :
for( var value of tailles ){ //Ici, la variable 'value' parcours directement les valeurs du tableau

	d("<strong>"+ value +"</strong>");
}

//---------------------------------------
//Arrays multidumentionnels : ce sont des tableaux dans un tableaux
let deuxDimensions = [ 
						['fraise', 'pomme', 'poire'], 
						['tomate', 'carotte', 'choux'] 
					];

console.log( deuxDimensions );

//Affichage de la valeur 'carotte' :
d( deuxDimensions[1][1] );

//--------------------------------------------------------------
// 14 - Les objects
document.write('<h2> Les objects</h2>');

//Création d'un objet de la manière appelée : OBJECT LITERAL
let objet = {} //déclaration

	objet.prenom = 'Pandi'; //remplissage de l'objet (affectation de valeur dans l'objet)
	objet['nom'] = 'Panda'; //remplissage de l'objet (affectation de valeur dans l'objet)
		//Cette écriture fonction mais n'est pas conventionnelle sur les objets.

	console.log( objet );

//Pour récupérer un élément d'un objet, il faut préciser l'objet sur lequel on veut récupérer une valeur et avec le symbole point '.' on rpécise le nom de la propriété corresopndante à la valeur que l'on souhaite récupérer.

d( objet.nom ); //Affiche Panda
d( objet['prenom'] ); //Affiche Pandi

//------------------------------------
//Creation d'un objet de la manière appelée : CONSTRUCTOR 
let autreObjet = new Object();
//le mot clé "new" permet de faire une "instanciation" et donc de créer un objet
console.log( autreObjet );

	autreObjet.prenom = "Marco"; //remplissage de l'objet
	autreObjet.age = 45;

	console.log( autreObjet );

//Afficahge du prenom:
d( autreObjet.prenom );

//------------------------------------
//Creation d'un objet avec des propriétés :
let personnage = {

	nom : "Tintin",
	compagnon : 'chien',
	age : 34

	//ATTENTION, PAS DE VIRGULE ou de point virgule pour la dernière infos car ce n'est pas une instruction
}

console.log( personnage );

d( personnage.compagnon ); //Affichage de 'chien'

//Modification de la valeur de la propriété 'compagnon' :
personnage.compagnon = "Milou"; //Ici, on remplace la valeur initiaile de la porpriété existante ('chien' par la nouvelle valeur 'Milou')

d( personnage.compagnon ); //Affichage de 'Milou'

//------------------------------------
//-------------------------------------------------------
//Creation d'un objet avec des propriétés (variables) et des méthodes (functions) :
let maVoiture = {

	marque : 'Mercedes',
	modele : 'Classe A',
	couleur : 'noire',
	changerCouleur : function( newColor ){

						this.couleur = newColor;
						//le mot clé 'this' signifie 'lui-même' (donc ici, l'objet dans lequel on se trouve)
					},

	optionDeSerie : ['clim', 'autoradio', 'cuir'],
	annee : 2010,
	toiOuvrant : true,
	motorisation : {
						energie : 'diesel',
						puissance : '110CV',
						etancheite : true
					},
	infos : function(){
		var marque_i = this.marque,
			modele_i = this.modele,
			couleur_i = this.couleur,
			annee_i = this.annee,
			optionDeSerie_i = this.optionDeSerie;

		d("Les infos concernant cette voiture sont les suivantes : ");
		d("Marque : "+ marque_i +"<br>Modele : "+ modele_i+"<br>Couleur : "+ couleur_i+"<br>Annee : "+ annee_i+"<br>Options de série : "+ optionDeSerie_i);
	}
}

console.log( maVoiture );

//Affichage des propriétés de lobjet :
d( maVoiture.marque ); // Mercedes
d( maVoiture.couleur ); // noire

maVoiture.changerCouleur('rouge'); //on accède à la méthode chagnerCouleur() qui attend un argument. TOUJOURS METTRE LES PARENTHSES qu'il y ai un argument ou non !!

//Afficahge de la couleur après utilisation de la méthode changerCouleur()
d( maVoiture.couleur + "<hr>"); // Rouge

//utilisation de la méthode infos() de l'objet TOUJOURS AVEC DES PARENTHESES !
maVoiture.infos();

//Affichage de l'objet ! La ligne ci-dessous affichera [object Object], ON NE PEUT PAS AFFICHER le contenu d'un objet tel quel. Il faut parcourir les infos de l'objet ou aller piocher dedans
d( maVoiture );

//Affiche 'diesel' :
d( maVoiture.motorisation.energie ); //pour accéder aux objets enfants d'un objet, on ajout un point pour chaque palier.

d('<hr>');
//------------------------------------
//BOUCLE FOR IN : pour parcourir l'objet 'maVoiture'
for( var propriete in maVoiture ){ //Syntaxe pour récupérer les propriétés et les méthodes de l'objet

		d( propriete ); 
}

d('<hr>');

for( propriete in maVoiture ){ //Syntaxe pour récupérer les valeurs des propriétés et des méthodes de l'objet

	d( maVoiture[propriete] ); 
}

//--------------------------------------------------------------
// 15 - THIS 
document.write('<h2> THIS </h2>');
// le mot clé "THIS" se réfère à l'objet courant dans lequel on se trouve

//Creation d'une fonction de "fabrique" d'objet appelée "constructeur" :
function Animal( nom, espece, categorie, age ){
//Attentino: la première lettre d'un contruscteur sera TOUJOURS EN MAJUSUCLE

	this.nom = nom;
	this.espece = espece;
	this.categorie = categorie;
	this.age = age;

	this.change = function(newAge){

		this.age = newAge;
		return this.age
	}
}


































//permet de mettre des sauts de lignes dans la console *
console.log( '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
