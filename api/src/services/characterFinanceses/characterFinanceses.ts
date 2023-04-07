import type {
  QueryResolvers,
  MutationResolvers,
  CharacterFinancesRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const characterFinanceses: QueryResolvers['characterFinanceses'] =
  () => {
    return db.characterFinances.findMany()
  }

export const characterFinances: QueryResolvers['characterFinances'] = ({
  id,
}) => {
  return db.characterFinances.findUnique({
    where: { id },
  })
}

export const createCharacterFinances: MutationResolvers['createCharacterFinances'] =
  ({ input }) => {
    return db.characterFinances.create({
      data: input,
    })
  }

export const updateCharacterFinances: MutationResolvers['updateCharacterFinances'] =
  ({ id, input }) => {
    return db.characterFinances.update({
      data: input,
      where: { id },
    })
  }

export const deleteCharacterFinances: MutationResolvers['deleteCharacterFinances'] =
  ({ id }) => {
    return db.characterFinances.delete({
      where: { id },
    })
  }

export const CharacterFinances: CharacterFinancesRelationResolvers = {
  character: (_obj, { root }) => {
    return db.characterFinances
      .findUnique({ where: { id: root?.id } })
      .character()
  },
}
