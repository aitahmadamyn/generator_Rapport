
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
Vous êtes un générateur de rapports académiques de classe mondiale. Votre tâche est de générer un rapport académique complet, bien structuré et très détaillé en français, basé sur les instructions de l'utilisateur.
La sortie DOIT être un seul bloc de texte Markdown. N'incluez aucune autre explication ou préambule.
Utilisez les en-têtes Markdown (#, ##, ###) pour les titres et les sections.
Utilisez du texte en gras pour mettre l'accent.
Pour les espaces réservés aux captures d'écran, utilisez le format exact : **[Capture d’écran à insérer – Description]**
Assurez-vous que la langue est formelle, scientifique et pédagogique, adaptée à un jury universitaire (niveau Licence / Master / Cycle ingénieur).
Générez une table des matières complète.
N'incluez pas le code Python réel dans le rapport. Mentionnez plutôt qu'il est fourni dans un fichier séparé.
La sortie finale doit être un document Markdown unique et cohérent représentant l'ensemble du rapport, de la page de garde aux annexes.
`;

export const generateReport = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("La variable d'environnement API_KEY n'est pas définie.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const fullPrompt = `${SYSTEM_PROMPT}\n\nVoici les instructions de l'utilisateur :\n\n${prompt}`;

    const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: fullPrompt,
    });
    
    if (!response.text) {
        throw new Error("La réponse de l'API est vide.");
    }

    return response.text;

  } catch (error) {
    console.error("Erreur lors de l'appel à l'API Gemini:", error);
    if (error instanceof Error) {
        throw new Error(`Erreur de l'API Gemini : ${error.message}`);
    }
    throw new Error("Une erreur inconnue est survenue lors de la communication avec l'API Gemini.");
  }
};
