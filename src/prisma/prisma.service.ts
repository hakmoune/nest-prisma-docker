import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // 👉 Ici, tu ouvres une connexion à la base de données quand le module est initialisé.
  // C’est utile si tu veux forcer Prisma à se connecter dès le démarrage, au lieu d’attendre une requête
  async onModuleInit() {
    await this.$connect(); // hérité de PrismaClient
  }

  // Appelé automatiquement quand l’application est arrêtée (ou redémarre).
  // Ici, tu fermes la connexion à la base de données pour éviter les fuites de mémoire.
  async onModuleDestroy() {
    await this.$disconnect(); // hérité de PrismaClient
  }

  // Le mot-clé "this" fait référence à l’instance actuelle de la classe PrismaService.
}
