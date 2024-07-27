/*
  Warnings:

  - You are about to drop the column `lastCalculate` on the `SubscriberAccount` table. All the data in the column will be lost.
  - Added the required column `residents` to the `Price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tariff` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Price" ADD COLUMN     "residents" INTEGER NOT NULL,
ADD COLUMN     "tariff" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "lastCalculate";
