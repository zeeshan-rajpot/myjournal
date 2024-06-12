import apiClient from "../utils/apiClient";

const getMoods = async () => {
  try {
    const response = await apiClient.get(`/moods/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const getActivities = async () => {
  try {
    const response = await apiClient.get(`/activities/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const getFeelings = async () => {
  try {
    const response = await apiClient.get(`/feelings/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export default {
    getMoods,
    getActivities,
    getFeelings,
};
