/*
  Warnings:

  - Added the required column `phone_Number` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "phone_Number" TEXT NOT NULL;
