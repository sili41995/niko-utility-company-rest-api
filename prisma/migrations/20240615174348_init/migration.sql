/*
  Warnings:

  - You are about to drop the `HouseNumber` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HouseNumber" DROP CONSTRAINT "HouseNumber_street_fkey";

-- DropTable
DROP TABLE "HouseNumber";

-- CreateTable
CREATE TABLE "House" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "street" INTEGER NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "House_number_key" ON "House"("number");

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_street_fkey" FOREIGN KEY ("street") REFERENCES "Street"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
