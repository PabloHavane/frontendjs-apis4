// URL de base de l'API, récupérée des variables d'environnement
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Objet Api contenant des méthodes pour effectuer des requêtes HTTP
const Api = {
    get: async (url, token) => {
        // Effectue une requête GET à l'URL spécifiée avec le token d'authentification
        const response = await fetch(`${API_BASE_URL}${url}`, {
            headers: {
                "Authorization": `Bearer ${token}`, // Ajoute le token d'authentification dans les en-têtes
                "Content-Type": "application/json"
            }
        });
        return response.json();
    },

    post: async (url, data, token) => {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) // Création du corp de la requête à partir des données passées en paramètre
        });
        return response.json();
    },

    put: async (url, data, token) => {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        return response.json();
    },

    delete: async (url, token) => {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.json();
    }
};

export default Api; // Exporte l'objet Api pour pouvoir l'utiliser dans d'autres fichiers
