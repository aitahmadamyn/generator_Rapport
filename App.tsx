
import React, { useState, useCallback } from 'react';
import { generateReport } from './services/geminiService';
import { DEFAULT_PROMPT } from './constants';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import ReportOutput from './components/ReportOutput';

// Declare saveAs from FileSaver.js CDN script
declare const saveAs: (blob: Blob, filename: string) => void;

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>(DEFAULT_PROMPT);
  const [reportContent, setReportContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateReport = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Le prompt ne peut pas être vide.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setReportContent('');

    try {
      const result = await generateReport(prompt);
      setReportContent(result);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? `Une erreur est survenue: ${e.message}` : 'Une erreur inconnue est survenue.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  const handleDownload = useCallback(() => {
    const sourceEl = document.getElementById('html-source');
    if (!sourceEl) {
      console.error("L'élément source pour l'exportation est introuvable.");
      alert("Erreur lors de la préparation du téléchargement.");
      return;
    }

    const sourceHTML = sourceEl.innerHTML;
    const fullHtml = `
      <!DOCTYPE html>
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8">
        <title>Rapport Académique</title>
        <style>
          @page {
            size: A4;
            margin: 2.5cm;
          }
          body { 
            font-family: 'Times New Roman', Times, serif; 
            font-size: 12pt;
            line-height: 1.5;
          }
          h1, h2, h3, h4 { 
            font-family: 'Arial', sans-serif; 
            color: #2F5496; /* Dark Blue */
            font-weight: bold;
          }
          h1 { font-size: 16pt; margin-top: 24pt; }
          h2 { font-size: 14pt; margin-top: 18pt; }
          h3 { font-size: 12pt; margin-top: 14pt; }
          p { margin-bottom: 12pt; }
          strong { font-weight: bold; }
          em { font-style: italic; }
          ul, ol { margin-left: 40px; margin-bottom: 12pt; }
          li { margin-bottom: 6pt; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 12pt; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
          pre { background-color: #f5f5f5; padding: 10px; border: 1px solid #ddd; font-family: 'Courier New', monospace; white-space: pre-wrap; }
        </style>
      </head>
      <body>${sourceHTML}</body>
      </html>
    `;
    
    try {
      const blob = new Blob([fullHtml], { type: 'application/msword;charset=utf-8' });
      saveAs(blob, 'rapport_academique.doc');
    } catch(e) {
      console.error("Erreur lors de la création du fichier .doc", e);
      alert("Impossible de télécharger le fichier. Assurez-vous que votre navigateur autorise les téléchargements.");
    }

  }, []);


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerateReport}
            isLoading={isLoading}
          />
          <ReportOutput
            content={reportContent}
            isLoading={isLoading}
            error={error}
            onDownload={handleDownload}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
