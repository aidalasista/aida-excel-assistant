async function generateExcel() {
  const request = document.getElementById("prompt").value.trim();
  const result = document.getElementById("result");

  if (!request) {
    result.innerHTML = "⚠️ Décris d’abord le tableau souhaité.";
    return;
  }

  result.innerHTML = "⏳ Génération en cours...";

  result.innerHTML = `
    <h3>✅ Demande reçue</h3>
    <p>${request}</p>
    <p>Prochaine étape : connecter Mistral pour générer automatiquement le tableau Excel.</p>
  `;
}
