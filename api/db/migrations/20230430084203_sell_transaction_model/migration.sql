-- CreateTable
CREATE TABLE "TransactionSell" (
    "id" SERIAL NOT NULL,
    "characterId" INTEGER NOT NULL,
    "merchantId" INTEGER NOT NULL,
    "itemName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TransactionSell_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TransactionSell" ADD CONSTRAINT "TransactionSell_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionSell" ADD CONSTRAINT "TransactionSell_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
