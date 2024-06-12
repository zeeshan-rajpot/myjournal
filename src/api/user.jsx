import apiClient from '../utils/apiClient';

const getAllUser = async () => {
    try {
        const response = await apiClient.get(`user/getAll`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

const createUser = async (userData) => {
    try {
        const response = await apiClient.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export default {
    getAllUser,
    createUser,
};
