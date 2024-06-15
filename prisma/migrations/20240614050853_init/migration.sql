-- CreateTable
CREATE TABLE "GeneralSettings" (
    "id" SERIAL NOT NULL,
    "currentAccount" TEXT NOT NULL,
    "mfi" TEXT NOT NULL,
    "helpPhone" TEXT NOT NULL,
    "adsInPayments" TEXT NOT NULL,

    CONSTRAINT "GeneralSettings_pkey" PRIMARY KEY ("id")
);
