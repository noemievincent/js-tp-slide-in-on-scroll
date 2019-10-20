# Slide in on scroll
> JS exercise given at HEPL

* * *

**js-tp-slide-in-on-scroll** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *
> JS exercise given at HEPL

* * *

**js-tp-slide-in-on-scroll** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *
Dans le cadre de cet exercice, nous vous demandons de détecter l’apparition des images dans le flux afin de les faire apparaître de l’extérieur vers l’intérieur. 



![](./readme.gif)

⚠️ Cet exercice permet de manipuler des propriétés intéressantes de la fenêtre ainsi que des calculs sur la hauteur. Toutefois, nous retiendrons que cet exercice ne répond pas aux critères d'ergonomies que nous aimons retrouver dans vos projets. Tout de même, il permet de découvrir des fonctions intéressantes. Allons-y. 





# Énoncé



1. Écoutez le scroll de la fenêtre et déterminez si une des images `.slide-in` présentent dans la page vient d'apparaître. Nous considérer qu’elle apparaît quand elle devient visible à plus 50%. Dans ce cas, il faut jouer l’animation css en ajoutant la classe `.active`. Si elle n'est plus visible alors il faut retirer la classe. `.active`. 

2. Servez-vous de la fonction `debounce` qui a pour objectif de réduire le nombre d'appels à votre fonction de calcul. Attacher une fonction au scroll de la page peut significativement réduire les performances de la page et ainsi nuire à l’expérience utilisateur, puisque pour chaque pixel déplacer lors du scroll la fonction liée à cet événement pourrait être appelé. D’où la fonction `debounce`.

~~~javascript
function debounce(func, wait = 3, immediate = true) {
    let timeout;
    return () => {
      const context = this;
      // eslint-disable-next-line prefer-rest-params
      const args = arguments;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
~~~

