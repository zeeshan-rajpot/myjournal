import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-journal-app.azurewebsites.net/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
