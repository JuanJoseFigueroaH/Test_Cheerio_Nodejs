import { Router } from 'express';
import WebScrapingController from '../controllers/webScraping.controller';
import WebScrapingValidator from '../validators/webScraping.validator';
import { validateRequest } from '../middlewares';

// Instancia de controlador y validaciones
const webScrapingController = new WebScrapingController();
const webScrapingValidator = new WebScrapingValidator();
const webScrapingRoute = Router();

// Ruta para consumir el controlador y exponer endpoint
/**
 * @swagger
 * /web-scraping/webScrapingRamaJudicial:
 *  get:
 *     description: Get Web Scraping By Date
 *     tags:
 *       - Web Scraping
 *     parameters:
 *       - name: fecha
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        examples:
 *          application/json: {
 *             "found": true,
 *             "data": {
 *               code: "001",
 *               fecha: "11/01/2022"
 *             },
 *          }
 *      400:
 *       schema:
 *         type: object
 *         properties:
 *           errors:
 *             type: object
 *       examples:
 *         application/json: {
 *            message: "Formato de fecha invalido."
 *         }
 */
webScrapingRoute.get(
  '/webScrapingRamaJudicial/',
  webScrapingValidator.paramFechaValidator,
  validateRequest,
  webScrapingValidator.validateDate,
  webScrapingController.webScrapingRamaJudicial
);

export default webScrapingRoute;
