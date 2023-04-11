/*
  Warnings:

  - You are about to drop the column `currentLocation` on the `Game` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[regionId]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[gameId]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `currentRegionId` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "currentLocation",
ADD COLUMN     "currentRegionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "gameId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "City_regionId_key" ON "City"("regionId");

-- CreateIndex
CREATE UNIQUE INDEX "Region_gameId_key" ON "Region"("gameId");

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
