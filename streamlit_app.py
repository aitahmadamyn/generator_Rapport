import streamlit as st
from google import genai
import markdown

# Configuration de la page
st.set_page_config(
    page_title="Générateur de Rapport Académique",
    page_icon="🎓",
    layout="wide"
)

# Constantes
DEFAULT_PROMPT = """Développement d’une application Python pour l’analyse des indicateurs de maintenance industrielle (MTBF, MTTR, disponibilité) à partir de fichiers Excel

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
"""

SYSTEM_PROMPT = """
Vous êtes un générateur de rapports académiques de classe mondiale. Votre tâche est de générer un rapport académique complet, bien structuré et très détaillé en français, basé sur les instructions de l'utilisateur.
La sortie DOIT être un seul bloc de texte Markdown. N'incluez aucune autre explication ou préambule.
Utilisez les en-têtes Markdown (#, ##, ###) pour les titres et les sections.
Utilisez du texte en gras pour mettre l'accent.
Pour les espaces réservés aux captures d'écran, utilisez le format exact : **[Capture d’écran à insérer – Description]**
Assurez-vous que la langue est formelle, scientifique et pédagogique, adaptée à un jury universitaire (niveau Licence / Master / Cycle ingénieur).
Générez une table des matières complète.
N'incluez pas le code Python réel dans le rapport. Mentionnez plutôt qu'il est fourni dans un fichier séparé.
La sortie finale doit être un document Markdown unique et cohérent représentant l'ensemble du rapport, de la page de garde aux annexes.
"""

def generate_report(prompt: str, api_key: str) -> str:
    client = genai.Client(api_key=api_key)
    full_prompt = f"{SYSTEM_PROMPT}\n\nVoici les instructions de l'utilisateur :\n\n{prompt}"
    
    response = client.models.generate_content(
        model='gemini-2.5-pro',
        contents=full_prompt,
    )
    return response.text

def create_doc_html(markdown_content: str) -> bytes:
    html_content = markdown.markdown(markdown_content)
    full_html = f"""
    <!DOCTYPE html>
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <title>Rapport Académique</title>
      <style>
        @page {{ size: A4; margin: 2.5cm; }}
        body {{ font-family: 'Times New Roman', Times, serif; font-size: 12pt; line-height: 1.5; }}
        h1, h2, h3, h4 {{ font-family: 'Arial', sans-serif; color: #2F5496; font-weight: bold; }}
        h1 {{ font-size: 16pt; margin-top: 24pt; }}
        h2 {{ font-size: 14pt; margin-top: 18pt; }}
        h3 {{ font-size: 12pt; margin-top: 14pt; }}
        p {{ margin-bottom: 12pt; }}
        strong {{ font-weight: bold; }}
        em {{ font-style: italic; }}
        ul, ol {{ margin-left: 40px; margin-bottom: 12pt; }}
        li {{ margin-bottom: 6pt; }}
        table {{ border-collapse: collapse; width: 100%; margin-bottom: 12pt; }}
        th, td {{ border: 1px solid #ccc; padding: 8px; text-align: left; }}
        th {{ background-color: #f2f2f2; }}
        pre {{ background-color: #f5f5f5; padding: 10px; border: 1px solid #ddd; font-family: 'Courier New', monospace; white-space: pre-wrap; }}
      </style>
    </head>
    <body>{html_content}</body>
    </html>
    """
    return full_html.encode('utf-8')

st.title("🎓 Générateur de Rapport Académique")
st.markdown("Générez des rapports académiques structurés en utilisant l'API Gemini.")

# Sidebar pour la clé API
with st.sidebar:
    st.header("Configuration")
    api_key = st.text_input("Clé API Gemini", type="password", help="Obtenez votre clé sur Google AI Studio")
    if not api_key:
        st.warning("Veuillez entrer votre clé API Gemini pour continuer.")

col1, col2 = st.columns([1, 1])

with col1:
    st.subheader("Instructions du Rapport")
    prompt = st.text_area("Détaillez votre demande ici :", value=DEFAULT_PROMPT, height=500)
    
    if st.button("Générer le rapport", type="primary", disabled=not api_key):
        with st.spinner("Génération en cours... Cela peut prendre quelques instants."):
            try:
                report = generate_report(prompt, api_key)
                st.session_state['report'] = report
                st.success("Rapport généré avec succès !")
            except Exception as e:
                st.error(f"Une erreur est survenue : {e}")

with col2:
    st.subheader("Résultat")
    if 'report' in st.session_state:
        # Affichage direct pour éviter les erreurs React (removeChild) liées aux conteneurs défilants
        st.markdown(st.session_state['report'], unsafe_allow_html=True)
        
        st.write("---")
        
        # Bouton de téléchargement
        doc_bytes = create_doc_html(st.session_state['report'])
        st.download_button(
            label="📄 Télécharger en .doc",
            data=doc_bytes,
            file_name="rapport_academique.doc",
            mime="application/msword"
        )
    else:
        st.info("Le rapport généré apparaîtra ici.")
