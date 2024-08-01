/*
  Warnings:

  - You are about to drop the column `accounting` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `counters` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `documents` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fullAccess` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `houses` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `oneOffJobs` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `settings` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscribers` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "accounting",
DROP COLUMN "counters",
DROP COLUMN "documents",
DROP COLUMN "fullAccess",
DROP COLUMN "houses",
DROP COLUMN "oneOffJobs",
DROP COLUMN "settings",
DROP COLUMN "subscribers";
