import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login.html'),
                gestionJoueurs: resolve(__dirname, 'gestionJoueurs.html'),
                gestionMatchs: resolve(__dirname, 'gestionMatchs.html'),
                ajoutJoueur: resolve(__dirname, 'ajoutJoueur.html'),
                modifierJoueur: resolve(__dirname, 'modifierJoueur.html'),
                commentaire: resolve(__dirname, 'commentaire.html'),
                modifierCommentaire: resolve(__dirname, 'modifierCommentaire.html'),
                ajoutMatch: resolve(__dirname, 'ajoutMatch.html'),
                ajoutResultatMatch: resolve(__dirname, 'ajoutResultatMatch.html'),
                modifierMatch: resolve(__dirname, 'modifierMatch.html'),
                feuilleDeMatchMenu: resolve(__dirname, 'feuilleDeMatchMenu.html'),
                ajouterCommentaire: resolve(__dirname, 'ajouterCommentaire.html')
            }
        }
    }
});
