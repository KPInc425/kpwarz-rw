-- CreateTable
CREATE TABLE "TransactionBuy" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "itemId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionBuy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TransactionBuy" ADD CONSTRAINT "TransactionBuy_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionBuy" ADD CONSTRAINT "TransactionBuy_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
