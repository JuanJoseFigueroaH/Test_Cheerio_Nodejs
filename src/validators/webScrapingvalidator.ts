import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
import { body } from 'express-validator';
import BaseValidator from './_base.validator';

class ArtistsValidator extends BaseValidator {
  public validateFields = [
    body('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name is not a string'),
    body('description')
      .optional({ checkFalsy: true, nullable: true })
      .isString()
      .withMessage('Description is not a string'),
    body('img')
      .optional({ checkFalsy: true, nullable: true })
      .isString()
      .withMessage('Img is not a string')
  ];

  public valifateIfArtistExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name } = req.body;
    const artists = await this.db.artists.findFirst({
      where: {
        name: {
          contains: name,
          mode: 'insensitive'
        }
      }
    });
    if (artists) {
      throw new BadRequestError(
        `Artist: ${name} exists in db`
      );
    }
    next();
  };
}

export default ArtistsValidator;
