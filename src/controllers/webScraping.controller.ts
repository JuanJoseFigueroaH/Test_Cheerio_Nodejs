import { Request, Response } from 'express';
import cheerio from 'cheerio';
import axios from 'axios';
class WebScrapingController {
	public webScrapingRamaJudicial = async (req: Request, res: Response) => {
	    const { fecha } = req.params;
	  	await axios.get('https://www.ramajudicial.gov.co/web/tribunal-superior-de-bogota-sala-laboral/140')
	    .then(urlResponse => {
	    	let dataResponse = {};
	      let booleanResponse = false;
	      const $ = cheerio.load(urlResponse.data);
	      $('table > tbody > tr').each((index, element) => {
	        if ($($(element).find('td')[1]).text().trim().toString() === fecha) {
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
