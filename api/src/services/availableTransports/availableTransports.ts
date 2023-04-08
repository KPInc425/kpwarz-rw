import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const availableTransports: QueryResolvers['availableTransports'] =
  () => {
    return db.availableTransport.findMany()
  }

export const availableTransport: QueryResolvers['availableTransport'] = ({
  id,
}) => {
  return db.availableTransport.findUnique({
    where: { id },
  })
}

export const createAvailableTransport: MutationResolvers['createAvailableTransport'] =
  ({ input }) => {
    return db.availableTransport.create({
      data: input,
    })
  }

export const updateAvailableTransport: MutationResolvers['updateAvailableTransport'] =
  ({ id, input }) => {
    return db.availableTransport.update({
      data: input,
      where: { id },
    })
  }

export const deleteAvailableTransport: MutationResolvers['deleteAvailableTransport'] =
  ({ id }) => {
    return db.availableTransport.delete({
      where: { id },
    })
  }
