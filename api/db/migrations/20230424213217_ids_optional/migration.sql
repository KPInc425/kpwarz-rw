-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_characterId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_merchantId_fkey";

-- AlterTable
ALTER TABLE "City" ALTER COLUMN "merchantId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "characterId" DROP NOT NULL,
ALTER COLUMN "gameId" DROP NOT NULL,
ALTER COLUMN "merchantId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
