/*
  Warnings:

  - The values [multiFamily] on the enum `SectorType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SectorType_new" AS ENUM ('multiApartment', 'private', 'other');
ALTER TABLE "SubscriberAccount" ALTER COLUMN "sector" TYPE "SectorType_new" USING ("sector"::text::"SectorType_new");
ALTER TABLE "Tariff" ALTER COLUMN "sector" TYPE "SectorType_new" USING ("sector"::text::"SectorType_new");
ALTER TYPE "SectorType" RENAME TO "SectorType_old";
ALTER TYPE "SectorType_new" RENAME TO "SectorType";
DROP TYPE "SectorType_old";
COMMIT;
