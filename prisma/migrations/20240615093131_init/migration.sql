-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "fullAccess" BOOLEAN NOT NULL DEFAULT false,
    "houses" BOOLEAN NOT NULL DEFAULT false,
    "subscribers" BOOLEAN NOT NULL DEFAULT false,
    "accounting" BOOLEAN NOT NULL DEFAULT false,
    "documents" BOOLEAN NOT NULL DEFAULT false,
    "counters" BOOLEAN NOT NULL DEFAULT false,
    "oneOffJobs" BOOLEAN NOT NULL DEFAULT false,
    "settings" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneralSettings" (
    "id" SERIAL NOT NULL,
    "currentAccount" TEXT NOT NULL,
    "mfi" INTEGER NOT NULL,
    "helpPhone" TEXT NOT NULL,
    "adsInPayments" TEXT,

    CONSTRAINT "GeneralSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HouseNumber" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "street" INTEGER NOT NULL,

    CONSTRAINT "HouseNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Street" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Street_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "HouseNumber_number_key" ON "HouseNumber"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Street_name_key" ON "Street"("name");

-- AddForeignKey
ALTER TABLE "HouseNumber" ADD CONSTRAINT "HouseNumber_street_fkey" FOREIGN KEY ("street") REFERENCES "Street"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
