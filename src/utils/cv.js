export const downloadCV = () => {
  // Crée un élément lien <a> invisible
  const link = document.createElement('a');
  
  // Chemin vers ton PDF dans le dossier public
  link.href = '/CV_reel.pdf'; 
  
  // Le nom que aura le fichier téléchargé sur l'ordinateur du recruteur
  link.download = 'CV_Heritiana_Rafanomezanjanahary.pdf';
  
  // Ajoute le lien au document, clique dessus automatiquement, puis le retire
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};