const submit = document.getElementById("submit")
const paragraph = document.getElementById("paragraph")
const ratingSection = document.getElementById("ratingSection")
const thankYouSection = document.getElementById("thankYouSection")
const input = document.querySelectorAll("input")

// Regarde quel input est checked, puis modifie la class de la section pour modifier l'HTML et retourne le numéro de l'input check
submit.addEventListener('click',() => {
  const isChecked = document.querySelector('input[name="rating"]:checked')
  if(isChecked){
        ratingSection.classList.add("hidden");  // ajouter
        thankYouSection.classList.remove("hidden"); // retirer
        paragraph.textContent = `You selected ${isChecked.value} out of 5`;
  }
})