-- CreateTable
CREATE TABLE "Balance" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "periodId" INTEGER NOT NULL,
    "subscriberAccountId" INTEGER NOT NULL,

    CONSTRAINT "Balance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balance" ADD CONSTRAINT "Balance_subscriberAccountId_fkey" FOREIGN KEY ("subscriberAccountId") REFERENCES "SubscriberAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
