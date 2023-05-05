/*
  Warnings:

  - The values [Uber] on the enum `TransportOptions` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransportOptions_new" AS ENUM ('Bootz', 'Bike', 'Bus', 'Ride_Share', 'Whip', 'Car_Service');
ALTER TABLE "Character" ALTER COLUMN "transportation" DROP DEFAULT;
ALTER TABLE "Character" ALTER COLUMN "transportation" TYPE "TransportOptions_new" USING ("transportation"::text::"TransportOptions_new");
ALTER TYPE "TransportOptions" RENAME TO "TransportOptions_old";
ALTER TYPE "TransportOptions_new" RENAME TO "TransportOptions";
DROP TYPE "TransportOptions_old";
ALTER TABLE "Character" ALTER COLUMN "transportation" SET DEFAULT 'Bootz';
COMMIT;
