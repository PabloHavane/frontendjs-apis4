import Api from "../api.js";

const token = localStorage.getItem('authToken');

export async function chargerJoueurs() {
    const joueurs = await Api.get('/src/JoueursEndpoint.php', token);
    afficherListeJoueurs(joueurs);
}

export async function ajouterJoueur(joueur) {
    const nouveauJoueur = await Api.post('/src/JoueursEndpoint.php', joueur, token);
    await chargerJoueurs();
}

function afficherListeJoueurs(joueurs) {
    if (!joueurs || joueurs.length === 0) {
        const el = document.createElement('p');
        el.textContent = 'Aucun joueur trouvé';
    } else {
        const liste = document.querySelector("#liste-joueurs");
        liste.innerHTML = '';
        joueurs.forEach(joueur => {
            const element = document.createElement('li');
            element.textContent = `${joueur.nom} - ${joueur.poste}`;
            liste.appendChild(element);
        });
    }
}

document.addEventListener('DOMContentLoaded', chargerJoueurs);
