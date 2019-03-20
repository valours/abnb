import { Injectable } from '@nestjs/common';
import { House } from './model';

@Injectable()
export class HousesService {
  findOneById() {
    return ({
      id: '1',
      area: 40,
      piecesNumber: 2,
    });
  }
}