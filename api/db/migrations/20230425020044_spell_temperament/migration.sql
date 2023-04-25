/*
  Warnings:

  - You are about to drop the column `tempermant` on the `Merchant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "tempermant",
ADD COLUMN     "temperament" INTEGER;
