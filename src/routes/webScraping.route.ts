import { Router } from 'express';
import WebScrapingController from '../controllers/webScraping.controller';

const webScrapingController = new WebScrapingController();
const webScrapingRoute = Router();

/**
 * @swagger
 * /companys/getCompany:
 *  get:
 *     description: Get Company
 *     tags:
 *       - Companys
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
  '/getCompany',
  webScrapingController.webScrapingRamaJudicial
);

export default webScrapingRoute;
