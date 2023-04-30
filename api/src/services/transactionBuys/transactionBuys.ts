import type {
  QueryResolvers,
  MutationResolvers,
  TransactionBuyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { generateNewItem } from 'src/lib/generateNewItem'
import {
  setMerchantFunds,
  removeItemFromMerchant,
} from 'src/lib/merchantUtilities'
import { mutateItem } from 'src/lib/mutateItem'
import {
  addItemToPlayer,
  checkIfAlreadyHoldingItem,
  checkInventorySpace,
  checkPlayerFunds,
  setPlayerCash,
} from 'src/lib/playerUtilities'

export const transactionBuys: QueryResolvers['transactionBuys'] = () => {
  return db.transactionBuy.findMany()
}

export const transactionBuy: QueryResolvers['transactionBuy'] = ({ id }) => {
  return db.transactionBuy.findUnique({
    where: { id },
  })
}

export const createTransactionBuy: MutationResolvers['createTransactionBuy'] =
  async ({ input }) => {
    let itemToAdd
    const totalCost = input.price * input.quantity
    if (await checkPlayerFunds(input.characterId, totalCost)) {
      if (await checkInventorySpace(input.characterId, input.quantity)) {
        const itemFound = await checkIfAlreadyHoldingItem(
          input.characterId,
          input.itemName
        )
        if (itemFound.status) {
          console.log('MUTATE ITEM')
          itemToAdd = await mutateItem(
            itemFound.itemId,
            input.quantity,
            input.price
          )
        } else {
          console.log('GENERATE NEW ITEM')
          itemToAdd = await generateNewItem(input.boughtItemId, input.quantity)
          await addItemToPlayer(input.characterId, itemToAdd)
        }
        await removeItemFromMerchant(input.boughtItemId, input.quantity)
        console.log('itemToAdd')
        console.log(itemToAdd)
        await setMerchantFunds(input.merchantId, input.price)
        await setPlayerCash(input.characterId, -totalCost)

        return db.transactionBuy.create({
          data: {
            characterId: input.characterId,
            itemName: itemToAdd.name,
            quantity: input.quantity,
            price: input.price,
            merchantId: input.merchantId,
          },
        })
      } else {
        throw new Error('Not enough inventory space')
      }
    } else {
      throw new Error('Not enough funds')
    }
  }

export const updateTransactionBuy: MutationResolvers['updateTransactionBuy'] =
  ({ id, input }) => {
    return db.transactionBuy.update({
      data: input,
      where: { id },
    })
  }

export const deleteTransactionBuy: MutationResolvers['deleteTransactionBuy'] =
  ({ id }) => {
    return db.transactionBuy.delete({
      where: { id },
    })
  }

export const TransactionBuy: TransactionBuyRelationResolvers = {
  character: (_obj, { root }) => {
    return db.transactionBuy.findUnique({ where: { id: root?.id } }).character()
  },
}
