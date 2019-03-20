import { Injectable } from '@nestjs/common';
import { House } from './model';

@Injectable()
export class HousesService {
  findOneById():House {
    return ({
      id: '1',
      area: 40,
      piecesNumber: 2,
      user: null,
    });
  }
}