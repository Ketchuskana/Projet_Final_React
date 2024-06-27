# Projet_Final_React
# RAVE - React Native Audio Visualization & Editing

## Description

RAVE est une application React Native qui permet aux utilisateurs d'enregistrer des clips audio, de les envoyer à un serveur Flask pour transformation, puis de télécharger et d'écouter le fichier audio transformé. L'application comporte trois vues principales : Home, Record et RAVE.

## Fonctionnalités

- **Home** : Permet de se connecter au serveur Flask en entrant l'adresse IP et le port.
- **Record** : Permet d'enregistrer des clips audio, de les lire, de les sauvegarder et de les afficher dans une liste.
- **RAVE** : Permet de sélectionner un clip audio, de l'envoyer au serveur Flask pour transformation, de télécharger le fichier audio transformé et de l'écouter.

## Détails des fichiers
_ App.js : Point d'entrée principal de l'application. Configure la navigation entre les vues Home, Record et RAVE. Intègre Redux pour la gestion de l'état global.
_ store.js : Configuration de Redux et Redux Persist pour la gestion de l'état global et la persistance.

_ screens/ :
  _HomeScreen.js : Vue Home. Permet à l'utilisateur de se connecter au serveur Flask en entrant l'adresse IP et le port.
  _RecordScreen.js : Vue Record. Permet à l'utilisateur d'enregistrer des clips audio, de les lire, de les sauvegarder et de les afficher dans une liste.
  _RaveScreen.js : Vue RAVE. Permet à l'utilisateur de sélectionner un clip audio, de l'envoyer au serveur Flask pour transformation, de télécharger le fichier       audio transformé et de l'écouter.
  
_ Utilisation
-Vue Home
Entrez l'adresse IP du serveur Flask.
Entrez le port du serveur Flask.
Cliquez sur "Test Connection" pour vérifier la connexion au serveur.
Si la connexion est réussie, vous pouvez naviguer vers les autres vues.

-Vue Record
Cliquez sur le bouton pour commencer l'enregistrement.
Cliquez à nouveau pour arrêter l'enregistrement.
Lisez le clip audio en cliquant sur le bouton de lecture/pause.
Sauvegardez l'enregistrement en lui donnant un nom.
Affichez les enregistrements déjà effectués dans une liste. Vous pouvez les supprimer ou les réécouter.

-Vue RAVE
Sélectionnez un clip audio parmi les options disponibles (enregistrement, fichier dans le téléphone, etc.).
Cliquez sur le bouton pour envoyer le clip au serveur Flask.
Le widget indiquera que le modèle est en train de calculer.
Une fois le calcul terminé, le fichier audio transformé sera téléchargé automatiquement.
Lisez le fichier audio original et transformé en utilisant les boutons de lecture.

_Dépendances
React
React Native
Redux
Redux Persist
React Navigation
Expo
