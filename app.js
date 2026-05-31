async function generateExcel() {

  const request = document.getElementById("request").value;

  if (!request) {
    alert("Décris le tableau souhaité");
    return;
  }

  const result = document.getElementById("result");

  result.innerHTML = "⏳ Génération en cours...";

  try {

    const apiKey = localStorage.getItem("mistral_key");

    if (!apiKey) {
      result.innerHTML =
      "⚠️ Ajoute d'abord ta clé Mistral.";
      return;
    }

    const prompt = `
Tu es un expert Excel.

Crée un tableau Excel à partir de cette demande :

${request}

Réponds uniquement avec un tableau JSON.

Exemple :

{
 "colonnes":["Nom","Age"],
 "lignes":[
   ["Paul",25],
   ["Marie",30]
 ]
}
`;

    const response = await fetch(
      "https://api.mistral.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
          "Authorization":"Bearer " + apiKey
        },
        body: JSON.stringify({
          model:"mistral-small-latest",
          messages:[
            {
              role:"user",
              content:prompt
            }
          ]
        })
      }
    );

    const data = await response.json();

    const answer =
      data.choices[0].message.content;

    result.innerHTML =
      "<pre>" + answer + "</pre>";

  }

  catch(error){

    result.innerHTML =
    "❌ " + error.message;

  }

}

function saveKey(){

  const key =
  document.getElementById("apiKey").value;

  localStorage.setItem(
    "mistral_key",
    key
  );

  alert("Clé enregistrée");

}
