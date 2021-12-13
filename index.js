//1 : Modifier le texte du titre h1 avec "Le meilleur burger »
   var titre = document.getElementsByTagName('h1');
   var texteTitre = titre[0].innerHTML='Le meilleur burgers'; //utilisation d'une variable intermediaire
   // texteTitre.innerHTML='Le meilleur burger'; //en 3 lignes

// également possible en une seule ligne, avec un autre getter d'éléments
  // document.querySelector('h1').innerHTML="Le meilleur burger";





// 2. Modifier le HTML du deuxième h2, pour mettre "Il est <strong>délicieux</strong>, essayez-le! »
  var titre2 = document.getElementsByTagName('h2');
  var texteTitre2 = titre2[1].innerHTML='Il est <strong>délicieux</strong>, essayez-le!'





//3 Récupérer l'objet "Pain du haut", et modifier sa largeur (en %)
  // 1ere methode :
  document.getElementById('top').style.width="10%";

  //2eme methode :
  // document.getElementById('top').setAttribute('style', 'width=40%')



  //4 Récupérer la deuxième boulette, et lui rajouter la classe css "pickle »;
      // 1ere methode :
   document.querySelectorAll('.meatball')[1].classList.add("pickle");

      //2eme methode :
  // var boulette = document.getElementsByClassName('meatball')[1];
  // boulette.classList.add('pickle');



//5 Récupérer la troisième boulette et augmenter sa largeur à 90px;
    document.querySelectorAll('.meatball')[2].style.width="90px";

//6 Récupérer la tomate, et modifier sa couleur de fond en orange
  document.querySelector('.tomato').style.backgroundColor="blue";



  //7 Pour chaque tranche de fromage, augmenter l'arrondi de la bordure
      //1ere methode
  var cheese = document.getElementsByClassName('cheese');
  for (i=0; i<cheese.length; i++){
  cheese[i].style.borderRadius="50px";
  }
      // 2eme methode
    // var i=0;
    // while(i<cheese.length){
    //   cheese[i].style.borderRadius="50px"; i++;
    // }
