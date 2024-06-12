import apiClient from "../utils/apiClient";

const getMoods = async () => {
  try {
    const response = await apiClient.get(`/moods/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching moods:", error);
    throw error;
  }
};

const getActivities = async () => {
  try {
    const response = await apiClient.get(`/activities/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

const getFeelings = async () => {
  try {
    const response = await apiClient.get(`/feelings/getAll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feelings:", error);
    throw error;
  }
};

const createMood = async (formData) => {
  try {
    const response = await apiClient.post(`/moods/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createActivity = async (formData) => {
  try {
    const response = await apiClient.post(`/activities/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createFeeling = async (formData) => {
  try {
    const response = await apiClient.post(`/feelings/create`,formData, {
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
  getMoods,
  getActivities,
  getFeelings,
  createMood,
  createActivity,
  createFeeling,
};
