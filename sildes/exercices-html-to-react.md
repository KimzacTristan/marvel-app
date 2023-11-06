---
marp: true
theme: gaia
size: 16:9
paginate: true
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
header: 'marvel-app'
footer: 'Auteur : Alexandre GIRARD'
---

# Marvel App in react

- Créer une branche `feature/react` depuis la branche `develop`
- Transformer l'application en react
    - Récupérer les fichiers nécessaires depuis l'application d'exemple
    - Vérifier que l'application se lance correctement
- Commiter les modifications
- Supprimer les fichiers inutiles
- Commiter les modifications

---

# Marvel App in react

Nous avons maintenant une application react qui fonctionne, nous allons pouvoir commencer à travailler sur la transformation de l'application.

---

# Marvel App in react - Liste des personnages

- Implémenter dans le fichier App.js :
    - La récupération des données en ajoutant `const characters = require('./data/characters.json');`
    - Le titre de l'application via le composant `Title`
    - L'affichage de la liste des personnages via le composant `CharactersList`
    - L'affichage du nombre de personnages via le composant `CharactersCount`
- Commiter les modifications

---

# Marvel App in react - Liste des personnages

- Refactorer le code afin de ressortir les composants `Title`, `CharactersList` et `CharactersCount` dans des fichiers séparés
- Gérer les cas où il n'y a pas de personnages à afficher
- Gérer les cas d'erreur
- Commiter les modifications

---

# Marvel App in react - Liste des personnages

 Avant de pusher les modifications sur la branche `feature/react`, nous allons ré-écrire l'histoire de la branche afin d'avoir un historique propre.
On ne gardera que les commits qui nous intéressent. Nous allons mettre en commun les commits qui ont le même objectif. Et renommer les commits pour qu'ils soient plus clairs.

---

# Marvel App in react - Liste des personnages

Notre nouvelle implémentation est maintenant terminée, nous allons pouvoir pusher les modifications sur la branche `develop` grâce à une pull request.

---

# Marvel App in react - Détail d'un personnage

- Créer une branche `feature/character-detail` depuis la branche `develop`
- Implémenter l'affichage du détail d'un personnage via le composant `CharacterDetail`
    - Nous ne savons pas encore comment naviguer entre les pages, nous allons donc pour l'instant afficher le détail du premier personnage sous la liste des personnages dans le composant `CharactersList`
---

# Marvel App in react - Détail d'un personnage

Même si nous ne savons pas encore comment naviguer, on aimerait pouvoir afficher le détail d'un personnage en cliquant sur son nom dans la liste des personnages.

---

# Marvel App in react - Détail d'un personnage

Afin de connaitre le personnage sur lequel on a cliqué, nous allons stocker l'index du personnage dans le state du composant `CharactersList` et passer cette information au composant `CharacterDetail`.

---

# Marvel App in react - Détail d'un personnage

Maintenant que l'on sait passer d'un personnage à un autre, nous pouvons nous rendre compte d'éventuel cas d'erreur à gérer. Notament le cas où le personnage n'a pas d'image.

---