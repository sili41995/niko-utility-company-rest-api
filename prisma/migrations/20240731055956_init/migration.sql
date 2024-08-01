/*
  Warnings:

  - The values [benefitCompensation] on the enum `PaymentSource` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PaymentSource_new" AS ENUM ('cash', 'privatbank', 'oshchadbank', 'postage', 'ukrsibbank', 'benefits', 'adjustment', 'aval', 'ukrgasbank', 'abank');
ALTER TABLE "Payment" ALTER COLUMN "source" TYPE "PaymentSource_new" USING ("source"::text::"PaymentSource_new");
ALTER TYPE "PaymentSource" RENAME TO "PaymentSource_old";
ALTER TYPE "PaymentSource_new" RENAME TO "PaymentSource";
DROP TYPE "PaymentSource_old";
COMMIT;
