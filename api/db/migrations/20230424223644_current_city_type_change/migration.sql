/*
  Warnings:

  - You are about to drop the column `currentCity` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "currentCity",
ADD COLUMN     "currentCityId" INTEGER;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_currentCityId_fkey" FOREIGN KEY ("currentCityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;
