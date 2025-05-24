document.getElementById("downloadButton").addEventListener("click", downloadFile())

function downloadFile() {
    // Spécifiez l'URL de votre fichier ici
    const fileUrl = 'https://drive.google.com/uc?export=download&id=1EO3TlDgZMuivCvIUpSuQG9fj2NkbciFp';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Pitch.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
