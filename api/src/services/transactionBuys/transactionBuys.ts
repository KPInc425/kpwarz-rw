import type {
  QueryResolvers,
  MutationResolvers,
  TransactionBuyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { generateNewItem } from 'src/lib/generateNewItem'
import {
  removeCostFromMerchant,
  removeItemFromMerchant,
} from 'src/lib/merchantUtilities'
import { mutateItem } from 'src/lib/mutateItem'
import {
  addItemToPlayer,
  checkIfAlreadyHoldingItem,
  checkInventorySpace,
  checkPlayerFunds,
  removeCostFromPlayer,
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
    if (await checkPlayerFunds(input.characterId, input.price)) {
      if (await checkInventorySpace(input.characterId, input.quantity)) {
        await removeCostFromPlayer(input.characterId, input.price)
        if (await checkIfAlreadyHoldingItem(input.characterId, input.itemId)) {
          itemToAdd = await generateNewItem(input.itemId, input.quantity)
          await addItemToPlayer(input.characterId, itemToAdd)
        } else {
          itemToAdd = await mutateItem(
            input.itemId,
            input.quantity,
            input.price
          )
        }
        await removeCostFromMerchant(input.merchantId, input.price)
        await removeItemFromMerchant(input.itemId, input.quantity)
        const CreateTransactionBuyInput = {
          characterId: input.characterId,
          itemId: itemToAdd.id,
          quantity: input.quantity,
          price: input.price,
          merchantId: input.merchantId,
        }
        return db.transactionBuy.create({
          data: CreateTransactionBuyInput,
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
  item: (_obj, { root }) => {
    return db.transactionBuy.findUnique({ where: { id: root?.id } }).item()
  },
}
