// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// > Fais des console.log pour chaque exercice afin de montrer le résultat!
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
console.log(document.querySelector('h2').innerHTML)
// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
document.querySelector('h2').innerHTML = "Exercice1"
console.log(document.querySelector('h2').innerHTML)
// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
document.querySelector('h2').nextElementSibling.innerHTML = "Exercice 1"
// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
console.log(document.querySelector('section').getAttribute("id"));
// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
console.log(document.querySelector('h1').getAttribute("class"));
console.log(document.querySelector('h1').className);
// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let allH1 = document.querySelectorAll('h1');
allH1.forEach( e => {
    console.log(e.className);
})
// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
console.log(document.querySelector('input').attributes);
// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
console.log(document.querySelector('input').attributes[0]);
// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
console.log(document.querySelector('#inputPassword3').setAttribute("type", "password"));
// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
console.log(document.querySelector('input').setAttribute("type", "color"));
console.log(document.querySelector('input'));
