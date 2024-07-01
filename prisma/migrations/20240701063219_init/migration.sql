/*
  Warnings:

  - You are about to drop the column `additionalPhone` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `birthday` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `passport` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `SubscriberAccount` table. All the data in the column will be lost.
  - You are about to drop the column `utr` on the `SubscriberAccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "additionalPhone",
DROP COLUMN "birthday",
DROP COLUMN "email",
DROP COLUMN "middleName",
DROP COLUMN "name",
DROP COLUMN "passport",
DROP COLUMN "phone",
DROP COLUMN "surname",
DROP COLUMN "utr";

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "utr" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "additionalPhone" TEXT NOT NULL,
    "email" TEXT,
    "birthday" DATE,
    "subscriberAccountId" INTEGER NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Owner_subscriberAccountId_key" ON "Owner"("subscriberAccountId");

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_subscriberAccountId_fkey" FOREIGN KEY ("subscriberAccountId") REFERENCES "SubscriberAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
