import express from 'express';
import * as newsController from '../controllers/newsController.js';

const router = express.Router();

// Get top headlines
router.get('/headlines', newsController.getTopHeadlines);

// Get news by category
router.get('/category/:category', newsController.getNewsByCategory);

// Get news by country
router.get('/country/:country', newsController.getNewsByCountry);

// Search news
router.get('/search', newsController.searchNews);

// Get everything with filters
router.get('/everything', newsController.getEverything);

export default router;
