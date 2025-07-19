import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Contrôleur traite la requête, en appelant éventuellement un service pour exécuter la logique métier,
// Puis renvoie une réponse. Cette réponse est renvoyée au client.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
