import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const getCharacterIntro: QueryResolvers['getCharacterIntro'] = ({
  id,
}) => {
  return db.character.findFirst({
    where: { id, userId: context.currentUser.id },
  })
}
