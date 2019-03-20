import { Injectable } from '@nestjs/common';

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