-- AlterTable
ALTER TABLE "City" ALTER COLUMN "avgQuality" DROP NOT NULL,
ALTER COLUMN "authorityPresence" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "quality" DROP NOT NULL,
ALTER COLUMN "ability" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL,
ALTER COLUMN "uses" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Region" ALTER COLUMN "control" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transport" ALTER COLUMN "storage" DROP NOT NULL;

-- CreateTable
CREATE TABLE "AvailableItems" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "ability" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AvailableItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableRegion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AvailableRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableCity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AvailableCity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableService" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AvailableService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableTransport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "speed" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "storage" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AvailableTransport_pkey" PRIMARY KEY ("id")
);
