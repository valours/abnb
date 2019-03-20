import { Injectable } from '@nestjs/common';
import { User } from './model';

@Injectable()
export class UsersService {
  findOneById():User {
    return {
      id: 1,
      name: 'valentin'
    };
  }
}