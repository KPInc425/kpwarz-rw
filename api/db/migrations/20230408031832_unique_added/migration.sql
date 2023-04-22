/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `AvailableCity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `AvailableItems` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `AvailableRegion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `AvailableService` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `AvailableTransport` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AvailableCity_name_key" ON "AvailableCity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AvailableItems_name_key" ON "AvailableItems"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AvailableRegion_name_key" ON "AvailableRegion"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AvailableService_name_key" ON "AvailableService"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AvailableTransport_name_key" ON "AvailableTransport"("name");
