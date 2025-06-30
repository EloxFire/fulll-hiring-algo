# Fulll - Test technique - Algo
#### Enzo AVAGLIANO - 26-06-2025
___


### Rappel du sujet
Le but est de creer un algorithme "FizzBuzz" qui à pour but de déterminer si un nombre est divisible par 3, 5 ou les deux.

### Technos
L'algorithme de ce répo est rédigé en TypeScript. Et utilise l'API readline intégrée de Node.js pour lire les entrées de l'utilisateur directement dans la console.

### La logique utilisée
La clé ici réside dans l'utilisation de l'opérateur modulo `%` qui retourne le reste de la division d'un nombre `n` par un nombre `k`.
Si le reste est égal à 0, alors `n` est divisible par `k`.

Dans le cas du FizzBuzz, nous vérifions si le nombre est divisible par 3, 5 ou les deux.

### Installation
1. Cloner le répo `git clone https://github.com/EloxFire/fulll-hiring-algo.git`
2. Installer les dépendances avec `npm install`
3. Lancer l'algo `npm run start`

### Utilisation
2. Saisir un nombre entier dans la console
3. Le programme affichera "Fizz" si le nombre est divisible par 3, "Buzz" s'il est divisible par 5, "FizzBuzz" s'il est divisible par les deux, ou le nombre lui-même s'il n'est pas divisible par 3 ou 5.

### Gestion des erreurs
Le programme renverra une erreur si l'utilisateur saisit une valeur qui n'est pas un nombre entier positif.


