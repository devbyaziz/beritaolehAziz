import axios from 'axios';

const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
const BASE_URL = 'https://gnews.io/api/v4';

// Validasi API Key
const validateApiKey = () => {
  if (!GNEWS_API_KEY || GNEWS_API_KEY === 'your_api_key_here') {
    throw new Error('GNEWS_API_KEY belum diatur. Silakan set di file .env');
  }
};

// Helper function to transform GNews response to match our frontend
const transformGNewsResponse = (gNewsData) => {
  return {
    totalResults: gNewsData.totalArticles,
    articles: gNewsData.articles.map(article => ({
      source: {
        id: null,
        name: article.source.name
      },
      author: article.source.name,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.image,
      publishedAt: article.publishedAt,
      content: article.content
    }))
  };
};

// Get top headlines
export const getTopHeadlines = async (req, res) => {
  try {
    validateApiKey();
    const { country = 'us', max = 12 } = req.query;

    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        max,
        apikey: GNEWS_API_KEY
      }
    });

    const transformedData = transformGNewsResponse(response.data);

    res.json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error fetching headlines:', error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.errors?.[0] || error.message
    });
  }
};

// Get news by category
export const getNewsByCategory = async (req, res) => {
  try {
    validateApiKey();
    const { category } = req.params;
    const { country = 'us', max = 12 } = req.query;

    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category,
        country,
        max,
        apikey: GNEWS_API_KEY
      }
    });

    const transformedData = transformGNewsResponse(response.data);

    res.json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error fetching category news:', error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.errors?.[0] || error.message
    });
  }
};

// Get news by country
export const getNewsByCountry = async (req, res) => {
  try {
    validateApiKey();
    const { country } = req.params;
    const { max = 12 } = req.query;

    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        max,
        apikey: GNEWS_API_KEY
      }
    });

    const transformedData = transformGNewsResponse(response.data);

    res.json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error fetching country news:', error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.errors?.[0] || error.message
    });
  }
};

// Search news
export const searchNews = async (req, res) => {
  try {
    validateApiKey();
    const { q, max = 12, lang = 'en' } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        error: 'Parameter pencarian (q) diperlukan'
      });
    }

    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q,
        max,
        lang,
        apikey: GNEWS_API_KEY
      }
    });

    const transformedData = transformGNewsResponse(response.data);

    res.json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error searching news:', error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.errors?.[0] || error.message
    });
  }
};

// Get everything with multiple filters
export const getEverything = async (req, res) => {
  try {
    validateApiKey();
    const {
      q,
      lang = 'en',
      country,
      max = 12
    } = req.query;

    const params = {
      max,
      apikey: GNEWS_API_KEY
    };

    if (q) params.q = q;
    if (lang) params.lang = lang;
    if (country) params.country = country;

    const response = await axios.get(`${BASE_URL}/search`, {
      params
    });

    const transformedData = transformGNewsResponse(response.data);

    res.json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error fetching everything:', error.message);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.errors?.[0] || error.message
    });
  }
};
