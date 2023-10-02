let totalMinutes = 60;

// Convertir les minutes en secondes
let totalSeconds = totalMinutes * 60;

// Fonction pour mettre à jour l'affichage du décompte
function updateCountdown() {
  let heures = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  let countdownText = heures.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

  document.getElementById("countdown").innerHTML = countdownText;
  totalSeconds--;

  // Vérifier si le décompte est terminé
  if (totalSeconds < 0) {
    clearInterval(interval); // Arrêter le décompte
    document.getElementById("countdown").innerHTML = "Terminé!";
  }
}
let interval = setInterval(updateCountdown, 1000); 


let moisEnFrancais = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];
  let joursEnFrancais = [
    "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"
  ];
  
  // Obtenir la date d'aujourd'hui
  let date = new Date();
  
  // Extraire les éléments de la date
  let jour = date.getDate();
  let mois = date.getMonth();
  let annee = date.getFullYear();
  let jourSemaine = date.getDay();
  
  // Formater la date en français
  let dateEnFrancais =jour + " " +moisEnFrancais[mois] + " " + annee;
  
  // Mettre à jour le contenu de l'élément HTML avec l'ID "date-francais"
  document.querySelector(".date-francais").textContent =dateEnFrancais;
  

