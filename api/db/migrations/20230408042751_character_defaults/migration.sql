-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "background" TEXT NOT NULL DEFAULT 'Plebian',
ALTER COLUMN "health" SET DEFAULT 100,
ALTER COLUMN "maxHealth" SET DEFAULT 100,
ALTER COLUMN "currentItems" SET DEFAULT 0,
ALTER COLUMN "maxItems" SET DEFAULT 100;