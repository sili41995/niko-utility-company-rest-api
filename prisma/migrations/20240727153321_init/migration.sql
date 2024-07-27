/*
  Warnings:

  - You are about to drop the column `price` on the `SubscriberAccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "price";

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" DATE NOT NULL,
    "subscriberAccountId" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_subscriberAccountId_fkey" FOREIGN KEY ("subscriberAccountId") REFERENCES "SubscriberAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
