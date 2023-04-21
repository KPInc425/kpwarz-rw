import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const getGameInfo: QueryResolvers['getGameInfo'] = ({ id }) => {
  return db.game.findFirst({
    where: { id, userId: context.currentUser.id },
  })
}
