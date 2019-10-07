# Slide in on scroll 

Dans le cadre de cet exercice, nous vous demandons de détecter l’apparition des images dans le flux afin de les faire apparaître de l’extérieur vers l’intérieur. 



![](./readme.gif)

⚠️ Cet exercice permet de manipuler des propriétés intéressantes de la fenêtre ainsi que des calculs sur la hauteur. Toutefois, nous retiendrons que cet exercice ne répond pas aux critères d'ergonomies que nous aimons retrouver dans vos projets. Tout de même, il permet de découvrir des fonctions intéressantes. Allons-y. 





# Énoncé



1. Écoutez le scroll de la fenêtre et déterminez si une des images `.slide-in` présentent dans la page vient d'apparaître. Nous considérer qu’elle apparaît quand elle devient visible à plus 50%. Dans ce cas, il faut jouer l’animation css en ajoutant la classe `.active`. Si elle n'est plus visible alors il faut retirer la classe. `.active`. 

2. Servez-vous de la fonction `debounce` qui a pour objectif de réduire le nombre d'appels à votre fonction de calcul. Attacher une fonction au scroll de la page peut significativement réduire les performances de la page et ainsi nuire à l’expérience utilisateur, puisque pour chaque pixel déplacer lors du scroll la fonction liée à cet événement pourrait être appelé. D’où la fonction `debounce`.

