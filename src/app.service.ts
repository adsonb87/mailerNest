import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) {}

  async enviarEmail(email: string, mensagem: string) {
    await this.mailerService.sendMail({
      to: 'adelino@4bi.com.br', //email de destino
      from: 'adson@4bi.com.br',
      subject: 'Envio de e-mail com nestJS',
      html: `<h3 style="color: red">${mensagem}</h3>`,
    });
  }
}
