import { Request, Response } from 'express';

class WebScrapingController {
  public webScrapingRamaJudicial = async (req: Request, res: Response) => {
    const jsonCompany = { nombre: '', direccion: '', whatsapp: '', correo: '', telefono: '' };
    res.status(200).send(jsonCompany);
  };
}

export default WebScrapingController;
