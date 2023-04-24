import type {
  QueryResolvers,
  MutationResolvers,
  MerchantRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const merchants: QueryResolvers['merchants'] = () => {
  return db.merchant.findMany()
}

export const merchant: QueryResolvers['merchant'] = ({ id }) => {
  return db.merchant.findUnique({
    where: { id },
  })
}

export const createMerchant: MutationResolvers['createMerchant'] = ({
  input,
}) => {
  return db.merchant.create({
    data: input,
  })
}

export const updateMerchant: MutationResolvers['updateMerchant'] = ({
  id,
  input,
}) => {
  return db.merchant.update({
    data: input,
    where: { id },
  })
}

export const deleteMerchant: MutationResolvers['deleteMerchant'] = ({ id }) => {
  return db.merchant.delete({
    where: { id },
  })
}

export const Merchant: MerchantRelationResolvers = {
  location: (_obj, { root }) => {
    return db.merchant.findUnique({ where: { id: root?.id } }).location()
  },
  items: (_obj, { root }) => {
    return db.merchant.findUnique({ where: { id: root?.id } }).items()
  },
}
