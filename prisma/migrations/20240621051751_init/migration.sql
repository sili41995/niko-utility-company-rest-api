/*
  Warnings:

  - Added the required column `isEligibleForBenefit` to the `SubscriberAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubscriberAccount" ADD COLUMN     "isEligibleForBenefit" BOOLEAN NOT NULL;
