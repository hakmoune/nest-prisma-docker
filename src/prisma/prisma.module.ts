import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global(): les services déclarés dans ce module deviennent disponibles automatiquement dans toute l'application, sans avoir besoin de réimporter le module dans chaque autre module.
@Global() // Rendu global : plus besoin de l'importer partout
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Même si tu utilises @Global(), tu dois quand même exporter le service que tu veux partager. Rend ces services accessibles à l'extérieur du module.
})
export class PrismaModule {}

// exports: [...] → rend le service disponible aux autres modules qui l’importent (ou dans toute l’app si @Global()).
// providers: [...] → liste les services qui peuvent être injectés dans d'autres classes (comme les contrôleurs).
