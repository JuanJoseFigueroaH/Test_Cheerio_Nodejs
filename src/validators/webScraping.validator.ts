import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
import { query } from 'express-validator';
import BaseValidator from './_base.validator';
import moment from 'moment';

class ArtistsValidator extends BaseValidator {
  // Validación del parametro fecha
  public paramFechaValidator = [query('fecha')
    .notEmpty()
    .isString().withMessage('Fecha debe ser un string.')];

  // Validación del formato del parametro fecha
  public validateDate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { fecha } = req.query;
    const result = moment(fecha, 'DD/MM/YYYY', true).isValid();
    if (result === false) {
      throw new BadRequestError(
        `Fecha: ${fecha}, está en formato invalido.`
      );
    }
    next();
  };
}

export default ArtistsValidator;
