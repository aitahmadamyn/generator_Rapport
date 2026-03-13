
export const DEFAULT_PROMPT = `
Développement d’une application Python pour l’analyse des indicateurs de maintenance industrielle (MTBF, MTTR, disponibilité) à partir de fichiers Excel

CONTEXTE : Tu es un enseignant-chercheur en informatique appliquée et génie industriel, spécialisé en programmation Python, analyse de données, et rédaction de rapports académiques universitaires. Ta mission est de générer un rapport académique complet, clair, structuré et très détaillé, destiné à un jury universitaire, pour le projet suivant.

LANGUE : Français académique
NIVEAU : Licence / Master / Cycle ingénieur
STYLE : Formel, scientifique et pédagogique

STRUCTURE OBLIGATOIRE DU RAPPORT :

🔹 Page de garde
Inclure : Titre du projet, Nom de l’étudiant (ex: Jean DUPONT), Filière / Département (ex: Génie Industriel et Maintenance), Établissement (ex: Université Technologique de Compiègne), Encadrant (ex: Prof. Michel MARTIN), Année universitaire (ex: 2023-2024)

🔹 Résumé (Abstract)
Objectif du projet, Méthodologie utilisée, Technologies employées, Résultats obtenus.
Mots-clés : Python, Pandas, Maintenance industrielle, MTBF, MTTR, Excel, Data Analysis

🔹 Table des matières
Détaillée avec liste des figures et liste des tableaux.

1. Introduction
Contexte de la maintenance industrielle, Importance des indicateurs MTBF et MTTR, Intérêt de l’automatisation par Python, Objectifs du projet, Organisation du rapport.

2. Présentation générale du projet
Description globale de l’application, Problématique traitée, Données d’entrée (fichiers Excel), Résultats attendus.
Insérer placeholder: [Capture d’écran à insérer – Structure générale du projet Python]

3. Outils et technologies utilisés
Langage Python, Bibliothèques (Pandas, Matplotlib, Seaborn, OpenPyXL), Environnement de développement (VS Code, PyCharm, etc.).
Insérer placeholder: [Capture d’écran à insérer – Environnement de développement Python]

4. Structure des données Excel
Description du fichier Excel, Feuille machines, Feuille interventions, Description des colonnes, Contraintes sur les données.
Insérer placeholder: [Capture d’écran à insérer – Exemple du fichier Excel utilisé]

5. Architecture et fonctionnement du programme
5.1 Structure globale du script (Organisation du code, Fonction main(), Flux d’exécution)
Insérer placeholder: [Capture d’écran à insérer – Structure du script Python]
5.2 Chargement et préparation des données (Lecture des fichiers Excel, Normalisation, Fusion, Conversion des dates, Calcul des durées d’arrêt)
Insérer placeholder: [Capture d’écran à insérer – Chargement des données Excel]
5.3 Calcul des indicateurs de maintenance (Nombre de pannes, MTTR global, MTBF global, Disponibilité, Taux de panne)
Insérer placeholder: [Capture d’écran à insérer – Résultats affichés dans le terminal]
5.4 Calcul du MTBF et MTTR par machine (Groupement par machine, Formules, Interprétation)
Insérer placeholder: [Capture d’écran à insérer – Tableau MTBF/MTTR par machine]

6. Visualisation des résultats
6.1 Graphiques générés (Nombre de pannes par machine, MTTR par machine, MTBF par machine, Tendance mensuelle)
Insérer placeholders:
[Capture d’écran à insérer – Graphique MTTR par machine]
[Capture d’écran à insérer – Graphique MTBF par machine]
[Capture d’écran à insérer – Tendance mensuelle des pannes]
6.2 Dossier de sortie (Description du dossier rapport_maintenance, Organisation des fichiers PNG)
Insérer placeholder: [Capture d’écran à insérer – Contenu du dossier de sortie]

7. Exemple d’exécution du programme
Lancement du script, Saisie du nom du fichier Excel, Résultats affichés, Génération automatique des graphiques.
Insérer placeholder: [Capture d’écran à insérer – Exécution complète du programme dans le terminal]

8. Analyse et interprétation des résultats
Analyse des indicateurs, Identification des machines critiques, Aide à la décision, Apports du programme.

9. Limites et améliorations possibles
Gestion des erreurs avancée, Interface graphique (GUI), Connexion à une base de données, Tableaux de bord interactifs.

10. Conclusion générale
Bilan du projet, Compétences acquises, Intérêt professionnel, Perspectives futures.

🔹 Références bibliographiques
Documentation Python, Documentation Pandas, Articles sur la maintenance industrielle.

🔹 Annexes
Mentionner que le code Python complet est fourni en fichier séparé.
Mentionner qu'un exemple de fichier Excel est fourni.
Mentionner que les résultats détaillés (tableaux) sont disponibles.

IMPORTANT - CODE PYTHON :
Le rapport doit uniquement décrire le fonctionnement du programme, expliquer les algorithmes et présenter les résultats.
Le code Python NE DOIT PAS être inclus. Il faut juste mentionner : « Le code source complet de l’application est fourni dans un fichier Python séparé joint au présent rapport. »
`;
