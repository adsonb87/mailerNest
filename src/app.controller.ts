import { Controller, Get, Render, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*
  @Get()
  @Render('index')
  index() {}*/

  @Get('form')
  @Render('form')
  exibirForm() {} //acessa formulário

  @Post('enviar-email') //envia dados do formulário para o nodemailer
  enviarEmail(@Request() req) {
    return this.appService.enviarEmail(req.body.email, req.body.mensagem);
  }

  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }*/
}
