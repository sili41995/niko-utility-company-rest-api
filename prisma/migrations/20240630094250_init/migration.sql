-- AlterTable
ALTER TABLE "SubscriberAccount" ALTER COLUMN "lastCalculate" DROP NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0;
