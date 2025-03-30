import Api from "../api.js";

// Récupère le jeton d'authentification depuis le localStorage (données stockées dans le navigateur du client)
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
        const tbody = document.querySelector('#table-joueurs tbody');
        tbody.innerHTML = ''; // vide le tableau avant de le remplir
        joueurs.data.forEach(joueur => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${joueur.id}</td>
            <td>${joueur.nom}</td>
            <td>${joueur.prenom}</td>
            <td>${joueur.numeroLicence}</td>
            <td>${joueur.dateNaissance}</td>
            <td>${joueur.taille}</td>
            <td>${joueur.poids}</td>
            <td>${joueur.statut}</td>
        `;
            tbody.appendChild(tr);
        });
    }
}

document.addEventListener('DOMContentLoaded', chargerJoueurs);
