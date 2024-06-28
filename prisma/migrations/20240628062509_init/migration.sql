/*
  Warnings:

  - Changed the type of `sector` on the `SubscriberAccount` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sector` on the `Tariff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "sector",
ADD COLUMN     "sector" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tariff" DROP COLUMN "sector",
ADD COLUMN     "sector" TEXT NOT NULL;

-- DropEnum
DROP TYPE "SectorType";
