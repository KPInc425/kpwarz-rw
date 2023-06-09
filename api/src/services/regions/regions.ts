import type {
  QueryResolvers,
  MutationResolvers,
  RegionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const regions: QueryResolvers['regions'] = () => {
  return db.region.findMany()
}

export const region: QueryResolvers['region'] = ({ id }) => {
  return db.region.findUnique({
    where: { id },
  })
}

export const createRegion: MutationResolvers['createRegion'] = ({ input }) => {
  return db.region.create({
    data: input,
  })
}

export const updateRegion: MutationResolvers['updateRegion'] = ({
  id,
  input,
}) => {
  return db.region.update({
    data: input,
    where: { id },
  })
}

export const deleteRegion: MutationResolvers['deleteRegion'] = ({ id }) => {
  return db.region.delete({
    where: { id },
  })
}

export const Region: RegionRelationResolvers = {
  cities: (_obj, { root }) => {
    return db.region.findUnique({ where: { id: root?.id } }).cities()
  },
  game: (_obj, { root }) => {
    return db.region.findUnique({ where: { id: root?.id } }).game()
  },
}
