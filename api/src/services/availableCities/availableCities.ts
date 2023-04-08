import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const availableCities: QueryResolvers['availableCities'] = () => {
  return db.availableCity.findMany()
}

export const availableCity: QueryResolvers['availableCity'] = ({ id }) => {
  return db.availableCity.findUnique({
    where: { id },
  })
}

export const createAvailableCity: MutationResolvers['createAvailableCity'] = ({
  input,
}) => {
  return db.availableCity.create({
    data: input,
  })
}

export const updateAvailableCity: MutationResolvers['updateAvailableCity'] = ({
  id,
  input,
}) => {
  return db.availableCity.update({
    data: input,
    where: { id },
  })
}

export const deleteAvailableCity: MutationResolvers['deleteAvailableCity'] = ({
  id,
}) => {
  return db.availableCity.delete({
    where: { id },
  })
}
