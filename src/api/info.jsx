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

const createGoals = async (formData) => {
  try {
    const response = await apiClient.post(`/goals/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createElevates = async (title) => {
  try {
    const response = await apiClient.post(`/elevates/create`, title);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createMotivation = async (formData) => {
  try {
    const response = await apiClient.post(`/motivations/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getGoals,
  getElevates,
  getMotivation,
  createGoals,
  createElevates,
  createMotivation,
};
