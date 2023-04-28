import type {
  QueryResolvers,
  MutationResolvers,
  TransactionBuyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const transactionBuys: QueryResolvers['transactionBuys'] = () => {
  return db.transactionBuy.findMany()
}

export const transactionBuy: QueryResolvers['transactionBuy'] = ({ id }) => {
  return db.transactionBuy.findUnique({
    where: { id },
  })
}

export const createTransactionBuy: MutationResolvers['createTransactionBuy'] =
  ({ input }) => {
    // if (checkPlayerFunds(input.characterId, input.price)) {
    //   if (checkInventorySpace(input.characterId, input.quantity)) {
    //     removeCostFromPlayer(input.characterId, input.price)
    //     addItemToPlayer(input.characterId, )
    // }

    return db.transactionBuy.create({
      data: input,
    })
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
