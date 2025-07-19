import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Module: fournit des métadonnées que Nest utilise pour organiser et gérer efficacement la structure de l'application.s
@Module({
  imports: [], // Permet d'importer d'autres modules dont les providers exportés sont nécessaires dans ce module
  controllers: [AppController], // Enregistre les contrôleurs qui géreront les demandes entrantes
  providers: [AppService], // Enregistre les services et autres providers qui peuvent être injectés dans les contrôleurs
})
export class AppModule {}
