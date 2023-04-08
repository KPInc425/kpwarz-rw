import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const availableRegions: QueryResolvers['availableRegions'] = () => {
  return db.availableRegion.findMany()
}

export const availableRegion: QueryResolvers['availableRegion'] = ({ id }) => {
  return db.availableRegion.findUnique({
    where: { id },
  })
}

export const createAvailableRegion: MutationResolvers['createAvailableRegion'] =
  ({ input }) => {
    return db.availableRegion.create({
      data: input,
    })
  }

export const updateAvailableRegion: MutationResolvers['updateAvailableRegion'] =
  ({ id, input }) => {
    return db.availableRegion.update({
      data: input,
      where: { id },
    })
  }

export const deleteAvailableRegion: MutationResolvers['deleteAvailableRegion'] =
  ({ id }) => {
    return db.availableRegion.delete({
      where: { id },
    })
  }
