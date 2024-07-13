-- CreateTable
CREATE TABLE "PriceAdjustment" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "date" DATE NOT NULL,
    "comment" TEXT NOT NULL,
    "subscriberAccountId" INTEGER NOT NULL,

    CONSTRAINT "PriceAdjustment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PriceAdjustment" ADD CONSTRAINT "PriceAdjustment_subscriberAccountId_fkey" FOREIGN KEY ("subscriberAccountId") REFERENCES "SubscriberAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
