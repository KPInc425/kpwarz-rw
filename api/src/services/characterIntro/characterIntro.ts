import type {
  QueryResolvers,
  MutationResolvers,
  CharacterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const getCharacterIntro = ({ id }) => {
  return db.character.findUnique({
    where: { id },
  })
}
