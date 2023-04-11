import type {
  QueryResolvers,
  MutationResolvers,
  CityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const cities: QueryResolvers['cities'] = () => {
  return db.city.findMany()
}

export const city: QueryResolvers['city'] = ({ id }) => {
  return db.city.findUnique({
    where: { id },
  })
}

export const createCity: MutationResolvers['createCity'] = ({ input }) => {
  return db.city.create({
    data: input,
  })
}

export const updateCity: MutationResolvers['updateCity'] = ({ id, input }) => {
  return db.city.update({
    data: input,
    where: { id },
  })
}

export const deleteCity: MutationResolvers['deleteCity'] = ({ id }) => {
  return db.city.delete({
    where: { id },
  })
}

export const City: CityRelationResolvers = {
  region: (_obj, { root }) => {
    return db.city.findUnique({ where: { id: root?.id } }).region()
  },
  services: (_obj, { root }) => {
    return db.city.findUnique({ where: { id: root?.id } }).services()
  },
}
