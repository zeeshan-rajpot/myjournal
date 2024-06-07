import apiClient from '../utils/apiClient';

const login = async (credentials) => {
    try {
        const response = await apiClient.post('admin/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

const forgetPassword = async (email) => {
    try {
        const response = await apiClient.post('admin/auth/forgetPassword', email);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export default {
    login,
    forgetPassword,
};
