import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


@Get()
  getHome(): string {
    return this.appService.getPokemonIndex();
  }

  @Get('/saludo')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi(): string {
    return this.appService.getHi();
  }


 /* @Get('/saludo')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hi')
  getHi(): string {
    return this.appService.getHi();
  }*/
}
