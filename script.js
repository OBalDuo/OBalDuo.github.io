// ----- Menu mobile (bouton avec les 3 traits) -----

const boutonMenu = document.querySelector('.menu-bouton');
const menu = document.querySelector('.menu');

boutonMenu.addEventListener('click', function () {
  const estOuvert = menu.classList.toggle('ouvert');
  boutonMenu.setAttribute('aria-expanded', estOuvert);
});


// ----- Carrousel de photos (page d'accueil uniquement) -----

const piste = document.querySelector('.carrousel-piste');

if (piste) {
  const flechePrecedent = document.querySelector('.carrousel-fleche.precedent');
  const flecheSuivant = document.querySelector('.carrousel-fleche.suivant');

  // On avance ou on recule d'environ une largeur d'écran
  flecheSuivant.addEventListener('click', function () {
    piste.scrollBy({ left: piste.clientWidth * 0.8, behavior: 'smooth' });
  });

  flechePrecedent.addEventListener('click', function () {
    piste.scrollBy({ left: -piste.clientWidth * 0.8, behavior: 'smooth' });
  });
}
