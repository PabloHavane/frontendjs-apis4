const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Api = {
    get: async (url, token) => {
        const response = await fetch(`${API_BASE_URL}${url}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
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
            body: JSON.stringify(data)
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

export default Api;
