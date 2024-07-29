/*
  Warnings:

  - You are about to drop the column `document` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `subscriberAccount` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `tariff` on the `Tariff` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `SubscriberAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Tariff` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SubscriberAccount_subscriberAccount_key";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "document",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "balance",
DROP COLUMN "subscriberAccount",
ADD COLUMN     "number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tariff" DROP COLUMN "tariff",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberAccount_number_key" ON "SubscriberAccount"("number");
