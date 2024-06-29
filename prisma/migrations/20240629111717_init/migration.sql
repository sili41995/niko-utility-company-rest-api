/*
  Warnings:

  - You are about to drop the column `comment` on the `SubscriberAccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" DROP COLUMN "comment";

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "document" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "subscriberAccountId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_subscriberAccountId_fkey" FOREIGN KEY ("subscriberAccountId") REFERENCES "SubscriberAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
