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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
