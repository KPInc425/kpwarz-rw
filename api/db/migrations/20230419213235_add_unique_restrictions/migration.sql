/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,id]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Character_userId_id_key" ON "Character"("userId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Game_userId_id_key" ON "Game"("userId", "id");
