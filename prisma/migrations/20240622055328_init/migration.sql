/*
  Warnings:

  - Added the required column `streetId` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" ADD COLUMN     "streetId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SubscriberAccount" ADD CONSTRAINT "SubscriberAccount_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "Street"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
