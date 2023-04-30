import type {
  QueryResolvers,
  MutationResolvers,
  TransactionSellRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { setMerchantFunds, checkMerchantFunds } from 'src/lib/merchantUtilities'
import { mutateItem } from 'src/lib/mutateItem'
import {
  checkPlayerEnoughItemsToSell,
  removeItemFromPlayer,
  setPlayerCash,
} from 'src/lib/playerUtilities'

export const transactionSells: QueryResolvers['transactionSells'] = () => {
  return db.transactionSell.findMany()
}

export const transactionSell: QueryResolvers['transactionSell'] = ({ id }) => {
  return db.transactionSell.findUnique({
    where: { id },
  })
}

export const createTransactionSell: MutationResolvers['createTransactionSell'] =
  async ({ input }) => {
    let itemToAdd
    const totalCost = input.price * input.quantity
    if (
      checkPlayerEnoughItemsToSell(
        input.characterId,
        input.itemName,
        input.quantity
      )
    ) {
      if (await checkMerchantFunds(input.merchantId, input.price)) {
        console.log('MUTATE ITEM')
        await removeItemFromPlayer(
          input.itemName,
          input.characterId,
          input.quantity
        )
        itemToAdd = await mutateItem(
          input.soldItemId,
          input.quantity,
          input.price
        )

        await setMerchantFunds(input.merchantId, -totalCost)
        await setPlayerCash(input.characterId, totalCost)

        return db.transactionSell.create({
          data: {
            characterId: input.characterId,
            itemName: itemToAdd.name,
            quantity: input.quantity,
            price: input.price,
            merchantId: input.merchantId,
          },
        })
      } else {
        throw new Error('Not enough funds')
      }
    } else {
      throw new Error('Not enough items')
    }
  }

export const updateTransactionSell: MutationResolvers['updateTransactionSell'] =
  ({ id, input }) => {
    return db.transactionSell.update({
      data: input,
      where: { id },
    })
  }

export const deleteTransactionSell: MutationResolvers['deleteTransactionSell'] =
  ({ id }) => {
    return db.transactionSell.delete({
      where: { id },
    })
  }

export const TransactionSell: TransactionSellRelationResolvers = {
  character: (_obj, { root }) => {
    return db.transactionSell
      .findUnique({ where: { id: root?.id } })
      .character()
  },
  merchant: (_obj, { root }) => {
    return db.transactionSell.findUnique({ where: { id: root?.id } }).merchant()
  },
}
