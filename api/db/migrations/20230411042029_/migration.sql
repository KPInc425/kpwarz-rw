/*
  Warnings:

  - The `type` column on the `AvailableItems` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `storageType` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StorageType" AS ENUM ('Pockets', 'BackPack', 'Trench_Coat', 'Suitcase');

-- CreateEnum
CREATE TYPE "TransportOptions" AS ENUM ('Bootz', 'Bike', 'Bus', 'Uber', 'Whip', 'Car_Service');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('Food', 'Weapon', 'Clothing', 'Medicine', 'Drug', 'Misc');

-- AlterTable
ALTER TABLE "AvailableItems" DROP COLUMN "type",
ADD COLUMN     "type" "ItemType" NOT NULL DEFAULT 'Drug';

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "transportation" "TransportOptions" NOT NULL DEFAULT 'Bootz',
DROP COLUMN "storageType",
ADD COLUMN     "storageType" "StorageType" NOT NULL DEFAULT 'Pockets';

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "type",
ADD COLUMN     "type" "ItemType" NOT NULL;
