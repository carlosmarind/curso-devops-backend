import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo!';
  }

  getHi(): string {
    return 'Hi there!!!';
  }
}
