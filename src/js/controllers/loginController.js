export async function Connexion(corp) {
    const errorMessage = document.getElementById('error_message');

    try {
        const response = await fetch('http://localhost:8001/api/authApi.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corp)
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status === 'success' && data.data.token) {
                // Stocke le token et le nom d'utilisateur dans le sessionStorage
                sessionStorage.setItem('jwt_token', data.data.token);
                sessionStorage.setItem('username', corp.username);
                window.location.href = 'joueurs.html';
            } else {
                throw new Error('Réponse de l\'API invalide');
            }
        } else {
            throw new Error('Identifiant ou mot de passe incorrect. Veuillez réessayer');
        }
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    }
}