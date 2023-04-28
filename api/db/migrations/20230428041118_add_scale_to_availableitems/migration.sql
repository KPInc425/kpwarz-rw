-- AlterTable
ALTER TABLE "AvailableItems" ADD COLUMN     "scale" TEXT NOT NULL DEFAULT 'gram';

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "scale" DROP DEFAULT;
