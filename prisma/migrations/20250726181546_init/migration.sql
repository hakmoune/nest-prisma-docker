-- CreateEnum
CREATE TYPE "Availability" AS ENUM ('IN_STOCK', 'OUT_OF_STOCK', 'PRE_ORDER');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "sale" BOOLEAN NOT NULL DEFAULT false,
    "availability" "Availability" NOT NULL DEFAULT 'IN_STOCK',

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
