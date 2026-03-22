/*
  Warnings:

  - You are about to drop the column `price` on the `course` table. All the data in the column will be lost.
  - Added the required column `price_dlr` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_shl` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."course" DROP COLUMN "price",
ADD COLUMN     "price_dlr" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "price_shl" TEXT NOT NULL;
