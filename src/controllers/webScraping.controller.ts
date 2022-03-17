import { Request, Response } from 'express';
import cheerio from 'cheerio';
import axios from 'axios';
class WebScrapingController {
	public webScrapingRamaJudicial = async (req: Request, res: Response) => {
	  // Obtener el parametro fecha
	    const { fecha } = req.query;

	  // Realizar llamado para obtener los DOMS de la pagina
	  	await axios.get('https://www.ramajudicial.gov.co/web/tribunal-superior-de-bogota-sala-laboral/140')
	    .then(urlResponse => {
	      // Declaracion de variables
	    	let dataResponse = {};
	      let booleanResponse = false;
	      const $ = cheerio.load(urlResponse.data);

	      // Recorrido de los elementos DOMS
	      $('table > tbody > tr').each((index, element) => {
	        // Validacion de los datos del DOM con la fecha de parametro
	        if ($($(element).find('td')[1]).text().trim().toString() === fecha) {
	          // Construccion de respuesta
	          dataResponse = {
	            found: true,
	            data: {
	              code: $($(element).find('td')[0]).text().trim().toString(),
	              date: $($(element).find('td')[1]).text().trim().toString()
	            }
	          }
	          booleanResponse = true;
	        }
	      });
	      	if (booleanResponse === false) {
	        // Construccion de respuesta
	        dataResponse = {
	          found: false,
	          message: 'Not Found'
	        }
	      }
	      	res.status(200).send(dataResponse);
	    });
	};
}

export default WebScrapingController;
