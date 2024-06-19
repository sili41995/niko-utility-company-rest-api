-- CreateTable
CREATE TABLE "SubscriberAccount" (
    "id" SERIAL NOT NULL,
    "apartment" TEXT NOT NULL,
    "subscriberAccount" TEXT NOT NULL,
    "email" TEXT,
    "birthday" TEXT,
    "contract" TEXT NOT NULL,
    "contractDate" TIMESTAMP(3) NOT NULL,
    "isLivingApartment" BOOLEAN NOT NULL,
    "residents" INTEGER NOT NULL,
    "period" TIMESTAMP(3) NOT NULL,
    "isRemovalHouseholdWaste" BOOLEAN NOT NULL,
    "utr" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "additionalPhone" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "house" INTEGER NOT NULL,

    CONSTRAINT "SubscriberAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberAccount_apartment_key" ON "SubscriberAccount"("apartment");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberAccount_subscriberAccount_key" ON "SubscriberAccount"("subscriberAccount");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberAccount_contract_key" ON "SubscriberAccount"("contract");

-- AddForeignKey
ALTER TABLE "SubscriberAccount" ADD CONSTRAINT "SubscriberAccount_house_fkey" FOREIGN KEY ("house") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
