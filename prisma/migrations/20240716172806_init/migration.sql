/*
  Warnings:

  - You are about to drop the column `street` on the `House` table. All the data in the column will be lost.
  - Added the required column `streetId` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "House" DROP CONSTRAINT "House_street_fkey";

-- AlterTable
ALTER TABLE "House" DROP COLUMN "street",
ADD COLUMN     "streetId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_streetId_fkey" FOREIGN KEY ("streetId") REFERENCES "Street"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
