/*
  Warnings:

  - You are about to drop the column `itemId` on the `TransactionBuy` table. All the data in the column will be lost.
  - Added the required column `itemName` to the `TransactionBuy` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TransactionBuy" DROP CONSTRAINT "TransactionBuy_itemId_fkey";

-- AlterTable
ALTER TABLE "TransactionBuy" DROP COLUMN "itemId",
ADD COLUMN     "itemName" TEXT NOT NULL;
