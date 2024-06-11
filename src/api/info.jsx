import apiClient from "../utils/apiClient";

const getGoals = async () => {
  try {
    const response = await apiClient.get(`/goals/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const getElevates = async () => {
  try {
    const response = await apiClient.get(`/elevates/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
const getMotivation = async () => {
  try {
    const response = await apiClient.get(`/motivations/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export default {
  getGoals,
  getElevates,
  getMotivation,
};
