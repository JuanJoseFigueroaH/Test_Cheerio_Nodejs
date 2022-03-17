import { Router } from 'express';
import WebScrapingController from '../controllers/webScraping.controller';

const webScrapingController = new WebScrapingController();
const webScrapingRoute = Router();

/**
 * @swagger
 * /web-scraping/webScrapingRamaJudicial/{fecha}:
 *  get:
 *     description: Get Web Scraping By Date
 *     tags:
 *       - Web Scraping
 *     parameters:
 *       - name: fecha
 *         in: path
 *         required: true
 *         type: string
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
  '/webScrapingRamaJudicial/:fecha',
  webScrapingController.webScrapingRamaJudicial
);

export default webScrapingRoute;
