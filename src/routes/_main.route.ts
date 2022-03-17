import { Router } from 'express';

import WebScrapingRoute from './webScraping.route';

const mainRoute = Router();

mainRoute.use('/web-scraping', WebScrapingRoute);

export default mainRoute;
