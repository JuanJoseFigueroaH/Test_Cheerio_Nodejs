import { Router } from 'express';

import WebScrapingRoute from './webScraping.route';

const mainRoute = Router();

// Creacion de ruta para endpoint
mainRoute.use('/web-scraping', WebScrapingRoute);

export default mainRoute;
