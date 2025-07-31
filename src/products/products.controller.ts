import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma } from 'generated/prisma'; // Les types générés par Prisma pour assurer que les données envoyées sont bien valides.

// Le contrôleur gère les requêtes HTTP entrantes et délègue la logique métier au service.
// Il est responsable de la réception des données, de la validation et de l'envoi des réponses.
// Il ne contient aucune logique métier comme la création ou lecture dans la base de données. Il appelle simplement les méthodes du service.
@Controller('products') // 👉 Le contrôleur répond aux requêtes **qui commencent par `/products`**.
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: Prisma.ProductCreateInput) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: Prisma.ProductUpdateInput,
  ) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
