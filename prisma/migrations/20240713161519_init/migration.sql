-- CreateEnum
CREATE TYPE "PaymentSource" AS ENUM ('cash', 'privatbank', 'oshchadbank', 'postage', 'ukrsibbank', 'benefitCompensation', 'adjustment', 'aval', 'ukrgasbank', 'abank');

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "source" "PaymentSource" NOT NULL,
    "date" DATE NOT NULL,
    "subscriberAccountId" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_subscriberAccountId_fkey" FOREIGN KEY ("subscriberAccountId") REFERENCES "SubscriberAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
