/*
  Warnings:

  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lastCalculate` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_subscriberAccountId_fkey";

-- AlterTable
ALTER TABLE "SubscriberAccount" ADD COLUMN     "lastCalculate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "Price";
