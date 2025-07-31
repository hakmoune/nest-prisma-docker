import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma'; // Les types générés par Prisma pour assurer que les données envoyées sont bien valides.
import { PrismaService } from 'src/prisma/prisma.service';

// Un service dans NestJS contient la logique métier (business logic).
// Exemple : accéder à la base de données, traiter des données, etc.
@Injectable() // Permet à NestJS d'injecter ce service dans d'autres classes (comme les contrôleurs).
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
