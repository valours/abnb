import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { House } from './model';

@Injectable()
export class HousesService {
  constructor(@InjectModel('House') private readonly houseModel: Model<House>) { }

  findOneById() {
    return ({
      id: '1',
      area: 40,
      piecesNumber: 2,
    });
  }

  async findAll(): Promise<House[]> {
    return await this.houseModel.find().exec();
  }
}
