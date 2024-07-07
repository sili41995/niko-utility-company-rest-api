-- CreateTable
CREATE TABLE "Statistics" (
    "id" SERIAL NOT NULL,
    "subscriberAccounts" INTEGER NOT NULL,
    "residents" INTEGER NOT NULL,
    "balanceStart" INTEGER NOT NULL,
    "accrued" INTEGER NOT NULL DEFAULT 0,
    "penalty" INTEGER NOT NULL DEFAULT 0,
    "adjustment" INTEGER NOT NULL,
    "benefits" INTEGER NOT NULL DEFAULT 0,
    "subsidies" INTEGER NOT NULL DEFAULT 0,
    "balanceEnd" INTEGER NOT NULL,
    "periodId" INTEGER NOT NULL,

    CONSTRAINT "Statistics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Statistics_periodId_key" ON "Statistics"("periodId");

-- AddForeignKey
ALTER TABLE "Statistics" ADD CONSTRAINT "Statistics_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
