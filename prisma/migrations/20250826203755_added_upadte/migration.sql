-- DropForeignKey
ALTER TABLE "public"."lessonProgress" DROP CONSTRAINT "lessonProgress_lessonId_fkey";

-- AddForeignKey
ALTER TABLE "public"."lessonProgress" ADD CONSTRAINT "lessonProgress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "public"."lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
