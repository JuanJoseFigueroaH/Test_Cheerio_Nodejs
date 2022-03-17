import { Router } from 'express';
import WebScrapingController from '../controllers/webScraping.controller';

const webScrapingController = new WebScrapingController();
const webScrapingRoute = Router();

/**
 * @swagger
 * /web-scraping/webScrapingRamaJudicial:
 *  get:
 *     description: Get Web Scraping By Date
 *     tags:
 *       - Web Scraping
 *     responses:
 *      200:
 *        examples:
 *          application/json: {
 *          }
 *      400:
 *       schema:
 *         type: object
 *         properties:
 *           errors:
 *             type: object
 *       examples:
 *         application/json: {
 *           "errors": [
 *            ],
 *          }
 */
webScrapingRoute.get(
  '/webScrapingRamaJudicial',
  webScrapingController.webScrapingRamaJudicial
);

export default webScrapingRoute;
