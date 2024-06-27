/*
  Warnings:

  - You are about to alter the column `tariff` on the `Tariff` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,4)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Tariff" ALTER COLUMN "tariff" SET DATA TYPE DOUBLE PRECISION;
