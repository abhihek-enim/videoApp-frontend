// apiService.js

import axios from "axios";

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your actual base URL
  timeout: 10000, // Timeout after 10 seconds
});

// Set default headers
api.defaults.headers.common["Content-Type"] = "application/json";

// Helper function for handling errors consistently
const handleError = (error) => {
  if (error.response) {
    console.error("Server responded with status:", error.response.status);
    console.error("Response data:", error.response.data);
  } else if (error.request) {
    console.error("Request made but no response received:", error.request);
  } else {
    console.error("Error in setting up request:", error.message);
  }
  throw new Error(error.message);
};

// GET request function
export const getData = async (url, customConfig = {}) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...customConfig.headers,
      },
      ...customConfig,
    };
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// POST request function
export const postData = async (url, data, customConfig = {}) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...customConfig.headers,
      },
      ...customConfig,
    };
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// PUT request function
export const putData = async (url, data, customConfig = {}) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...customConfig.headers,
      },
      ...customConfig,
    };
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// PATCH request function
export const patchData = async (url, data, customConfig = {}) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...customConfig.headers,
      },
      ...customConfig,
    };
    const response = await api.patch(url, data, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// DELETE request function
export const deleteData = async (url, customConfig = {}) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        ...customConfig.headers,
      },
      ...customConfig,
    };
    const response = await api.delete(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
