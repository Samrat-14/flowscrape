-- AlterTable
ALTER TABLE "Workflow" ADD COLUMN "cron" TEXT;
ALTER TABLE "Workflow" ADD COLUMN "nextRunAt" DATETIME;
