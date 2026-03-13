# Générateur de Rapport Académique (Streamlit)

Cette application permet de générer des rapports académiques structurés en utilisant l'API Gemini de Google.

## Déploiement sur Streamlit Community Cloud (via GitHub)

Voici les étapes pour publier cette application sur Streamlit Community Cloud :

### Étape 1 : Créer un dépôt GitHub
1. Allez sur [GitHub](https://github.com/) et connectez-vous.
2. Cliquez sur le bouton **"New"** (Nouveau) pour créer un nouveau dépôt.
3. Donnez-lui un nom (ex: `generateur-rapport-academique`).
4. Choisissez "Public" ou "Private".
5. Cliquez sur **"Create repository"**.

### Étape 2 : Ajouter les fichiers au dépôt
Ajoutez les deux fichiers suivants à la racine de votre nouveau dépôt GitHub :
1. `streamlit_app.py` (le code principal de l'application)
2. `requirements.txt` (les dépendances Python nécessaires)

Vous pouvez le faire en cliquant sur **"uploading an existing file"** sur la page de votre dépôt GitHub, puis en sélectionnant ces deux fichiers.

### Étape 3 : Déployer sur Streamlit Community Cloud
1. Allez sur [Streamlit Community Cloud](https://share.streamlit.io/) et connectez-vous avec votre compte GitHub.
2. Cliquez sur le bouton **"New app"** (Nouvelle application).
3. Sélectionnez le dépôt que vous venez de créer (`generateur-rapport-academique`).
4. Assurez-vous que les champs sont remplis comme suit :
   - **Branch** : `main` (ou `master`)
   - **Main file path** : `streamlit_app.py`
5. Cliquez sur **"Deploy!"**.

### Étape 4 : Utilisation
Une fois le déploiement terminé (cela prend quelques minutes), votre application sera en ligne !
Vous devrez entrer votre clé API Gemini dans la barre latérale pour pouvoir générer des rapports.

Vous pouvez obtenir une clé API Gemini gratuitement sur [Google AI Studio](https://aistudio.google.com/app/apikey).
