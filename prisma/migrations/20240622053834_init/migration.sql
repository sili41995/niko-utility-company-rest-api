/*
  Warnings:

  - You are about to drop the column `house` on the `SubscriberAccount` table. All the data in the column will be lost.
  - Added the required column `houseId` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubscriberAccount" DROP CONSTRAINT "SubscriberAccount_house_fkey";

-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "house",
ADD COLUMN     "houseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SubscriberAccount" ADD CONSTRAINT "SubscriberAccount_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
