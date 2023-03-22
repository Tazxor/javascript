window.onload = function () {

    //window.onload = function(){ ... script JS ... } permet d'attendre le chargement du DOM avant d'exécuter les instructions de votre script

    // DOM : DOCUMENT OBJECT MODEL : Il s'agit de l'arborescence de tous les éléments d'une page web
    //Le DOM est une interface indépendante de tout langage de programmation et permet d'accéder et/ou de mettre à jour le contenu, la structure ou le style du document HTML.
    //Le document peut ensuite etre traité et les résultats de ces traitements peuvent etre réincorporés dans le document HTML tel qu'il sera présenté.

    //Sélection naturelle d'un élément HTML ( se faire grâce à l'id !)
    let selection1 = masection; // 'masection' provient de l'attribut id de la balise <section>
    console.log(selection1);
    console.log(typeof (selection1)); //object

    console.log(selection1.innerHTML); //.innerHTML : propriété qui permet d'afficher le contenu de la balise (ici, dans la console)

    selection1.style.background = "#fda500"; //Ici, on change la couleur de fond de la balise <section>

    //Sélection par nom de balise :
    let selection2 = document.getElementsByTagName('span');

    //NE PAS OUBLIER LE 's' à getElementsByTagName() parce que potentiellement on peut récupérer plusieurs élément qui ont le meme nom de balise
    console.log(selection2);

    console.log(selection2.innerHTML); //Affiche undefined

    console.log(selection2[0]); //Affiche la balise <span>

    console.log(selection2[0].innerHTML); //sur l'objet on accède à la propriété .innerHTML

    selection2[0].style.color = "red";

    //Sélection par l'id :
    let selection3 = document.getElementById('monarticle');

    //PAS DE 's' getElementById() car une 'id' sera unique !
    console.log(selection3);

    selection3.style.color = "green";

    //Sélection par sa classe :
    let selection4 = document.getElementsByClassName('avion');
    //NE PAS OUBLIER LE 's' à getElementsByClassName() parce que potentiellement on peut récupérer plusieurs élément qui ont la même classe
    console.log(selection4);

    //Ici, on applique un fond de couleur à la 3è div qui possède la classe avion
    selection4[2].style.background = 'tomato';

    //---------------------------------------------------------
    //selection par selecteur de balise unique :
    let selection5 = document.querySelector('h3');
    //querySelector() : récupère le PREMIER élément spécifié dans les parenthèses.
    console.log(selection5);

    selection5.style.color = "red";

    //---------------------------------------------------------
    //Selection par selecteur de balise multiple :
    let selection6 = document.querySelectorAll('p, span, h3');
    //querySelectorAll() : récupère TOUS les éléments spécifiés dans les parenthèses
    console.log(selection6);

    selection6[0].style.background = "gold";

    //boucle pour permettre de changer la couleur de fond de TOUS les éléments sélectionnés (ici, les <p> et le <span>)
    console.log(selection6.length); //taille de la sélection récupérée

    for (i = 0; i < selection6.length; i++) {

        selection6[i].style.background = "gold";
    }
}