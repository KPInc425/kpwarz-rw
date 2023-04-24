/*
  Warnings:

  - A unique constraint covering the columns `[merchantId]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `merchantId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "merchantId" SERIAL;

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "merchantId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Merchant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "description" TEXT,
    "currentItems" INTEGER NOT NULL DEFAULT 0,
    "maxItems" INTEGER NOT NULL DEFAULT 500,
    "tempermant" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "City_merchantId_key" ON "City"("merchantId");

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
