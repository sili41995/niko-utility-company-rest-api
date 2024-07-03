-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "isCurrentPeriod" BOOLEAN NOT NULL,
    "start" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);
