/*
  Warnings:

  - Added the required column `sector` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" ADD COLUMN     "sector" "SectorType" NOT NULL,
ALTER COLUMN "apartment" DROP NOT NULL;
