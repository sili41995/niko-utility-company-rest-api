/*
  Warnings:

  - Changed the type of `apartment` on the `SubscriberAccount` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "SubscriberAccount_apartment_key";

-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "apartment",
ADD COLUMN     "apartment" INTEGER NOT NULL;
