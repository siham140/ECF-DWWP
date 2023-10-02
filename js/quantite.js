
const elements = document.querySelectorAll('.flexer-tous');
    const moin = document.querySelectorAll('.moin');
    const plus = document.querySelectorAll('.plus');
    const prixElement = document.querySelectorAll('.prix');
    const quantiteElement = document.querySelectorAll('.quantite'); 
    const boutonAcheter = document.querySelector('.btn-second1');
    const spanNbArticles = document.getElementById('nbArticles');
    const totalElement = document.querySelector('.total'); 
    const totalCommandeElement = document.querySelector('.paiement .total');
    const totalA= document.querySelector('.totalA');

    let quantite = 0;
    let quantiteArticles = 0;
    let prix = 0; 
    let total=0;
   
    
for(let i=0; i < quantiteElement.length; i++){
moin[i].addEventListener("click", () => {
    if (quantite > 0) {
        
        quantite = parseInt(quantiteElement[i].textContent);
        quantite--;
        prix= parseFloat(prixElement[i].textContent)
        quantiteElement[i].innerHTML = `<p>${quantite}</p>`;
        total -= prix; 
        quantiteArticles--;
        totalElement.textContent ='Total' + '='+ total.toFixed(2) +''+ '€';
        totalCommandeElement .textContent ='Total de la commande' + '='+ total.toFixed(2) +''+ '€';
        boutonAcheter.textContent='Acheter' + '(' + quantiteArticles +')';
        totalA.style.display="block";
console.log(total);

    }
})};
for(let i=0; i < quantiteElement.length; i++){
plus[i].addEventListener("click", () => {

    quantite = parseInt(quantiteElement[i].textContent);
    quantite++;
    quantiteElement[i].innerHTML = `<p>${quantite}</p>`;
    prix= parseFloat(prixElement[i].textContent)
    total += prix; 
    quantiteArticles++;
    totalElement.textContent ='Total' + '='+ total.toFixed(2) + '€';
    totalCommandeElement .textContent ='Total de la commande' + '='+ total.toFixed(2) +''+ '€';

    boutonAcheter.textContent='Acheter' + '(' + quantiteArticles +')';
    totalA.style.display="block";
});
};
// boutonAcheter.addEventListener("click", ()=>{
//     const nouvellePage="quatriemePage.html";
//     window.location.href=nouvellePage;
// });
const menu1=document.querySelector('.menu1');
const menu2=document.querySelector('.menu2');
const achat=document.querySelector('.achat');
const paiement=document.querySelector('.paiement');
const footer=document.querySelector('.footer');
const footerPaiment=document.querySelector('.footer-paiement');

boutonAcheter.addEventListener("click", ()=>{
   menu1.style.display="none";
   menu2.style.display="block";
   achat.style.display="none"
   paiement.style.display="block";
   footer.style.display="none";
   footerPaiment.style.display="block";
 
   
});


const check = document.getElementById("check");
const btnSecond0 = document.querySelector(".btn-second0");
const btnSecond2 = document.querySelector(".btn-second2");

check.addEventListener("change", (e) => {
  if (check.checked == true) {
    btnSecond0.style.display = "none";
    btnSecond2.style.display = "block";
  } else {
    btnSecond0.style.display = "block";
    btnSecond2.style.display = "none";
  }
});
const checker = document.querySelector(".checker");
const boutonPayer = document.getElementById("payer");
const paiementCarte = document.querySelector(".paiement-carte");
boutonPayer.addEventListener("click", () => {
    paiement.style.display="block";
    paiementCarte.style.display="block";
    checker.style.display="none";
    footerPaiment.style.display="none";
});
function isCreditCardValid(cardNumber) {
    // verification du nombre de chiffres dans le numéro de carte
    if (!/^\d{16}$/.test(cardNumber)) {
        return false;
    }
    // date d'expiration
    const expirationMonth = document.getElementById('expiration').value;
    const expirationYear = document.getElementById('annee').value;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Les mois sont indexés à partir de 0

    if (parseInt(expirationYear) < currentYear || (parseInt(expirationYear) === currentYear && parseInt(expirationMonth) < currentMonth)) {
        return false;
    }
     // verification du mois d'expiration
     if (parseInt(expirationMonth) < 1 || parseInt(expirationMonth) > 12) {
        return false;
    }
    const mois = document.getElementById('expiration').value;

    if (!/^\d{2}$/.test(mois)) {
        return false;
    }
    // le cryptogramme visuel
    const cvv = document.getElementById('crypto').value;

    if (!/^\d{3,4}$/.test(cvv)) {
        return false;
    }

    return true;
}

document.getElementById('paymentForm').addEventListener('submit', function (event) {
    const cardNumberInput = document.getElementById('numerCarte');
    const cardNumber = cardNumberInput.value;

    if (!isCreditCardValid(cardNumber)) {
        alert("Veuillez vérifier les informations de la carte.");
        event.preventDefault();
    } else {
        // Si les informations de carte sont valides,redirection vers le ticket
        window.location.href = "deuxiemePage.html";
    } 
    
});



 
