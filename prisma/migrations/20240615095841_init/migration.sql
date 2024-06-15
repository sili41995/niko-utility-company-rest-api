/*
  Warnings:

  - Added the required column `type` to the `Street` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Street" ADD COLUMN     "type" TEXT NOT NULL;
