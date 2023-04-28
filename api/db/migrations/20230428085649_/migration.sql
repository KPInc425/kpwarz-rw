/*
  Warnings:

  - A unique constraint covering the columns `[characterId]` on the table `CharacterFinances` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CharacterFinances_characterId_key" ON "CharacterFinances"("characterId");
