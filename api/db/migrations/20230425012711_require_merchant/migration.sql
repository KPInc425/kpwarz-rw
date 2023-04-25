/*
  Warnings:

  - Made the column `merchantId` on table `City` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_merchantId_fkey";

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "merchantId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
