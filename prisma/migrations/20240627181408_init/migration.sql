-- CreateEnum
CREATE TYPE "SectorType" AS ENUM ('multiFamily', 'private', 'other');

-- CreateTable
CREATE TABLE "Tariff" (
    "id" SERIAL NOT NULL,
    "tariff" DECIMAL(10,4) NOT NULL,
    "sector" "SectorType" NOT NULL,
    "start" DATE NOT NULL,

    CONSTRAINT "Tariff_pkey" PRIMARY KEY ("id")
);
