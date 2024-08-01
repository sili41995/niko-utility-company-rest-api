/*
  Warnings:

  - You are about to drop the column `amount` on the `Price` table. All the data in the column will be lost.
  - You are about to drop the column `tariff` on the `Price` table. All the data in the column will be lost.
  - Added the required column `tariffId` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Price" DROP COLUMN "amount",
DROP COLUMN "tariff",
ADD COLUMN     "tariffId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_tariffId_fkey" FOREIGN KEY ("tariffId") REFERENCES "Tariff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
