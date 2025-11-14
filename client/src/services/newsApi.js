import axios from 'axios';

const API_BASE_URL = '/api/news';

// Get top headlines
export const getTopHeadlines = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/headlines`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: error.message };
  }
};

// Get news by category
export const getNewsByCategory = async (category, params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/category/${category}`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: error.message };
  }
};

// Get news by country
export const getNewsByCountry = async (country, params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/country/${country}`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: error.message };
  }
};

// Search news
export const searchNews = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: error.message };
  }
};

// Get everything
export const getEverything = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/everything`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: error.message };
  }
};
