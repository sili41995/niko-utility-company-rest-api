/*
  Warnings:

  - A unique constraint covering the columns `[document]` on the table `Document` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Document_document_key" ON "Document"("document");
