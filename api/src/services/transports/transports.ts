import type {
  QueryResolvers,
  MutationResolvers,
  TransportRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const transports: QueryResolvers['transports'] = () => {
  return db.transport.findMany()
}

export const transport: QueryResolvers['transport'] = ({ id }) => {
  return db.transport.findUnique({
    where: { id },
  })
}

export const createTransport: MutationResolvers['createTransport'] = ({
  input,
}) => {
  return db.transport.create({
    data: input,
  })
}

export const updateTransport: MutationResolvers['updateTransport'] = ({
  id,
  input,
}) => {
  return db.transport.update({
    data: input,
    where: { id },
  })
}

export const deleteTransport: MutationResolvers['deleteTransport'] = ({
  id,
}) => {
  return db.transport.delete({
    where: { id },
  })
}

export const Transport: TransportRelationResolvers = {
  character: (_obj, { root }) => {
    return db.transport.findUnique({ where: { id: root?.id } }).character()
  },
}
