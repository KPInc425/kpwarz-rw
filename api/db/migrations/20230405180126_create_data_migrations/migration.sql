-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "richBody" JSONB;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "roles" SET DEFAULT 'player';

-- CreateTable
CREATE TABLE "RW_DataMigration" (
    "version" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "finishedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RW_DataMigration_pkey" PRIMARY KEY ("version")
);
