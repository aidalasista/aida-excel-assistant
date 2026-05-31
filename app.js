function generateExcel() {
  const request = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  result.innerHTML = `
    <h3>✅ Le bouton fonctionne</h3>
    <p>${request}</p>
  `;
}
