import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const availableServices: QueryResolvers['availableServices'] = () => {
  return db.availableService.findMany()
}

export const availableService: QueryResolvers['availableService'] = ({
  id,
}) => {
  return db.availableService.findUnique({
    where: { id },
  })
}

export const createAvailableService: MutationResolvers['createAvailableService'] =
  ({ input }) => {
    return db.availableService.create({
      data: input,
    })
  }

export const updateAvailableService: MutationResolvers['updateAvailableService'] =
  ({ id, input }) => {
    return db.availableService.update({
      data: input,
      where: { id },
    })
  }

export const deleteAvailableService: MutationResolvers['deleteAvailableService'] =
  ({ id }) => {
    return db.availableService.delete({
      where: { id },
    })
  }
