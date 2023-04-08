/*
  Warnings:

  - The `background` column on the `Character` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Background" AS ENUM ('Plebian', 'Suburban_Kid', 'Affluenza');

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "background",
ADD COLUMN     "background" "Background" NOT NULL DEFAULT 'Plebian';

-- DropEnum
DROP TYPE "TestStuff";

-- CreateTable
CREATE TABLE "TestStuff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "background" "Background" NOT NULL DEFAULT 'Plebian',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestStuff_pkey" PRIMARY KEY ("id")
);
