import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const testStuffs: QueryResolvers['testStuffs'] = () => {
  return db.testStuff.findMany()
}

export const testStuff: QueryResolvers['testStuff'] = ({ id }) => {
  return db.testStuff.findUnique({
    where: { id },
  })
}

export const createTestStuff: MutationResolvers['createTestStuff'] = ({
  input,
}) => {
  return db.testStuff.create({
    data: input,
  })
}

export const updateTestStuff: MutationResolvers['updateTestStuff'] = ({
  id,
  input,
}) => {
  return db.testStuff.update({
    data: input,
    where: { id },
  })
}

export const deleteTestStuff: MutationResolvers['deleteTestStuff'] = ({
  id,
}) => {
  return db.testStuff.delete({
    where: { id },
  })
}
