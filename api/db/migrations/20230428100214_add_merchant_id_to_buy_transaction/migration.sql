/*
  Warnings:

  - Added the required column `merchantId` to the `TransactionBuy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransactionBuy" ADD COLUMN     "merchantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TransactionBuy" ADD CONSTRAINT "TransactionBuy_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
