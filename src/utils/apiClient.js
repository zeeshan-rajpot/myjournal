import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://my-journal-app.azurewebsites.net/api', // Your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
