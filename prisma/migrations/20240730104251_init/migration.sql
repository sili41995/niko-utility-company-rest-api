/*
  Warnings:

  - A unique constraint covering the columns `[periodId]` on the table `PriceAdjustment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `periodId` to the `PriceAdjustment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PriceAdjustment" ADD COLUMN     "periodId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PriceAdjustment_periodId_key" ON "PriceAdjustment"("periodId");

-- AddForeignKey
ALTER TABLE "PriceAdjustment" ADD CONSTRAINT "PriceAdjustment_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
