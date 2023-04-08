import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const availableItemses: QueryResolvers['availableItemses'] = () => {
  return db.availableItems.findMany()
}

export const availableItems: QueryResolvers['availableItems'] = ({ id }) => {
  return db.availableItems.findUnique({
    where: { id },
  })
}

export const createAvailableItems: MutationResolvers['createAvailableItems'] =
  ({ input }) => {
    return db.availableItems.create({
      data: input,
    })
  }

export const updateAvailableItems: MutationResolvers['updateAvailableItems'] =
  ({ id, input }) => {
    return db.availableItems.update({
      data: input,
      where: { id },
    })
  }

export const deleteAvailableItems: MutationResolvers['deleteAvailableItems'] =
  ({ id }) => {
    return db.availableItems.delete({
      where: { id },
    })
  }
