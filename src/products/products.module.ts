import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

// @Module Ce décorateur permet de déclarer un module dans NestJS.
// NestJS est basé sur le concept modulaire (comme Angular).
// Chaque fonctionnalité (par exemple les produits) a son propre module, son service, son contrôleur, etc.
// Module: fournit des métadonnées que Nest utilise pour organiser et gérer efficacement la structure de l'applications
@Module({
  controllers: [ProductsController], // Enregistre les contrôleurs qui géreront les demandes entrantes
  providers: [ProductsService], // Enregistre les services et autres providers qui peuvent être injectés dans les contrôleurs
})
export class ProductsModule {}
